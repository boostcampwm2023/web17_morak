import { useQueries } from '@tanstack/react-query';

import { Error, Loading, UserChip } from '@/components';
import { queryKeys } from '@/queries';
import { getMyInfoQuery } from '@/queries/hooks';

import { DetailHeaderButtons } from './DetailHeaderButtons';
import * as styles from './index.css';

type DetailHeaderProps = {
  id: string;
  openChatting: () => void;
};

export function DetailHeader({ id, openChatting }: DetailHeaderProps) {
  const [
    { data: currentUser, isLoading: currentUserLoading },
    { data: mogacoData, isLoading: mogacoDataLoading },
  ] = useQueries({
    queries: [getMyInfoQuery, queryKeys.mogaco.detail(id)],
  });

  if (currentUserLoading || mogacoDataLoading) {
    return <Loading />;
  }

  if (!currentUser) {
    return <Error message="사용자 인증에 실패했습니다. 로그인해 주세요." />;
  }

  if (!mogacoData) {
    return <Error message="모각코 정보를 불러오는 데에 실패했습니다." />;
  }

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <div className={styles.titleText}>{mogacoData.title}</div>
        <div className={styles.buttons}>
          <DetailHeaderButtons
            postId={id}
            currentUser={currentUser}
            mogacoData={mogacoData}
            openChatting={openChatting}
          />
        </div>
      </div>
      <div className={styles.hostUser}>
        <UserChip
          username={mogacoData.member.nickname}
          profileSrc={mogacoData.member.profilePicture}
        />
        <span className={styles.groupTitle}>{mogacoData.groupTitle}</span>
      </div>
    </div>
  );
}
