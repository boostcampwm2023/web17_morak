/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState, useRef } from 'react';

import { ResponseParticipant } from '@morak/apitype';
import SocketClient from '@morak/chat/src/client/index';
import {
  ChatMessage,
  StatusType,
} from '@morak/chat/src/interface/message.interface';

import { ChatList } from './ChatList';
import { ChattingFooter } from './ChattingFooter';
import { ChattingHeader } from './ChattingHeader';
import { URL } from '@/constants';
import * as styles from './index.css';

const socketClient = new SocketClient(URL.SOCKET, URL.SOCKET_PATH);

type ChattingProps = {
  postId: string;
  title: string;
  participants: ResponseParticipant[];
  userId: string;
  userNickname: string;
};

export function Chatting({
  postId,
  title,
  participants,
  userId,
  userNickname,
}: ChattingProps) {
  const [chatItems, setChatItems] = useState<ChatMessage[]>([]);
  const lastDateRef = useRef<Date | null>(new Date());

  const sendMessage = (message: string) => {
    socketClient.sendMessage({
      messageType: 'talk',
      user: userId,
      room: postId,
      contents: message,
      date: new Date(),
    });
  };

  const notifyToJoin = () => {
    socketClient.sendMessage({
      messageType: 'notification',
      user: userId,
      room: postId,
      contents: `${userNickname} 님이 입장하셨습니다.`,
      date: new Date(),
    });
  };

  const notifyToLeave = () => {
    socketClient.sendMessage({
      messageType: 'notification',
      user: userId,
      room: postId,
      contents: `${userNickname} 님이 퇴장하셨습니다.`,
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

  useEffect(() => {
    const fetchChatting = (status: StatusType, msgs: ChatMessage[]) => {
      if (status === 200) {
        setChatItems((items) => [...items, ...msgs]);
      }
    };

    socketClient.joinRoom({ user: userId, room: postId }, (status) => {
      if (status === 200) {
        // console.log('입장 성공');
      }
    });
    socketClient.subscribeToChat(fetchChatting);

    return () => socketClient.leaveRoom({ user: userId, room: postId });
  }, [userId, postId]);

  return (
    <div className={styles.container}>
      <ChattingHeader title={title} participants={participants} />
      <ChatList
        chatItems={chatItems}
        userId={userId}
        participants={participants}
        fetchPrevMessages={fetchPrevMessages}
      />
      <ChattingFooter sendMessage={sendMessage} />
    </div>
  );
}
