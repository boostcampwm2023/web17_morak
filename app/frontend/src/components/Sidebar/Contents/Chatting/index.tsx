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
    resetChatItems,
    sendMessage,
    notifyToJoin,
    notifyToLeave,
    fetchPrevMessages,
    joinRoom,
    leaveRoom,
  } = useChatting(postId);

  useEffect(() => {
    const participated = participants.find(
      (p) => p.providerId === currentUser.providerId,
    );
    if (participated) {
      if (!participatedRef.current) {
        joinRoom(participated.id, () =>
          notifyToJoin(participated.nickname, participated.id),
        );
        participatedRef.current = participated;
      } else {
        joinRoom(participated.id);
      }
    }

    if (!participated && participatedRef.current) {
      notifyToLeave(
        participatedRef.current.nickname,
        participatedRef.current.id,
      );
      leaveRoom();
      resetChatItems();
      participatedRef.current = undefined;
    }

    setUserData(participated);
  }, [
    participants,
    currentUser,
    resetChatItems,
    notifyToJoin,
    notifyToLeave,
    joinRoom,
    leaveRoom,
  ]);

  useEffect(() => () => leaveRoom(), [leaveRoom]);

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
