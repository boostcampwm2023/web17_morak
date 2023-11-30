import { Modal } from '@/components';
import { useModal } from '@/hooks';

export const useDeleteModal = () => {
  const { openModal } = useModal();
  const openDeleteModal = ({
    onClickConfirm,
  }: {
    onClickConfirm: () => void;
  }) => {
    openModal(
      <Modal
        buttonType="double"
        title="삭제하시겠습니까?"
        onClickConfirm={onClickConfirm}
      />,
    );
  };

  return { openDeleteModal };
};

export const useJoinModal = () => {
  const { openModal } = useModal();
  const openJoinModal = ({
    onClickConfirm,
  }: {
    onClickConfirm: () => void;
  }) => {
    openModal(
      <Modal
        buttonType="double"
        title="모각코에 참석하시겠습니까?"
        onClickConfirm={onClickConfirm}
      />,
    );
  };

  return { openJoinModal };
};

export const useQuitModal = () => {
  const { openModal } = useModal();
  const openQuitModal = ({
    onClickConfirm,
  }: {
    onClickConfirm: () => void;
  }) => {
    openModal(
      <Modal
        buttonType="double"
        title="모각코 참석을 취소하시겠습니까?"
        onClickConfirm={onClickConfirm}
      />,
    );
  };

  return { openQuitModal };
};
