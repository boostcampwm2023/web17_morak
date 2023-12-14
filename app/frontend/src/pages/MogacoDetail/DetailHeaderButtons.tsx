import { useNavigate } from 'react-router-dom';

import { Button } from '@morak/ui';
import { useQueries } from '@tanstack/react-query';

import { Error, LoadingIndicator } from '@/components';
import { MoreButton } from '@/components/Button/MoreButton';
import { queryKeys } from '@/queries';
import {
  getMyInfoQuery,
  useDeleteMogacoQuery,
  useJoinMogacoQuery,
  useQuitMogacoQuery,
} from '@/queries/hooks';

import { useDeleteModal, useJoinModal, useQuitModal } from './useModal';

type DetailHeaderButtonsProps = {
  id: string;
  openChatting: () => void;
};

export function DetailHeaderButtons({
  id,
  openChatting,
}: DetailHeaderButtonsProps) {
  const navigate = useNavigate();

  const [
    { data: currentUser, isLoading: currentUserLoading },
    { data: mogacoData, isLoading: mogacoDataLoading },
  ] = useQueries({
    queries: [getMyInfoQuery, queryKeys.mogaco.detail(id)],
  });

  const deleteMogaco = useDeleteMogacoQuery();
  const joinMogaco = useJoinMogacoQuery();
  const quitMogaco = useQuitMogacoQuery();

  const handleDelete = async () => {
    const res = await deleteMogaco.mutateAsync(id);
    if (res.status === 200) {
      navigate('/mogaco');
    }
  };

  const { openDeleteModal } = useDeleteModal();
  const onClickDelete = () => {
    openDeleteModal({ onClickConfirm: handleDelete });
  };

  const onClickEdit = () => {
    navigate(`/post?id=${id}`);
  };

  const { openJoinModal } = useJoinModal();
  const onClickJoin = () => {
    openJoinModal({ onClickConfirm: () => joinMogaco.mutate(id) });
  };

  const { openQuitModal } = useQuitModal();
  const onClickQuit = () => {
    openQuitModal({ onClickConfirm: () => quitMogaco.mutate(id) });
  };

  if (currentUserLoading || mogacoDataLoading) {
    return (
      <Button theme="primary" shape="fill" size="large" disabled>
        <LoadingIndicator size={20} />
      </Button>
    );
  }

  if (!currentUser) {
    return (
      <Button theme="primary" shape="fill" size="large" disabled>
        로그인 필요
      </Button>
    );
  }

  if (!mogacoData) {
    return <Error message="정보 불러오기 오류" />;
  }

  const userHosted = mogacoData.member.providerId === currentUser.providerId;
  const userParticipated = !!mogacoData.participants.find(
    (participant) => participant.providerId === currentUser.providerId,
  );

  if (userHosted) {
    return (
      <>
        <Button
          theme="primary"
          shape="fill"
          size="large"
          onClick={openChatting}
        >
          채팅
        </Button>
        <MoreButton
          options={[
            {
              value: '수정하기',
              onClick: onClickEdit,
            },
            {
              value: '삭제하기',
              onClick: onClickDelete,
            },
          ]}
        />
      </>
    );
  }

  if (userParticipated) {
    return (
      <>
        <Button
          theme="primary"
          shape="fill"
          size="large"
          onClick={openChatting}
        >
          채팅
        </Button>
        <Button theme="danger" shape="fill" size="large" onClick={onClickQuit}>
          참석 취소
        </Button>
      </>
    );
  }

  if (
    mogacoData.status === '모집 중' &&
    mogacoData.participants.length < mogacoData.maxHumanCount
  )
    return (
      <Button theme="primary" shape="fill" size="large" onClick={onClickJoin}>
        참석하기
      </Button>
    );

  return (
    <Button theme="primary" shape="fill" size="large" disabled>
      마감
    </Button>
  );
}
