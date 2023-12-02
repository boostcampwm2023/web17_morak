import { useEffect, useState } from 'react';

import SocketClient from '@morak/chat/src/client/index';
import {
  ChatMessage,
  StatusType,
} from '@morak/chat/src/interface/message.interface';

import { Member } from '@/types';

import { ChatList } from './ChatList';
import { ChattingFooter } from './ChattingFooter';
import { ChattingHeader } from './ChattingHeader';
import * as styles from './index.css';

const socketClient = new SocketClient('http://localhost:8889/chat');

type ChattingProps = {
  postId: string;
  title: string;
  participants: Member[];
  currentUserId: string;
};

const dummyId = (Math.random() * 100).toFixed().toString();

export function Chatting({
  postId,
  title,
  participants,
  currentUserId,
}: ChattingProps) {
  const [chatItems, setChatItems] = useState<ChatMessage[]>([]);

  const sendMessage = (message: string) => {
    socketClient.sendMessage({
      messageType: 'talk',
      user: dummyId || currentUserId,
      room: postId,
      contents: message,
      date: new Date(),
    });
  };

  useEffect(() => {
    const userRoomInfo = { user: dummyId || currentUserId, room: postId };
    const fetchChatting = (status: StatusType, msgs: ChatMessage[]) => {
      if (status === 200) {
        setChatItems([...chatItems, ...msgs]);
      }
    };

    socketClient.joinRoom(userRoomInfo, fetchChatting);
    socketClient.subscribeToChat(fetchChatting);
    return () => {
      socketClient.leaveRoom(userRoomInfo);
    };
  }, [chatItems, currentUserId, postId]);

  return (
    <div className={styles.container}>
      <ChattingHeader title={title} participants={participants} />
      <ChatList chatItems={chatItems} currentUserId={dummyId} />
      <ChattingFooter sendMessage={sendMessage} />
    </div>
  );
}
