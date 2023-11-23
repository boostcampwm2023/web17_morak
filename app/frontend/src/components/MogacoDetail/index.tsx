import { useState, useEffect } from 'react';

import { mogaco } from '@/services';
import { useUserAtom } from '@/stores';
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
  const [participantList, setParticipantList] = useState<Participant[] | null>(
    null,
  );
  const [user, setUser] = useUserAtom();

  if (!user)
    setUser({
      providerId: '1',
      nickname: '지승',
      profilePicture:
        'https://avatars.githubusercontent.com/u/50646827?s=40&v=4',
      email: 'js43og@gamil.com',
    });

  const userHosted = user?.providerId === memberId;
  const userParticipated = participantList
    ? !!participantList.find(
        (participant) => participant.id === user?.providerId,
      )
    : false;

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
        <DetailHeader
          id={id}
          title={title}
          status={status}
          memberId={memberId}
          userHosted={userHosted}
          userParticipated={userParticipated}
        />
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
