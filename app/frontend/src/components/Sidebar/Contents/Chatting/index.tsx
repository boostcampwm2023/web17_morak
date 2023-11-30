import { useEffect, useState } from 'react';

import { ResponseParticipant } from '@morak/apitype/dto/response/participant';
import SocketClient from '@morak/chat/src/client/index';
import {
  ChatMessage,
  StatusType,
} from '@morak/chat/src/interface/message.interface';

import { Error } from '@/components';
import { useGetMyInfoQuery } from '@/queries/hooks';

import { ChatList } from './ChatList';
import { ChattingFooter } from './ChattingFooter';
import { ChattingHeader } from './ChattingHeader';
import * as styles from './index.css';

const socketClient = new SocketClient('http://localhost:4000');

type ChattingProps = {
  id: string;
  title: string;
  participants: ResponseParticipant[];
};

export function Chatting({ id, title, participants }: ChattingProps) {
  const [message, setMessage] = useState('');
  const { data: currentUser } = useGetMyInfoQuery();
  const chatItems: ChatMessage[] = [];

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;

    socketClient.sendMessage({
      id: '1',
      room: '1',
      user: '1',
      contents: message,
      date: new Date(),
      messageType: 'talk',
    });
    setMessage('');
  };

  const fetchChatting = (status: StatusType, msgs: ChatMessage[]) => {
    console.log('SendChatting');
    if (status === 200) console.log('[수신]', msgs);
  };

  useEffect(() => {
    socketClient.joinRoom({ user: '1', room: '1' }, fetchChatting);
    socketClient.subscribeToChat(fetchChatting);
    console.log('연결됨');
    return () => {
      socketClient.leaveRoom({ user: '1', room: '1' });
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
