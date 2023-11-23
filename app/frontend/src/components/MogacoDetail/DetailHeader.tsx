import { useState, useEffect } from 'react';

import { UserChip } from '@/components';
import { member } from '@/services';
import { sansBold24 } from '@/styles/font.css';
import { UserInfo } from '@/types';

import { DetailHeaderButtons } from './DetailHeaderButtons';
import * as styles from './index.css';

type DetailHeaderProps = {
  id: string;
  memberId: string;
  title: string;
  status: '모집 중' | '마감' | '종료';
  userHosted: boolean;
  userParticipated: boolean;
};

export function DetailHeader({
  id,
  memberId,
  title,
  status,
  userHosted,
  userParticipated,
}: DetailHeaderProps) {
  const [hostUser, setHostUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (hostUser) {
      return;
    }

    const getUser = async () => {
      const data = await member.userInfoById(memberId);
      setHostUser(data);
    };

    getUser();
  }, [hostUser, memberId]);

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <div className={sansBold24}>{title}</div>
        <div className={styles.buttons}>
          <DetailHeaderButtons
            id={id}
            status={status}
            userHosted={userHosted}
            userParticipated={userParticipated}
          />
        </div>
      </div>
      <div className={styles.hostUser}>
        {hostUser && (
          <UserChip
            username={hostUser.nickname}
            profileSrc={hostUser.profilePicture}
          />
        )}
        <span>부스트캠프 웹·모바일 8기</span>
      </div>
    </div>
  );
}
