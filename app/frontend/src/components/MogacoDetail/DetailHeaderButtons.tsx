import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';
import {
  useDeleteMogacoQuery,
  useJoinMogacoQuery,
  useQuitMogacoQuery,
} from '@/queries/hooks';
import { Member, Mogaco } from '@/types';

type DetailHeaderButtonsProps = {
  id: string;
  currentUser?: Member;
  mogacoData: Mogaco;
  participantList: Member[];
};

export function DetailHeaderButtons({
  id,
  currentUser,
  mogacoData,
  participantList,
}: DetailHeaderButtonsProps) {
  const navigate = useNavigate();

  const deleteMogaco = useDeleteMogacoQuery();
  const joinMogaco = useJoinMogacoQuery();
  const quitMogaco = useQuitMogacoQuery();

  const userHosted = mogacoData.member.providerId === currentUser?.providerId;
  const userParticipated = participantList.find(
    (participant) => participant.providerId === currentUser?.providerId,
  );

  const handleDelete = async () => {
    const res = await deleteMogaco.mutateAsync(id!);
    if (res.status === 200) {
      navigate('/mogaco');
    }
  };

  const onClickDelete = () => {
    // eslint-disable-next-line no-alert
    const answer = window.confirm('삭제하시겠습니까?');
    if (answer) {
      handleDelete();
    }
  };

  const onClickJoin = async () => {
    await joinMogaco.mutateAsync(id!);
  };

  const onClickQuit = async () => {
    await quitMogaco.mutateAsync(id!);
  };

  if (!currentUser) {
    return (
      <Button theme="primary" shape="fill" size="large" disabled>
        로그인 필요
      </Button>
    );
  }

  if (userHosted) {
    return (
      <>
        <Button theme="primary" shape="line" size="large">
          수정
        </Button>
        <Button
          theme="danger"
          shape="line"
          size="large"
          onClick={onClickDelete}
        >
          삭제
        </Button>
      </>
    );
  }

  if (mogacoData.status === '모집 중') {
    return userParticipated ? (
      <>
        <Button theme="primary" shape="fill" size="large">
          채팅
        </Button>
        <Button theme="danger" shape="fill" size="large" onClick={onClickQuit}>
          참석 취소
        </Button>
      </>
    ) : (
      <Button theme="primary" shape="fill" size="large" onClick={onClickJoin}>
        참석하기
      </Button>
    );
  }

  return (
    <Button theme="primary" shape="fill" size="large" disabled>
      마감
    </Button>
  );
}
