import { useCallback, useEffect, useState } from 'react';

import { ResponseParticipant } from '@morak/apitype';
import SocketClient from '@morak/chat/src/client/index';
import {
  ChatMessage,
  StatusType,
} from '@morak/chat/src/interface/message.interface';

import { ChatList } from './ChatList';
import { ChattingFooter } from './ChattingFooter';
import { ChattingHeader } from './ChattingHeader';
import * as styles from './index.css';

const socketClient = new SocketClient('http://localhost:8889/chat');

type ChattingProps = {
  postId: string;
  title: string;
  participants: ResponseParticipant[];
  currentUserId: string;
};

function getDummyChatItem() {
  return {
    messageType: 'talk',
    user: '1',
    room: '1',
    contents: '더미',
    date: new Date(Math.floor(Math.random() * 10000000000)),
  };
}

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
      user: currentUserId,
      room: postId,
      contents: message,
      date: new Date(),
    });
  };

  const fetchPrevChatItems = useCallback(() => {
    setChatItems((items) => [
      getDummyChatItem(),
      getDummyChatItem(),
      getDummyChatItem(),
      ...items,
    ]);
  }, []);

  useEffect(() => {
    const userRoomInfo = { user: currentUserId, room: postId };
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
      <ChatList
        chatItems={chatItems}
        currentUserId={currentUserId}
        participants={participants}
        fetchPrevChatItems={fetchPrevChatItems}
      />
      <ChattingFooter sendMessage={sendMessage} />
    </div>
  );
}
