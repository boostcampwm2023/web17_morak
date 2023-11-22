import { DetailContent } from './DetailContent';
import { DetailHeader } from './DetailHeader';
import { DetailInfo } from './DetailInfo';
import * as styles from './index.css';

const participants = [
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

export function DetailPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <DetailHeader state="participated" />
        <DetailInfo
          participants={participants}
          maxParticipantsNumber={5}
          datetime="2023/11/7 14:00~19:00"
          location="서울 관악구 남현3길 71 크레이저 커피"
        />
        <DetailContent content="사당역에서 부스트캠프 모락 팀이 모입니다. 사당역에서 부스트캠프 모락 팀이 모입니다. 사당역에서 부스트캠프 모락 팀이 모입니다. 사당역에서 부스트캠프 모락 팀이 모입니다. 사당역에서 부스트캠프 모락 팀이 모입니다. 사당역에서 부스트캠프 모락 팀이 모입니다. 사당역에서 부스트캠프 모락 팀이 모입니다. 사당역에서 부스트캠프 모락 팀이 모입니다." />
        <hr className={styles.horizontalLine} />
      </div>
    </div>
  );
}
