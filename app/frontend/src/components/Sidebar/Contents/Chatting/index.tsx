import { useEffect, useRef, useState } from 'react';

import { ResponseParticipant } from '@morak/apitype';

import { useChatting } from '@/hooks';

import { ChatList } from './ChatList';
import { ChattingFooter } from './ChattingFooter';
import { ChattingHeader } from './ChattingHeader';
import * as styles from './index.css';

type ChattingProps = {
  postId: string;
  title: string;
  participants: ResponseParticipant[];
  currentUser: ResponseParticipant;
};

export function Chatting({
  postId,
  title,
  participants,
  currentUser,
}: ChattingProps) {
  const [userData, setUserData] = useState(
    participants.find((p) => p.providerId === currentUser.providerId),
  );
  const participatedRef = useRef(userData);
  const {
    chatItems,
    sendMessage,
    fetchPrevMessages,
    joinRoom,
    leaveRoom,
    subscribeToChat,
  } = useChatting(postId);

  useEffect(() => {
    if (!userData) {
      return;
    }

    joinRoom(userData.id);
    subscribeToChat();

    return () => leaveRoom(userData.id);
  }, [joinRoom, leaveRoom, subscribeToChat, userData]);

  useEffect(() => {
    const participated = participants.find(
      (p) => p.providerId === currentUser.providerId,
    );
    if (participated && !participatedRef.current) {
      console.log('모각코 참석');
      participatedRef.current = participated;
    }

    if (!participated && participatedRef.current) {
      console.log('모각코 참석 취소');
      participatedRef.current = undefined;
    }

    setUserData(participated);
  }, [participants, currentUser.providerId]);

  if (!userData) {
    return (
      <div className={styles.notParticipated}>
        아직 해당 모각코에 참여하지 않았습니다!
        <br />
        채팅방에 입장하려면 먼저 모각코에 참석해 주세요.
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ChattingHeader title={title} participants={participants} />
      <ChatList
        chatItems={chatItems}
        userId={userData.id}
        participants={participants}
        fetchPrevMessages={fetchPrevMessages}
      />
      <ChattingFooter userId={userData.id} sendMessage={sendMessage} />
    </div>
  );
}
