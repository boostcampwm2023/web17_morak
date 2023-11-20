import { ReactComponent as People } from '@/assets/icons/people.svg';
import { vars } from '@/styles';
import { User } from '@/types';

import * as styles from './index.css';

type ChattingHeaderProps = {
  title: string;
  participants: User[];
};

export function ChattingHeader({ title, participants }: ChattingHeaderProps) {
  return (
    <div className={styles.header}>
      <span className={styles.title}>{title}</span>
      <div className={styles.participants}>
        <People fill={vars.color.grayscale200} />
        <span>{participants.length}</span>
      </div>
    </div>
  );
}
