import { useState } from 'react';

import { useQueries } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { ReactComponent as ArrowDown } from '@/assets/icons/arrow_down.svg';
import { ReactComponent as Calendar } from '@/assets/icons/calendar_large.svg';
import { ReactComponent as Map } from '@/assets/icons/map_large.svg';
import { ReactComponent as People } from '@/assets/icons/people_large.svg';
import { Error, Loading, UserChip } from '@/components';
import { MAP_SAMPLE_IMAGE } from '@/constants';
import { queryKeys } from '@/queries';
import { vars } from '@/styles';

import * as styles from './index.css';

type DetailInfoProps = {
  id: string;
};

export function DetailInfo({ id }: DetailInfoProps) {
  const [participantsShown, setParticipantsShown] = useState(false);

  const [
    { data: mogacoData },
    { data: participantList, isLoading: participantListLoading },
  ] = useQueries({
    queries: [queryKeys.mogaco.detail(id), queryKeys.mogaco.participants(id)],
  });

  const toggleParticipantsShown = () =>
    setParticipantsShown(!participantsShown);

  if (participantListLoading) {
    return <Loading />;
  }

  if (!participantList) {
    return <Error message="참여자 정보를 불러오지 못했습니다." />;
  }

  return (
    <div className={styles.info}>
      <div className={styles.infoItem}>
        <People fill={vars.color.grayscale200} />
        <span>
          <span>{participantList ? participantList.length : '-'}</span>/
          <span>{mogacoData?.maxHumanCount}</span>
        </span>
        <button
          type="button"
          className={`${styles.togglePeopleButton} ${
            participantsShown ? styles.shown : ''
          }`}
          onClick={toggleParticipantsShown}
        >
          <ArrowDown fill={vars.color.grayscaleBlack} />
        </button>
      </div>
      <div
        className={`${styles.participants} ${
          participantsShown ? styles.shown : ''
        }`}
      >
        {participantList?.map((participant) => (
          <UserChip
            key={participant.providerId}
            username={participant.nickname}
            profileSrc={participant.profilePicture}
          />
        ))}
      </div>
      <div className={styles.infoItem}>
        <Calendar fill={vars.color.grayscale200} />
        <span>{dayjs(mogacoData?.date).format('YYYY/MM/DD HH:mm~')}</span>
      </div>
      <div className={styles.infoItem}>
        <Map fill={vars.color.grayscale200} />
        <span>{mogacoData?.address}</span>
      </div>
      <img src={MAP_SAMPLE_IMAGE} alt="맵 샘플 이미지" className={styles.map} />
    </div>
  );
}
