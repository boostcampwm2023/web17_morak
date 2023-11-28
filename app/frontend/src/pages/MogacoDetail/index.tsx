import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { ChattingSidebar, Error, Loading } from '@/components';
import { queryKeys } from '@/queries';
import { useGetMyInfoQuery } from '@/queries/hooks';
import { vars } from '@/styles';

import { DetailHeader } from './DetailHeader';
import { DetailInfo } from './DetailInfo';
import * as styles from './index.css';

export function MogacoDetailPage() {
  const [chattingClosed, setChattingClosed] = useState(true);
  const { id } = useParams();

  const { data: mogacoData, isLoading: mogacoDataLoading } = useQuery(
    queryKeys.mogaco.detail(id!),
  );
  const { data: currentUser, isLoading: currentUserLoading } =
    useGetMyInfoQuery();

  if (mogacoDataLoading || currentUserLoading) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Loading color={vars.color.grayscale200} />
        </div>
      </div>
    );
  }

  if (!mogacoData || !currentUser) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Error message="정보를 불러오지 못했습니다." />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <ChattingSidebar
        closed={chattingClosed}
        toggleClosed={() => setChattingClosed(!chattingClosed)}
        participants={mogacoData.participants}
        title={mogacoData.title}
        chatItems={[]}
        currentUsername={currentUser.nickname}
      />
      <div className={styles.container}>
        <DetailHeader id={id!} openChatting={() => setChattingClosed(false)} />
        <DetailInfo id={id!} />
        <div>{mogacoData.contents}</div>
        <hr className={styles.horizontalLine} />
      </div>
    </div>
  );
}
