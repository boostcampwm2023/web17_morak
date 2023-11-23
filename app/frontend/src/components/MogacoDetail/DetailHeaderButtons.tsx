import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components';
import { useDeleteMogacoQuery } from '@/queries/hooks';
import { mogaco } from '@/services';

type DetailHeaderButtonsProps = {
  id: string;
  userHosted: boolean;
  userParticipated: boolean;
  status: '모집 중' | '마감' | '종료';
};

export function DetailHeaderButtons({
  id,
  userHosted,
  userParticipated,
  status,
}: DetailHeaderButtonsProps) {
  const navigate = useNavigate();
  const { id: postId } = useParams();
  const { mutateAsync } = useDeleteMogacoQuery();

  const handleDelete = async () => {
    if (!postId) {
      return;
    }

    const res = await mutateAsync(id);
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
    await mogaco.join(id);
  };

  const onClickQuit = async () => {
    await mogaco.quit(id);
  };

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

  if (status === '모집 중') {
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
