import { useModalAtom } from '@/stores';
import { sansBold24 } from '@/styles/font.css';

import { Footer } from './Footer';
import * as styles from './index.css';

type ModalProps = {
  title: string;
  content?: string;
  buttonType: 'single' | 'double';
  confirmButtonText?: string;
  cancelButtonText?: string;
  onClickConfirm?: () => void;
};

export function Modal({
  title,
  content = '',
  buttonType,
  confirmButtonText = '확인',
  cancelButtonText = '취소',
  onClickConfirm,
}: ModalProps) {
  const [open, setOpen] = useModalAtom();

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <dialog className={styles.container} open={open}>
      <form method="dialog" className={styles.form}>
        <div className={styles.textArea}>
          <div className={sansBold24}>{title}</div>
          {content && <div className={styles.contents}>{content}</div>}
        </div>
        <Footer
          buttonType={buttonType}
          confirmButtonText={confirmButtonText}
          cancelButtonText={cancelButtonText}
          closeModal={closeModal}
          onClickConfirm={onClickConfirm}
        />
      </form>
    </dialog>
  );
}
