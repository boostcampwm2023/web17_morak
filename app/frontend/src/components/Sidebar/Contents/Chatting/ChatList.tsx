import { ChatMessage } from '@morak/chat/src/interface/message.interface';

import * as styles from './index.css';
import { NotificationItem } from './NotificationItem';
import { TalkItem } from './TalkItem';

type ChatListProps = {
  chatItems: ChatMessage[];
  currentUserId: string;
};

export function ChatList({ chatItems, currentUserId }: ChatListProps) {
  return (
    <ul className={styles.chatList}>
      {chatItems.map((chatItem) =>
        chatItem.messageType === 'talk' ? (
          <TalkItem
            key={chatItem.id}
            talk={chatItem}
            isMine={chatItem.senderId === currentUserId}
          />
        ) : (
          <NotificationItem key={chatItem.id} notification={chatItem} />
        ),
      )}
    </ul>
  );
}
