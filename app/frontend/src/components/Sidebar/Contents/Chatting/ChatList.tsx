import { useEffect, useRef } from 'react';

import { ResponseParticipant } from '@morak/apitype';
import { ChatMessage } from '@morak/chat/src/interface/message.interface';

import { useObserver } from '@/hooks/useObserver';

import * as styles from './index.css';
import { MemorizedNotificationItem } from './NotificationItem';
import { MemorizedTalkItem } from './TalkItem';

type ChatListProps = {
  chatItems: ChatMessage[];
  userId: string;
  participants: ResponseParticipant[];
  fetchPrevMessages: () => void;
};

export function ChatList({
  chatItems,
  userId,
  participants,
  fetchPrevMessages,
}: ChatListProps) {
  const prevScrollHeightRef = useRef(0);
  const listElemRef = useRef<HTMLUListElement>(null);
  const observableRef = useRef<HTMLDivElement | null>(null);
  const exposed = useObserver(observableRef);

  useEffect(() => {
    if (!listElemRef.current) {
      return;
    }

    const { scrollTop, clientHeight, scrollHeight } = listElemRef.current;
    if (exposed) {
      listElemRef.current.scrollTo({
        top: scrollHeight - prevScrollHeightRef.current,
      });
    }

    if (
      scrollTop + clientHeight >=
      prevScrollHeightRef.current - clientHeight
    ) {
      listElemRef.current.scrollTo({
        top: scrollHeight - clientHeight,
      });
    }

    prevScrollHeightRef.current = scrollHeight;
  }, [chatItems, exposed]);

  useEffect(() => {
    if (exposed) {
      fetchPrevMessages();
    }
  }, [exposed, fetchPrevMessages]);

  return (
    <ul className={styles.chatList} ref={listElemRef}>
      <div ref={observableRef} />
      {chatItems.map((chatItem) => {
        const participantInfo = participants.find(
          (participant) => participant.id === chatItem.user,
        );
        return chatItem.messageType === 'talk' ? (
          <MemorizedTalkItem
            key={chatItem.date.toString()}
            nickname={participantInfo?.nickname || ''}
            profilePicture={participantInfo?.profilePicture || ''}
            contents={chatItem.contents}
            date={chatItem.date}
            isMine={chatItem.user === userId}
          />
        ) : (
          <MemorizedNotificationItem
            key={chatItem.date.toString()}
            contents={chatItem.contents}
          />
        );
      })}
    </ul>
  );
}
