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
  const { chatItems, sendMessage, fetchPrevMessages } = useChatting(
    postId,
    currentUser.id,
    currentUser.nickname,
  );

  return (
    <div className={styles.container}>
      <ChattingHeader title={title} participants={participants} />
      <ChatList
        chatItems={chatItems}
        userId={currentUser.id}
        participants={participants}
        fetchPrevMessages={fetchPrevMessages}
      />
      <ChattingFooter sendMessage={sendMessage} />
    </div>
  );
}
