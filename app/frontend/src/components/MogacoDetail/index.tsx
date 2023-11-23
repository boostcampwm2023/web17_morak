import { useState, useEffect } from 'react';

import { mogaco } from '@/services';
import { Mogaco, Participant } from '@/types';

import { DetailContents } from './DetailContents';
import { DetailHeader } from './DetailHeader';
import { DetailInfo } from './DetailInfo';
import * as styles from './index.css';

type MogacoDetailProps = Mogaco;

export function MogacoDetailPage({
  id,
  memberId,
  title,
  maxHumanCount,
  date,
  address,
  contents,
  status,
}: MogacoDetailProps) {
  const [participantList, setParticipantList] = useState<Participant[]>([]);

  useEffect(() => {
    if (participantList) {
      return;
    }

    const getParticipantList = async () => {
      const data = await mogaco.participants(id);
      setParticipantList(data);
    };

    getParticipantList();
  }, [id, participantList]);

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
