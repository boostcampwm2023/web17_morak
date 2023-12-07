import { useEffect } from 'react';

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
  userId: string;
};

export function Chatting({
  postId,
  title,
  participants,
  userId,
}: ChattingProps) {
  const { sendMessage, fetchPrevMessages, chatItems, effectCallback } =
    useChatting(postId, userId);

  useEffect(effectCallback, [userId, postId, effectCallback]);

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
