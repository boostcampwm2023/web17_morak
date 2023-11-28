import { Chat } from '@/types';

import * as styles from './index.css';
import { NotificationItem } from './NotificationItem';
import { TalkItem } from './TalkItem';

type ChatListProps = {
  chatItems: Chat[];
  currentUsername: string;
};

export function ChatList({ chatItems, currentUsername }: ChatListProps) {
  return (
    <ul className={styles.chatList}>
      {chatItems.map((chatItem) =>
        chatItem.type === 'talk' ? (
          <TalkItem
            key={chatItem.id}
            talk={chatItem}
            isMine={chatItem.user.username === currentUsername}
          />
        ) : (
          <NotificationItem key={chatItem.id} notification={chatItem} />
        ),
      )}
    </ul>
  );
}
