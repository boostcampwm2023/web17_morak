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
  currentUserId: string;
};

export function Chatting({
  postId,
  title,
  participants,
  currentUserId,
}: ChattingProps) {
  const [chatItems, setChatItems] = useState<ChatMessage[]>([]);
  const lastDateRef = useRef<Date | null>(new Date());

  const sendMessage = (message: string) => {
    socketClient.sendMessage({
      messageType: 'talk',
      user: currentUserId,
      room: postId,
      contents: message,
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

    socketClient.joinRoom({ user: currentUserId, room: postId }, (status) => {
      if (status === 200) {
        // console.log('입장 성공');
      }
    });
    socketClient.subscribeToChat(fetchChatting);

    return () => socketClient.leaveRoom({ user: currentUserId, room: postId });
  }, [currentUserId, postId]);

  return (
    <div className={styles.container}>
      <ChattingHeader title={title} participants={participants} />
      <ChatList
        chatItems={chatItems}
        currentUserId={currentUserId}
        participants={participants}
        fetchPrevMessages={fetchPrevMessages}
      />
      <ChattingFooter sendMessage={sendMessage} />
    </div>
  );
}
