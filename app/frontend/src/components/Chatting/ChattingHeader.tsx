import { ReactComponent as People } from '@/assets/icons/people.svg';
import { Popover, UserChip } from '@/components';
import { vars } from '@/styles';
import { ChatUser } from '@/types';

import * as styles from './index.css';

type ChattingHeaderProps = {
  title: string;
  participants: ChatUser[];
};

export function ChattingHeader({ title, participants }: ChattingHeaderProps) {
  return (
    <div className={styles.header}>
      <span className={styles.title}>{title}</span>
      <div className={styles.participants}>
        <People width={16} height={16} fill={vars.color.grayscale200} />
        <span>{participants.length}</span>
        <Popover type="right" className={styles.popover}>
          <div className={styles.userList}>
            {participants.map(({ id, username, profileSrc }) => (
              <UserChip key={id} username={username} profileSrc={profileSrc} />
            ))}
          </div>
        </Popover>
      </div>
    </div>
  );
}
