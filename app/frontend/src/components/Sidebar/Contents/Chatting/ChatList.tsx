import { useEffect, useRef } from 'react';

import { ResponseParticipant } from '@morak/apitype';
import { ChatMessage } from '@morak/chat/src/interface/message.interface';

import { useObserver } from '@/hooks/useObserver';

import * as styles from './index.css';
import { MemorizedTalkItem } from './TalkItem';

type ChatListProps = {
  chatItems: ChatMessage[];
  currentUserId: string;
  participants: ResponseParticipant[];
  fetchPrevChatItems: () => void;
};

export function ChatList({
  chatItems,
  currentUserId,
  participants,
  fetchPrevChatItems,
}: ChatListProps) {
  const prevScrollHeightRef = useRef(0);
  const listElemRef = useRef<HTMLUListElement>(null);
  const observableRef = useRef<HTMLDivElement | null>(null);
  const exposed = useObserver(observableRef);

  const scrollToBottom = () => {
    if (!listElemRef.current) {
      return;
    }

    const { scrollHeight, clientHeight } = listElemRef.current;
    listElemRef.current.scrollTo({
      top: scrollHeight - clientHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!listElemRef.current) {
      return;
    }

    const { scrollTop, clientHeight, scrollHeight } = listElemRef.current;
    if (scrollTop + clientHeight === prevScrollHeightRef.current) {
      scrollToBottom();
    }

    prevScrollHeightRef.current = scrollHeight;
  }, [chatItems]);

  useEffect(() => {
    if (exposed) {
      fetchPrevChatItems();
    }
  }, [exposed, fetchPrevChatItems]);

  return (
    <ul className={styles.chatList} ref={listElemRef}>
      <div ref={observableRef} className={styles.observable}>
        옵저빙 타겟
      </div>
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
