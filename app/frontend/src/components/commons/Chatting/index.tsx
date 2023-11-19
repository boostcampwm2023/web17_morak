import { ReactComponent as People } from '@assets/icons/people.svg';
import { vars } from '@styles';
import { Chat, User } from '@types';

import * as styles from './index.css';
import { NotificationItem } from './NotificationItem';
import { TalkItem } from './TalkItem';

type ChattingProps = {
  title: string;
  participants: User[];
  chatItems: Chat[];
  currentUsername: string;
};

export function Chatting({ title, participants, chatItems, currentUsername }: ChattingProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <div className={styles.participants}>
          <People fill={vars.color.grayscale200} />
          <span>{participants.length}</span>
        </div>
      </div>
      <ul className={styles.chatList}>
        {chatItems.map((chatItem) =>
          chatItem.type === 'talk' ? (
            <TalkItem key={chatItem.id} talk={chatItem} isMine={chatItem.user.username === currentUsername} />
          ) : (
            <NotificationItem key={chatItem.id} notification={chatItem} />
          ),
        )}
      </ul>
      <form className={styles.footer}>
        <textarea className={styles.textarea} rows={4} />
        <button type="submit" className={styles.submitButton}>
          보내기
        </button>
      </form>
    </div>
  );
}
