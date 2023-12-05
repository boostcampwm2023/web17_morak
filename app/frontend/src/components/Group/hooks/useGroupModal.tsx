import { useModal } from '@/hooks';

import { Modal } from '../../Modal';

export const useGroupModal = () => {
  const { openModal } = useModal();
  const openLeaveModal = ({
    onClickConfirm,
  }: {
    onClickConfirm: () => void;
  }) => {
    openModal(
      <Modal
        title="그룹에서 나가시겠습니까?"
        buttonType="double"
        onClickConfirm={onClickConfirm}
      />,
    );
  };

  const openJoinModal = ({
    onClickConfirm,
  }: {
    onClickConfirm: () => void;
  }) => {
    openModal(
      <Modal
        title="그룹에서 참여하시겠습니까?"
        content={`현재 속해 있는 그룹이 있다면,\n그 그룹에서 자동으로 나가게 됩니다.`}
        buttonType="double"
        onClickConfirm={onClickConfirm}
      />,
    );
  };

  return { openLeaveModal, openJoinModal };
};
