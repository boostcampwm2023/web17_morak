import { useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';

import { LoadingIndicator } from '@/components';
import { queryKeys } from '@/queries';
import { mogacoAtom } from '@/stores';
import { vars } from '@/styles';

import { MogacoInfo } from './MogacoInfo';
import { NotifyWrapper } from './NotifyWrapper';

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

  const { id } = mogaco;

  const onClickDetailPage = () => {
    navigate(`/mogaco/${id}`);
  };

  return <MogacoInfo mogaco={mogaco} onClickDetailPage={onClickDetailPage} />;
}
