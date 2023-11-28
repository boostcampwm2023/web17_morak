import dayjs from 'dayjs';

import { UserChip } from '@/components';
import { Talk } from '@/types';

import * as styles from './TalkItem.css';

type TalkItemProps = {
  talk: Talk;
  isMine: boolean;
};

export function TalkItem({
  talk: {
    user: { nickname, profilePicture },
    date,
    contents,
  },
  isMine,
}: TalkItemProps) {
  return (
    <div className={styles.container}>
      {!isMine && <UserChip username={nickname} profileSrc={profilePicture} />}
      <div className={`${styles.content} ${isMine && styles.isMine}`}>
        {contents}
      </div>
      <div className={`${styles.datetime} ${isMine && styles.isMine}`}>
        {dayjs(date).format('MM.DD h:mm A')}
      </div>
    </div>
  );
}
