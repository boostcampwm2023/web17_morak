import { useEffect, useState } from 'react';

import SocketClient from '@morak/chat/src/client/index';
import { ChatMessage } from '@morak/chat/src/interface/message.interface';
import { RequestChatUser } from '@morak/chat/src/interface/user.interface';

import { Error } from '@/components';
import { useGetMyInfoQuery } from '@/queries/hooks';
import { Member } from '@/types';

import { ChatList } from './ChatList';
import { ChattingFooter } from './ChattingFooter';
import { ChattingHeader } from './ChattingHeader';
import * as styles from './index.css';

const socketClient = new SocketClient('http://localhost:4000');

type ChattingProps = {
  id: string;
  title: string;
  participants: Member[];
};

export function Chatting({ id, title, participants }: ChattingProps) {
  const [message, setMessage] = useState('');
  const { data: currentUser } = useGetMyInfoQuery();
  const chatItems: ChatMessage[] = [];

  const chatUser: RequestChatUser = {
    userId: currentUser?.providerId || '1',
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;

    socketClient.sendMessage(chatUser, message);
    setMessage('');
  };

  useEffect(() => {
    socketClient.connectSocket();
    console.log('연결됨');
    return () => {
      socketClient.disconnectSocket();
      console.log('연결종료');
    };
  }, []);

  if (!currentUser || !id)
    return (
      <div className={styles.container}>
        <Error message="정보 불러오기 에러" />
      </div>
    );

  return (
    <div className={styles.container}>
      <ChattingHeader title={title} participants={participants} />
      <ChatList chatItems={chatItems} currentUserId={currentUser.providerId} />
      <ChattingFooter value={message} onChange={onChange} onSubmit={onSubmit} />
    </div>
  );
}
