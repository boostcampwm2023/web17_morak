import { ReactComponent as People } from '@assets/icons/people.svg';
import { vars } from '@styles';
import { Talk, User } from '@types';

import * as styles from './index.css';
import { TalkItem } from './TalkItem';

type ChattingProps = {
  title: string;
  participants: User[];
  talks: Talk[];
  currentUsername: string;
};

export function Chatting({ title, participants, talks, currentUsername }: ChattingProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <div className={styles.participants}>
          <People fill={vars.color.grayscale200} />
          <span>{participants.length}</span>
        </div>
      </div>
      <ul className={styles.talkSection}>
        {talks.map((talk) => (
          <TalkItem key={talk.id} talk={talk} isMine={talk.user.username === currentUsername} />
        ))}
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
