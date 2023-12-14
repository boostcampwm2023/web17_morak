import { Button } from '@morak/ui';

import { useGroupJoinAndLeave } from './hooks/useGroupJoinLeave';
import { useGroupModal } from './hooks/useGroupModal';

type GroupButtonProps = {
  id: string;
  owned: boolean;
  joined: boolean;
};

export function GroupButton({ id, owned, joined }: GroupButtonProps) {
  const { handleLeave, handleJoin } = useGroupJoinAndLeave();
  const { openLeaveModal, openJoinModal } = useGroupModal();

  const onClickLeave = () =>
    openLeaveModal({ onClickConfirm: () => handleLeave(id) });
  const onClickJoin = () =>
    openJoinModal({ onClickConfirm: () => handleJoin(id) });

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
            onClick={onClickJoin}
          >
            참여하기
          </Button>
        ))}
    </>
  );
}
