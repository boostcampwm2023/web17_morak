import { UserChip } from '@/components';
import { sansBold24 } from '@/styles/font.css';
import { Member, Mogaco } from '@/types';

import { DetailHeaderButtons } from './DetailHeaderButtons';
import * as styles from './index.css';

type DetailHeaderProps = {
  id: string;
  currentUser: Member;
  mogacoData: Mogaco;
  participantList: Member[];
};

export function DetailHeader({
  id,
  currentUser,
  mogacoData,
  participantList,
}: DetailHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <div className={sansBold24}>{mogacoData.title}</div>
        <div className={styles.buttons}>
          <DetailHeaderButtons
            id={id}
            currentUser={currentUser}
            mogacoData={mogacoData}
            participantList={participantList}
          />
        </div>
      </div>
      <div className={styles.hostUser}>
        <UserChip
          username={mogacoData.member.nickname}
          profileSrc={mogacoData.member.profilePicture}
        />
        <span>부스트캠프 웹·모바일 8기</span>
      </div>
    </div>
  );
}
