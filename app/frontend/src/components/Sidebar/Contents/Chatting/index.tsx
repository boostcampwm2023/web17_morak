import { useEffect, useState } from 'react';

import SocketClient from '@morak/chat/src/client/index';
import {
  ChatMessage,
  StatusType,
} from '@morak/chat/src/interface/message.interface';
import { RequestUserRoomDto } from '@morak/chat/src/interface/user.interface';

import { Member } from '@/types';

import { ChatList } from './ChatList';
import { ChattingFooter } from './ChattingFooter';
import { ChattingHeader } from './ChattingHeader';
import * as styles from './index.css';

const socketClient = new SocketClient('http://localhost:8889/chat');

type ChattingProps = {
  id: string;
  title: string;
  participants: Member[];
  currentUserId: string;
};

const dummyId = Number(Math.random() * 100).toString();

export function Chatting({
  id,
  title,
  participants,
  currentUserId,
}: ChattingProps) {
  const [message, setMessage] = useState('');
  const [chatItems, setChatItems] = useState<ChatMessage[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;

    socketClient.sendMessage({
      id: currentUserId,
      room: id,
      user: dummyId,
      contents: message,
      date: new Date(),
      messageType: 'talk',
    });
    setMessage('');
  };

  useEffect(() => {
    const userRoomInfo: RequestUserRoomDto = { user: dummyId, room: '1' };
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
  }, [chatItems]);

  return (
    <div className={styles.container}>
      <ChattingHeader title={title} participants={participants} />
      <ChatList chatItems={chatItems} currentUserId={dummyId} />
      <ChattingFooter value={message} onChange={onChange} onSubmit={onSubmit} />
    </div>
  );
}
