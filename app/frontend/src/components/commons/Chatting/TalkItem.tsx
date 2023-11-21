import dayjs from 'dayjs';

import { Talk } from '@/types';

import * as styles from './TalkItem.css';
import { UserInfo } from './UserInfo';

type TalkItemProps = {
  talk: Talk;
  isMine: boolean;
};

export function TalkItem({
  talk: {
    user: { username, profileSrc },
    datetime,
    content,
  },
  isMine,
}: TalkItemProps) {
  return (
    <div className={styles.container}>
      {!isMine && <UserInfo username={username} profileSrc={profileSrc} />}
      <div className={`${styles.content} ${isMine && styles.isMine}`}>
        {content}
      </div>
      <div className={`${styles.datetime} ${isMine && styles.isMine}`}>
        {dayjs(datetime).format('MM.DD h:mm A')}
      </div>
    </div>
  );
}
