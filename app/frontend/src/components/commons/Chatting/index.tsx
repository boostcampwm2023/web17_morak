import { Chat, ChatUser } from '@/types';

import { ChatList } from './ChatList';
import { ChattingFooter } from './ChattingFooter';
import { ChattingHeader } from './ChattingHeader';
import * as styles from './index.css';

type ChattingProps = {
  title: string;
  participants: ChatUser[];
  chatItems: Chat[];
  currentUsername: string;
};

export function Chatting({
  title,
  participants,
  chatItems,
  currentUsername,
}: ChattingProps) {
  return (
    <div className={styles.container}>
      <ChattingHeader title={title} participants={participants} />
      <ChatList chatItems={chatItems} currentUsername={currentUsername} />
      <ChattingFooter />
    </div>
  );
}
