import { Input } from '@morak/ui';

import { useModalAtom } from '@/stores';
import { sansRegular16 } from '@/styles/font.css';

import { Footer } from './Footer';
import * as styles from './index.css';

type InputModalProps = {
  description: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onClickConfirm: () => void;
};

export function InputModal({
  description,
  confirmButtonText = '확인',
  cancelButtonText = '취소',
  onClickConfirm,
}: InputModalProps) {
  const [open, setOpen] = useModalAtom();

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <dialog className={styles.container} open={open}>
      <form method="dialog" className={styles.form}>
        <div className={styles.inputArea}>
          <div className={sansRegular16}>{description}</div>
          <Input maxLength={10} />
        </div>
        <Footer
          buttonType="double"
          confirmButtonText={confirmButtonText}
          cancelButtonText={cancelButtonText}
          closeModal={closeModal}
          onClickConfirm={onClickConfirm}
        />
      </form>
    </dialog>
  );
}
