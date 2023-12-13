import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { ChattingSidebar, Divider, Error, Loading } from '@/components';
import { queryKeys } from '@/queries';
import { vars } from '@/styles';

import { DetailHeader } from './DetailHeader';
import { DetailInfo } from './DetailInfo';
import * as styles from './index.css';

export function MogacoDetailPage() {
  const { id } = useParams();
  const [chattingClosed, setChattingClosed] = useState(true);
  const { data: mogacoData, isLoading: mogacoDataLoading } = useQuery({
    ...queryKeys.mogaco.detail(id!),
    enabled: !!id,
  });

  const toggleChatting = () => setChattingClosed(!chattingClosed);
  const openChatting = () => setChattingClosed(false);

  if (mogacoDataLoading) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Loading color={vars.color.grayscale200} />
        </div>
      </div>
    );
  }

  if (!mogacoData || !id) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Error message="모각코 정보를 불러오지 못했습니다." />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <ChattingSidebar
        closed={chattingClosed}
        toggleClosed={toggleChatting}
        id={mogacoData.id}
        title={mogacoData.title}
        participants={mogacoData.participants}
      />
      <main className={styles.container}>
        <DetailHeader id={id} openChatting={openChatting} />
        <DetailInfo
          id={id}
          latitude={mogacoData.latitude}
          longitude={mogacoData.longitude}
        />
        <div className={styles.contents}>{mogacoData.contents}</div>
        <Divider />
      </main>
    </div>
  );
}
