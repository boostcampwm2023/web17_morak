import { useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';

import { Button } from '@/components';
import { queryKeys } from '@/queries';
import { mogacoAtom } from '@/stores';

import { GroupWrapper } from './GroupWrapper';
import * as styles from './index.css';
import { InfoWrapper } from './InfoWrapper';
import { TitleWrapper } from './TitleWrapper';

export function MogacoSidebarItem() {
  const navigate = useNavigate();
  const [mogacoId] = useAtom(mogacoAtom);

  const { data: mogaco } = useQuery({
    ...queryKeys.mogaco.detail(mogacoId),
    enabled: Number(mogacoId) !== -1,
  });

  if (!mogaco) return <>loading</>;
  const {
    id,
    title,
    contents,
    date,
    maxHumanCount,
    status,
    address,
    participants,
    member,
  } = mogaco;

  const onClickDetailPage = () => {
    navigate(`/mogaco/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <TitleWrapper status={status} title={title} />
        {/* TODO: group 받아와서 적용 */}
        <GroupWrapper
          nickname={member.nickname}
          profilePicture={member.profilePicture}
        />
        <InfoWrapper
          date={date}
          participantCount={participants.length}
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
