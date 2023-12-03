import { useEffect, useRef } from 'react';

import { ChatMessage } from '@morak/chat/src/interface/message.interface';

import { Member } from '@/types';

import * as styles from './index.css';
import { MemorizedTalkItem } from './TalkItem';

type ChatListProps = {
  chatItems: ChatMessage[];
  currentUserId: string;
  participants: Member[];
};

export function ChatList({
  chatItems,
  currentUserId,
  participants,
}: ChatListProps) {
  const ref = useRef<HTMLUListElement>(null);

  const scrollToBottom = () => {
    if (!ref.current) return;

    const { scrollHeight, clientHeight } = ref.current;
    ref.current.scrollTo({
      top: scrollHeight - clientHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatItems]);
  return (
    <ul className={styles.chatList} ref={ref}>
      {chatItems.map((chatItem) => {
        const participantInfo = participants.find(
          (participant) => participant.providerId === chatItem.user,
        );
        return (
          <MemorizedTalkItem
            key={chatItem.date.toString()}
            nickname={participantInfo?.nickname || ''}
            profilePicture={participantInfo?.profilePicture || ''}
            contents={chatItem.contents}
            date={chatItem.date}
            isMine={chatItem.user === currentUserId}
          />
        );
      })}
    </ul>
  );
}
