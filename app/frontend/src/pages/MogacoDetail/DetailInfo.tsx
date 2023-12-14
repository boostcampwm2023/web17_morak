import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { ReactComponent as ArrowDown } from '@/assets/icons/arrow_down.svg';
import { ReactComponent as Calendar } from '@/assets/icons/calendar.svg';
import { ReactComponent as Map } from '@/assets/icons/map.svg';
import { ReactComponent as People } from '@/assets/icons/people.svg';
import { Error, Loading, UserChip } from '@/components';
import { TMAP_API_KEY, DEFAULT_ZOOM_LEVEL } from '@/constants';
import { queryKeys } from '@/queries';
import { vars } from '@/styles';

import * as styles from './index.css';

type DetailInfoProps = {
  id: string;
  latitude: number;
  longitude: number;
};

export function DetailInfo({ id, latitude, longitude }: DetailInfoProps) {
  const [participantsShown, setParticipantsShown] = useState(false);

  const { data: mogacoData, isLoading: mogacoDataLoading } = useQuery(
    queryKeys.mogaco.detail(id),
  );

  const toggleParticipantsShown = () =>
    setParticipantsShown(!participantsShown);

  if (mogacoDataLoading) {
    return <Loading />;
  }

  if (!mogacoData) {
    return <Error message="모각코 정보를 불러오지 못했습니다." />;
  }

  const staticMapURL = `
  https://apis.openapi.sk.com/tmap/staticMap?appKey=${TMAP_API_KEY}&longitude=${longitude}&latitude=${latitude}&zoom=${DEFAULT_ZOOM_LEVEL}&markers=pin-m@1FAB70(${longitude},${latitude})viewSize:0.6
  `;

  return (
    <div className={styles.info}>
      <div className={styles.infoItem}>
        <People width={24} height={24} fill={vars.color.grayscale200} />
        <span>
          <span>{mogacoData.participants.length}</span>/
          <span>{mogacoData.maxHumanCount}</span>
        </span>
        <button
          type="button"
          className={`${styles.togglePeopleButton} ${
            participantsShown ? styles.shown : ''
          }`}
          onClick={toggleParticipantsShown}
          aria-label={
            participantsShown ? '참석자 목록 닫기' : '참석자 목록 열기'
          }
        >
          <ArrowDown width={16} height={16} fill={vars.color.grayscaleBlack} />
        </button>
      </div>
      <div
        className={`${styles.participants} ${
          participantsShown ? styles.shown : ''
        }`}
      >
        {mogacoData.participants.map((participant) => (
          <UserChip
            key={participant.providerId}
            username={participant.nickname}
            profileSrc={participant.profilePicture}
          />
        ))}
      </div>
      <time
        className={styles.infoItem}
        dateTime={dayjs(mogacoData.date).format('YYYY-MM-DD HH:mm')}
      >
        <Calendar width={24} height={24} fill={vars.color.grayscale200} />
        <span>{dayjs(mogacoData.date).format('YYYY-MM-DD HH:mm~')}</span>
      </time>
      <address className={styles.infoItem}>
        <Map width={24} height={24} fill={vars.color.grayscale200} />
        <span>{mogacoData.address}</span>
      </address>
      <img
        className={styles.map}
        src={staticMapURL}
        alt={`${mogacoData.title} 지도 이미지`}
      />
    </div>
  );
}
