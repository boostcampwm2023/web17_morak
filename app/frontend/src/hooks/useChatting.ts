import { useCallback, useRef, useState } from 'react';

import SocketClient from '@morak/chat/src/client/index';
import {
  ChatMessage,
  StatusType,
} from '@morak/chat/src/interface/message.interface';

import { URL } from '@/constants';

const socketClient = new SocketClient(URL.SOCKET, URL.SOCKET_PATH);

export function useChatting(postId: string) {
  const [chatItems, setChatItems] = useState<ChatMessage[]>([]);
  const lastDateRef = useRef<Date | null>(new Date());

  const sendMessage = (message: string, userId: string) => {
    socketClient.sendMessage({
      messageType: 'talk',
      user: userId,
      room: postId,
      contents: message,
      date: new Date(),
    });
  };

  const notifyToJoin = (nickname: string, userId: string) => {
    socketClient.sendMessage({
      messageType: 'notification',
      user: userId,
      room: postId,
      contents: `${nickname} 님이 입장하셨습니다.`,
      date: new Date(),
    });
  };

  const notifyToLeave = (nickname: string, userId: string) => {
    socketClient.sendMessage({
      messageType: 'notification',
      user: userId,
      room: postId,
      contents: `${nickname} 님이 퇴장하셨습니다.`,
      date: new Date(),
    });
  };

  const fetchPrevMessages = useCallback(() => {
    if (!lastDateRef.current) {
      return;
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

  const joinRoom = useCallback(
    (userId: string) =>
      socketClient.joinRoom({ user: userId, room: postId }, () => {}),
    [postId],
  );

  const leaveRoom = useCallback(
    (userId: string) => socketClient.leaveRoom({ user: userId, room: postId }),
    [postId],
  );

  const subscribeToChat = useCallback(
    () =>
      socketClient.subscribeToChat(
        (status: StatusType, msgs: ChatMessage[]) => {
          if (status === 200) {
            setChatItems((items) => [...items, ...msgs]);
          }
        },
      ),
    [],
  );

  return {
    chatItems,
    sendMessage,
    fetchPrevMessages,
    notifyToJoin,
    notifyToLeave,
    joinRoom,
    leaveRoom,
    subscribeToChat,
  };
}
