import { memo } from 'react';

import dayjs from 'dayjs';

import { UserChip } from '@/components';

import * as styles from './ChatItem.css';

type TalkItemProps = {
  nickname?: string;
  profilePicture?: string;
  contents: string;
  date: Date;
  isMine: boolean;
};

function TalkItem({
  nickname,
  profilePicture,
  contents,
  date,
  isMine,
}: TalkItemProps) {
  const wrappedDate = dayjs(date);
  const dateString = wrappedDate.isSame(new Date(), 'date')
    ? `오늘 ${wrappedDate.format('h:mm A')}`
    : wrappedDate.format('MM.DD h:mm A');

  return (
    <div className={styles.talkContainer}>
      {!isMine && <UserChip username={nickname} profileSrc={profilePicture} />}
      <div className={`${styles.talkContents} ${isMine && styles.isMine}`}>
        {contents}
      </div>
      <div className={`${styles.datetime} ${isMine && styles.isMine}`}>
        {dateString}
      </div>
    </div>
  );
}

export const MemorizedTalkItem = memo(TalkItem);
