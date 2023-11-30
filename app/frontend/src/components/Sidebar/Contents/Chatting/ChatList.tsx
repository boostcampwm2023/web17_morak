import { ChatMessage } from '@morak/chat/src/interface/message.interface';

import * as styles from './index.css';
import { TalkItem } from './TalkItem';

type ChatListProps = {
  chatItems: ChatMessage[];
  currentUserId: string;
};

export function ChatList({ chatItems, currentUserId }: ChatListProps) {
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
