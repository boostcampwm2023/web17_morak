import { memo } from 'react';

import { ChatMessage } from '@morak/chat/src/interface/message.interface';
import dayjs from 'dayjs';

import { UserChip } from '@/components';

import * as styles from './TalkItem.css';

type TalkItemProps = {
  chatItem: ChatMessage;
  isMine: boolean;
};

function TalkItem({ chatItem, isMine }: TalkItemProps) {
  const date = dayjs(chatItem.date);
  const dateString = date.isSame(new Date(), 'date')
    ? `오늘 ${date.format('h:mm A')}`
    : date.format('MM.DD h:mm A');

  return (
    <div className={styles.container}>
      {!isMine && <UserChip username={chatItem.user} profileSrc="" />}
      <div className={`${styles.content} ${isMine && styles.isMine}`}>
        {chatItem.contents}
      </div>
      <div className={`${styles.datetime} ${isMine && styles.isMine}`}>
        {dateString}
      </div>
    </div>
  );
}

export const MemorizedTalkItem = memo(TalkItem);
