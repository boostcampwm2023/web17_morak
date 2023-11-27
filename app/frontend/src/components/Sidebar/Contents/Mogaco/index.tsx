import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';
import { Mogaco } from '@/types';

import * as styles from './index.css';
import { InfoWrapper } from './InfoWrapper';
import { TitleWrapper } from './TitleWrapper';

export function MogacoSidebarItem({
  mogaco,
  participantCount,
}: {
  mogaco: Mogaco | undefined;
  participantCount: number;
}) {
  const navigate = useNavigate();

  if (!mogaco) return <>loading</>;
  const { id, title, contents, date, maxHumanCount, status, address } = mogaco;

  const onClickDetailPage = () => {
    navigate(`/mogaco/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <TitleWrapper status={status} title={title} />
        {/* TODO: group 받아와서 적용 */}
        <span className={styles.group}>부스트캠프 웹모바일 8기</span>
        <InfoWrapper
          date={date}
          participantCount={participantCount}
          maxHumanCount={maxHumanCount}
          address={address}
        />
        <p className={styles.contents}>{contents}</p>
      </div>
      <Button
        fullWidth
        shape="fill"
        theme="primary"
        size="large"
        onClick={onClickDetailPage}
      >
        글로 이동하기
      </Button>
    </div>
  );
}
