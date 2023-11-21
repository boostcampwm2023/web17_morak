import { useState } from 'react';

import { ReactComponent as ArrowDown } from '@/assets/icons/arrow_down.svg';
import { ReactComponent as Calendar } from '@/assets/icons/calendar_large.svg';
import { ReactComponent as Map } from '@/assets/icons/map_large.svg';
import { ReactComponent as People } from '@/assets/icons/people_large.svg';
import { Button } from '@/components';
import { UserChip } from '@/components/commons/UserChip';
import { vars } from '@/styles';
import { sansBold24 } from '@/styles/font.css';
import { UserInfo } from '@/types';

import * as styles from './index.css';

const participants: UserInfo[] = [
  {
    providerId: '1',
    profilePicture:
      'https://avatars.githubusercontent.com/u/50646827?s=400&v=4',
    nickname: '지승',
    email: '.',
  },
  {
    providerId: '2',
    profilePicture: 'https://avatars.githubusercontent.com/u/43867711?s=64&v=4',
    nickname: '태림',
    email: '',
  },
  {
    providerId: '3',
    profilePicture:
      'https://avatars.githubusercontent.com/u/110762136?s=64&v=4',
    nickname: '지원',
    email: '',
  },
];

export function Post() {
  const [participantsShown, setParticipantsShown] = useState(false);

  const toggleParticipantsShown = () =>
    setParticipantsShown(!participantsShown);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={sansBold24}>모각코 함께 해요</div>
          <Button theme="primary" shape="fill" size="large">
            참석하기
          </Button>
        </div>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <People fill={vars.color.grayscale200} />
            <span>
              <span>2</span>/<span>5</span>
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
            {participants.map((participant) => (
              <UserChip
                key={participant.providerId}
                username={participant.nickname}
                profileSrc={participant.profilePicture}
              />
            ))}
          </div>
          <div className={styles.infoItem}>
            <Calendar fill={vars.color.grayscale200} />
            <span>2023/11/7 14:00~19:00</span>
          </div>
          <div className={styles.infoItem}>
            <Map fill={vars.color.grayscale200} />
            <span>서울 관악구 남현3길 71 크레이저 커피</span>
          </div>
        </div>
        <div>
          사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락
          팀이 모입니다 사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서
          부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락 팀이 모입니다
          사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락
          팀이 모입니다
        </div>
        <hr className={styles.horizontalLine} />
      </div>
    </div>
  );
}
