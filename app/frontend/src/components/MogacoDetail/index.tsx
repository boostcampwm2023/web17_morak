import { Mogaco } from '@/types';

import { DetailContents } from './DetailContents';
import { DetailHeader } from './DetailHeader';
import { DetailInfo } from './DetailInfo';
import * as styles from './index.css';

type MogacoDetailProps = Mogaco;

export function MogacoDetailPage({
  memberId,
  title,
  maxHumanCount,
  participantList,
  date,
  address,
  contents,
  status,
}: MogacoDetailProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <DetailHeader title={title} status={status} memberId={memberId} />
        <DetailInfo
          participantList={participantList}
          maxHumanCount={maxHumanCount}
          date={date}
          address={address}
        />
        <DetailContents contents={contents} />
        <hr className={styles.horizontalLine} />
      </div>
    </div>
  );
}
