import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/queries';

import { DetailHeader } from './DetailHeader';
import { DetailInfo } from './DetailInfo';
import * as styles from './index.css';

export function MogacoDetailPage() {
  const { id } = useParams();

  const { data: currentUser, isLoading: currentUserLoading } = useQuery(
    queryKeys.member.me(),
  );
  const { data: mogacoData, isLoading: mogacoDataLoading } = useQuery(
    queryKeys.mogaco.detail(id!),
  );
  const { data: participantList, isLoading: participantListLoading } = useQuery(
    queryKeys.mogaco.participants(id!),
  );

  if (mogacoDataLoading || participantListLoading) {
    return <div>로딩 중...</div>;
  }

  if (!mogacoData) {
    return <div>정보를 불러오는 데에 실패했습니다.</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <DetailHeader
          id={id!}
          currentUser={currentUser}
          currentUserLoading={currentUserLoading}
          mogacoData={mogacoData}
          participantList={participantList || []}
        />
        <DetailInfo
          mogacoData={mogacoData}
          participantList={participantList || []}
        />
        <div>{mogacoData.contents}</div>
        <hr className={styles.horizontalLine} />
      </div>
    </div>
  );
}
