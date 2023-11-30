import { Chat } from '@/types';

import * as styles from './index.css';
import { TalkItem } from './TalkItem';

type ChatListProps = {
  chatItems: Chat[];
  currentUsername: string;
};

export function ChatList({ chatItems, currentUsername }: ChatListProps) {
  return (
    <ul className={styles.chatList}>
      {chatItems.map((chatItem) => (
        <TalkItem
          key={chatItem.id + chatItem.date.toString()}
          chatItem={chatItem}
          isMine={chatItem.user === currentUserId}
        />
      ))}
    </ul>
  );
}
