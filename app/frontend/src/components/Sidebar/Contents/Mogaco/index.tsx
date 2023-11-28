import { useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';

import { Button, LoadingIndicator } from '@/components';
import { queryKeys } from '@/queries';
import { mogacoAtom } from '@/stores';
import { vars } from '@/styles';

import { GroupWrapper } from './GroupWrapper';
import * as styles from './index.css';
import { InfoWrapper } from './InfoWrapper';
import { NotifyWrapper } from './NotifyWrapper';
import { TitleWrapper } from './TitleWrapper';

export function MogacoSidebarItem() {
  const navigate = useNavigate();
  const [mogacoId] = useAtom(mogacoAtom);

  const { data: mogaco, isLoading } = useQuery({
    ...queryKeys.mogaco.detail(mogacoId),
    enabled: Number(mogacoId) !== -1,
  });

  if (Number(mogacoId) === -1)
    return (
      <NotifyWrapper>
        {`선택된 모임이 없습니다.\n달력이나 지도에서 모임을 선택해 주세요.`}
      </NotifyWrapper>
    );

  if (isLoading)
    return (
      <NotifyWrapper>
        <LoadingIndicator color={vars.color.grayscale500} size={30} />
      </NotifyWrapper>
    );

  if (!mogaco)
    return (
      <NotifyWrapper>
        {`선택된 모임에 대한 정보가 없습니다.\n다시 시도해 주세요.`}
      </NotifyWrapper>
    );
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
