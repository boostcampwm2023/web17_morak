import { useEffect, useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { ReactComponent as ArrowDown } from '@/assets/icons/arrow_down.svg';
import { ReactComponent as Calendar } from '@/assets/icons/calendar.svg';
import { ReactComponent as Map } from '@/assets/icons/map.svg';
import { ReactComponent as People } from '@/assets/icons/people.svg';
import { Error, Loading, UserChip } from '@/components';
import { useMap } from '@/hooks';
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
  const mapRef = useRef<HTMLDivElement>(null);
  const { mapInstance, updateMarker } = useMap(mapRef);

  useEffect(() => {
    updateMarker({ latitude, longitude }, 'green');
    mapInstance?.setOptions({ zoomControl: false });
  }, [latitude, longitude, mapInstance, updateMarker]);

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
      <div className={styles.infoItem}>
        <Calendar width={24} height={24} fill={vars.color.grayscale200} />
        <span>{dayjs(mogacoData.date).format('YYYY/MM/DD HH:mm~')}</span>
      </div>
      <div className={styles.infoItem}>
        <Map width={24} height={24} fill={vars.color.grayscale200} />
        <span>{mogacoData.address}</span>
      </div>
      <div id="map" className={styles.map} ref={mapRef} />
    </div>
  );
}
