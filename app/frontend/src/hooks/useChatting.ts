import { useCallback, useEffect, useRef, useState } from 'react';

import SocketClient from '@morak/chat/src/client/index';
import {
  ChatMessage,
  StatusType,
} from '@morak/chat/src/interface/message.interface';
import { useQueryClient } from '@tanstack/react-query';

import { URL } from '@/constants';
import { queryKeys } from '@/queries';

const socketClient = new SocketClient(URL.SOCKET, URL.SOCKET_PATH);

export function useChatting(postId: string) {
  const [chatItems, setChatItems] = useState<ChatMessage[]>([]);
  const userIdRef = useRef<string | null>(null);
  const lastDateRef = useRef<Date | null | undefined>(undefined);
  const queryClient = useQueryClient();

  const sendMessage = (message: string, userId: string) => {
    socketClient.sendMessage({
      messageType: 'talk',
      user: userId,
      room: postId,
      contents: message,
      date: new Date(),
    });
  };

  const notifyToJoin = useCallback(
    (nickname: string, userId: string) => {
      const parsedNickname =
        nickname.length > 10 ? `${nickname.slice(0, 10)}...` : nickname;
      socketClient.sendMessage({
        messageType: 'notification',
        user: userId,
        room: postId,
        contents: `${parsedNickname} 님이 입장하셨습니다.`,
        date: new Date(),
      });
    },
    [postId],
  );

  const notifyToLeave = useCallback(
    (nickname: string, userId: string) => {
      const parsedNickname =
        nickname.length > 10 ? `${nickname.slice(0, 10)}...` : nickname;
      socketClient.sendMessage({
        messageType: 'notification',
        user: userId,
        room: postId,
        contents: `${parsedNickname} 님이 퇴장하셨습니다.`,
        date: new Date(),
      });
    },
    [postId],
  );

  const fetchPrevMessages = useCallback(() => {
    if (lastDateRef.current === null) {
      return;
    }

    if (lastDateRef.current === undefined) {
      lastDateRef.current = new Date();
    }

    socketClient.requestPrevMessage(
      postId,
      lastDateRef.current,
      (status, messages) => {
        if (status !== 200) {
          return;
        }

        if (messages.length === 0) {
          lastDateRef.current = null;
          return;
        }

        lastDateRef.current = messages[messages.length - 1].date;
        setChatItems((items) => [...messages.reverse(), ...items]);
      },
    );
  }, [postId]);

  const subscribeToChat = useCallback(
    () =>
      socketClient.subscribeToChat(
        (status: StatusType, msgs: ChatMessage[]) => {
          if (status !== 200) {
            return;
          }

          setChatItems((items) => [...items, ...msgs]);
          if (msgs.length === 1 && msgs[0].messageType === 'notification') {
            queryClient.invalidateQueries({
              queryKey: queryKeys.mogaco.detail(postId).queryKey,
            });
          }
        },
      ),
    [postId, queryClient],
  );

  const joinRoom = useCallback(
    (userId: string, callback?: () => void) => {
      if (userIdRef.current) {
        return;
      }

      userIdRef.current = userId;
      socketClient.joinRoom({ user: userId, room: postId }, (status) => {
        if (status === 200) {
          subscribeToChat();
          callback?.();
        }
      });
    },
    [postId, subscribeToChat],
  );

  const leaveRoom = useCallback(() => {
    if (!userIdRef.current) {
      return;
    }

    socketClient.leaveRoom({ user: userIdRef.current, room: postId });
    userIdRef.current = null;
  }, [postId]);

  const resetChatItems = useCallback(() => {
    setChatItems([]);
    lastDateRef.current = undefined;
  }, []);

  useEffect(() => {
    if (lastDateRef.current === null) {
      return;
    }

    lastDateRef.current = chatItems.length > 0 ? chatItems[0].date : undefined;
  }, [chatItems]);

  return {
    chatItems,
    resetChatItems,
    sendMessage,
    fetchPrevMessages,
    notifyToJoin,
    notifyToLeave,
    joinRoom,
    leaveRoom,
  };
}
