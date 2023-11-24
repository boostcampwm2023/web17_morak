import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { Loading } from '@/components';
import { queryKeys } from '@/queries';
import { vars } from '@/styles';
import { sansBold16 } from '@/styles/font.css';

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
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Loading color={vars.color.grayscale200} />
        </div>
      </div>
    );
  }

  if (!mogacoData) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <span className={sansBold16}>정보를 불러오는 데에 실패했습니다.</span>
        </div>
      </div>
    );
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
