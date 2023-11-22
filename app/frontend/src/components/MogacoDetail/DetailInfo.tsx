import { useState } from 'react';

import dayjs from 'dayjs';

import { ReactComponent as ArrowDown } from '@/assets/icons/arrow_down.svg';
import { ReactComponent as Calendar } from '@/assets/icons/calendar_large.svg';
import { ReactComponent as Map } from '@/assets/icons/map_large.svg';
import { ReactComponent as People } from '@/assets/icons/people_large.svg';
import { UserChip } from '@/components';
import { MAP_SAMPLE_IMAGE } from '@/constants';
import { vars } from '@/styles';
import { Participant } from '@/types';

import * as styles from './index.css';

type DetailInfoProps = {
  participantList: Participant[];
  maxHumanCount: number;
  date: string;
  address: string;
};

export function DetailInfo({
  participantList,
  maxHumanCount,
  date,
  address,
}: DetailInfoProps) {
  const [participantsShown, setParticipantsShown] = useState(false);

  const toggleParticipantsShown = () =>
    setParticipantsShown(!participantsShown);

  return (
    <div className={styles.info}>
      <div className={styles.infoItem}>
        <People fill={vars.color.grayscale200} />
        <span>
          <span>{participantList.length}</span>/<span>{maxHumanCount}</span>
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
        {participantList.map((participant) => (
          <UserChip
            key={participant.id}
            username={participant.nickname}
            profileSrc={participant.profile}
          />
        ))}
      </div>
      <div className={styles.infoItem}>
        <Calendar fill={vars.color.grayscale200} />
        <span>{dayjs(date).format('YYYY/MM/DD HH:mm~')}</span>
      </div>
      <div className={styles.infoItem}>
        <Map fill={vars.color.grayscale200} />
        <span>{address}</span>
      </div>
      <img src={MAP_SAMPLE_IMAGE} alt="맵 샘플 이미지" className={styles.map} />
    </div>
  );
}
