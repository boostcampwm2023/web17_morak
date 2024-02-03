import { Button } from '@morak/ui';

import { useGroupJoinAndLeave } from './hooks/useGroupJoinLeave';
import { useGroupModal } from './hooks/useGroupModal';

type GroupButtonProps = {
  id: string;
  closed: boolean;
  joined: boolean;
  owned: boolean;
};

export function GroupButton({ id, closed, joined, owned }: GroupButtonProps) {
  const { handleLeave, handleJoin } = useGroupJoinAndLeave();
  const { openLeaveModal, openJoinModal, openApplyModal } = useGroupModal();

  const onClickLeave = () =>
    openLeaveModal({ onClickConfirm: () => handleLeave(id) });
  const onClickJoin = () =>
    openJoinModal({ onClickConfirm: () => handleJoin(id) });
  const onClickApply = () =>
    openApplyModal({
      onClickConfirm: () => {
        // 가입 신청 API 연동
      },
    });

  return (
    <>
      {owned && (
        <Button type="button" theme="danger" shape="fill" size="medium">
          그룹 삭제
        </Button>
      )}
      {!owned &&
        (joined ? (
          <Button
            type="button"
            theme="danger"
            shape="fill"
            size="medium"
            onClick={onClickLeave}
          >
            나가기
          </Button>
        ) : (
          <Button
            type="button"
            theme="primary"
            shape="fill"
            size="medium"
            onClick={closed ? onClickApply : onClickJoin}
          >
            {closed ? '가입 신청' : '참여하기'}
          </Button>
        ))}
    </>
  );
}
