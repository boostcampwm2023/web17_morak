import { Input } from '@/components/commons/Input';
import { sansRegular16 } from '@/styles/font.css';

import { Footer } from './Footer';
import * as styles from './index.css';

type InputModalProps = {
  dialogRef: React.RefObject<HTMLDialogElement>;
  description: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onClickConfirm: () => void;
};

export function InputModal({
  dialogRef,
  description,
  confirmButtonText = '확인',
  cancelButtonText = '취소',
  onClickConfirm,
}: InputModalProps) {
  const closeModal = () => {
    if (!dialogRef.current) return;
    dialogRef.current.close();
  };

  return (
    <dialog className={styles.container} ref={dialogRef}>
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
    </dialog>
  );
}
