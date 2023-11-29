import { ChatMessage } from '@morak/chat/src/interface/message.interface';

import { Error } from '@/components';
import { useGetMyInfoQuery } from '@/queries/hooks';
import { Member } from '@/types';

import { ChatList } from './ChatList';
import { ChattingFooter } from './ChattingFooter';
import { ChattingHeader } from './ChattingHeader';
import * as styles from './index.css';

type ChattingProps = {
  id: string;
  title: string;
  participants: Member[];
};

export function Chatting({ id, title, participants }: ChattingProps) {
  const { data: currentUser } = useGetMyInfoQuery();
  const chatItems: ChatMessage[] = [];

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
      <ChattingFooter />
    </div>
  );
}
