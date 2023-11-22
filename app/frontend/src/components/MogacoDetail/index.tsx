import { MogacoProps } from '@/types';

import { DetailContent } from './DetailContent';
import { DetailHeader } from './DetailHeader';
import { DetailInfo } from './DetailInfo';
import * as styles from './index.css';

export function MogacoDetailPage({
  id,
  title,
  maxHumanCount,
  participantList,
  date,
  address,
  contents,
  status,
}: MogacoProps) {
  return (
    <div className={styles.wrapper} id={id}>
      <div className={styles.container}>
        <DetailHeader title={title} status={status} />
        <DetailInfo
          participants={participantList}
          maxParticipantsNumber={maxHumanCount}
          datetime={date}
          location={address}
        />
        <DetailContent content={contents} />
        <hr className={styles.horizontalLine} />
      </div>
    </div>
  );
}
