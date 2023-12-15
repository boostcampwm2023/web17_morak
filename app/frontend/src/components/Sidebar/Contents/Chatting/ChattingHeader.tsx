import { ResponseParticipant } from '@morak/apitype';
import { Popover } from '@morak/ui';

import { ReactComponent as People } from '@/assets/icons/people.svg';
import { UserChip } from '@/components';
import { vars } from '@/styles';

import * as styles from './index.css';

type ChattingHeaderProps = {
  title: string;
  participants: ResponseParticipant[];
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
            {participants.map(({ providerId, nickname, profilePicture }) => (
              <UserChip
                key={providerId}
                username={nickname}
                profileSrc={profilePicture}
              />
            ))}
          </div>
        </Popover>
      </div>
    </div>
  );
}
