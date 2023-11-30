import { useEffect, useState } from 'react';

import { ResponseParticipant } from '@morak/apitype/dto/response/participant';
import SocketClient from '@morak/chat/src/client/index';
import {
  ChatMessage,
  StatusType,
} from '@morak/chat/src/interface/message.interface';

import { ChatList } from './ChatList';
import { ChattingFooter } from './ChattingFooter';
import { ChattingHeader } from './ChattingHeader';
import * as styles from './index.css';

const socketClient = new SocketClient('http://localhost:4000');

type ChattingProps = {
  id: string;
  title: string;
  participants: ResponseParticipant[];
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
    const fetchChatting = (status: StatusType, msgs: ChatMessage[]) => {
      if (status === 200) {
        setChatItems([...chatItems, ...msgs]);
      }
    };

    socketClient.joinRoom({ user: dummyId, room: '1' }, fetchChatting);
    socketClient.subscribeToChat(fetchChatting);
    return () => {
      socketClient.leaveRoom({ user: dummyId, room: '1' });
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
