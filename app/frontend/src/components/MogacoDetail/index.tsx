import { useParams, useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/queries';

import { DetailHeader } from './DetailHeader';
import { DetailInfo } from './DetailInfo';
import * as styles from './index.css';

export function MogacoDetailPage() {
  const { id } = useParams();
  const navigator = useNavigate();

  const { data: currentUser } = useQuery(queryKeys.member.me());
  const { data: mogacoData } = useQuery(queryKeys.mogaco.detail(id!));
  const { data: participantList } = useQuery(
    queryKeys.mogaco.participants(id!),
  );

  if (!currentUser) {
    // eslint-disable-next-line no-alert
    window.alert('인증 정보가 없습니다.\n로그인해 주세요.');
    navigator('/');
    return <div>리다이렉션...</div>;
  }

  if (!mogacoData || !participantList) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <DetailHeader
          id={id!}
          currentUser={currentUser}
          mogacoData={mogacoData}
          participantList={participantList}
        />
        <DetailInfo mogacoData={mogacoData} participantList={participantList} />
        <div>{mogacoData.contents}</div>
        <hr className={styles.horizontalLine} />
      </div>
    </div>
  );
}
