import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { Divider, Error, Loading } from '@/components';
import { queryKeys } from '@/queries';
import { vars } from '@/styles';

import { DetailHeader } from './DetailHeader';
import { DetailInfo } from './DetailInfo';
import * as styles from './index.css';

export function MogacoDetailPage() {
  const { id } = useParams();

  const { data: mogacoData, isLoading: mogacoDataLoading } = useQuery(
    queryKeys.mogaco.detail(id!),
  );

  if (mogacoDataLoading) {
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
          <Error message="모각코 정보를 불러오지 못했습니다." />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <DetailHeader id={id!} />
        <DetailInfo id={id!} />
        <div>{mogacoData.contents}</div>
        <Divider />
      </div>
    </div>
  );
}
