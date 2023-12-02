import { useEffect, useRef } from 'react';

import { ChatMessage } from '@morak/chat/src/interface/message.interface';

import { MemorizedChatItem } from './ChatItem';
import * as styles from './index.css';

type ChatListProps = {
  chatItems: Chat[];
  currentUsername: string;
};

export function ChatList({ chatItems, currentUserId }: ChatListProps) {
  const ref = useRef<HTMLUListElement>(null);

  const scrollToBottom = () => {
    if (!ref.current) return;

    const { scrollHeight, clientHeight } = ref.current;
    ref.current.scrollTop = scrollHeight - clientHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatItems]);

  return (
    <ul className={styles.chatList} ref={ref}>
      {chatItems.map((chatItem) => (
        <MemorizedChatItem
          key={chatItem.date.toString()}
          chatItem={chatItem}
          isMine={chatItem.user === currentUserId}
        />
      ))}
    </ul>
  );
}
