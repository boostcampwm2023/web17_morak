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
