import { ChatMessage } from '@morak/chat/src/interface/message.interface';
import dayjs from 'dayjs';

import { UserChip } from '@/components';

import * as styles from './TalkItem.css';

type TalkItemProps = {
  chatItem: ChatMessage;
  isMine: boolean;
};

export function TalkItem({ chatItem, isMine }: TalkItemProps) {
  return (
    <div className={styles.container}>
      {!isMine && <UserChip username={chatItem.user} profileSrc="" />}
      <div className={`${styles.content} ${isMine && styles.isMine}`}>
        {chatItem.contents}
      </div>
      <div className={`${styles.datetime} ${isMine && styles.isMine}`}>
        {dayjs(chatItem.date).format('MM.DD h:mm A')}
      </div>
    </div>
  );
}
