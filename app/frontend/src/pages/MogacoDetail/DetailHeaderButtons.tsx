import { useNavigate } from 'react-router-dom';

import {
  ResponseMogacoWithMemberDto,
  ResponseParticipant,
} from '@morak/apitype';

import { Button } from '@/components';
import { MoreButton } from '@/components/Button/MoreButton';
import { useChatting } from '@/hooks';
import {
  useDeleteMogacoQuery,
  useJoinMogacoQuery,
  useQuitMogacoQuery,
} from '@/queries/hooks';

import { useDeleteModal, useJoinModal, useQuitModal } from './useModal';

type DetailHeaderButtonsProps = {
  postId: string;
  currentUser: ResponseParticipant;
  mogacoData: ResponseMogacoWithMemberDto;
  openChatting: () => void;
};

export function DetailHeaderButtons({
  postId,
  currentUser,
  mogacoData,
  openChatting,
}: DetailHeaderButtonsProps) {
  const navigate = useNavigate();
  const { notifyToJoin, notifyToLeave } = useChatting(
    postId,
    currentUser.id,
    currentUser.nickname,
  );

  const deleteMogaco = useDeleteMogacoQuery();
  const joinMogaco = useJoinMogacoQuery(notifyToJoin);
  const quitMogaco = useQuitMogacoQuery(notifyToLeave);

  const handleDelete = async () => {
    const res = await deleteMogaco.mutateAsync(postId);
    if (res.status === 200) {
      navigate('/mogaco');
    }
  };

  const { openDeleteModal } = useDeleteModal();
  const onClickDelete = () => {
    openDeleteModal({ onClickConfirm: handleDelete });
  };

  const onClickEdit = () => {
    navigate(`/post?id=${postId}`);
  };

  const { openJoinModal } = useJoinModal();
  const onClickJoin = () => {
    openJoinModal({ onClickConfirm: () => joinMogaco.mutate(postId) });
  };

  const { openQuitModal } = useQuitModal();
  const onClickQuit = () => {
    openQuitModal({ onClickConfirm: () => quitMogaco.mutate(postId) });
  };

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
