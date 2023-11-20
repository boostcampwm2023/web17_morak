import { sansBold24, sansRegular16 } from '@/styles/font.css';

import { Footer } from './Footer';
import * as styles from './index.css';

type ModalProps = {
  title: string;
  content?: string;
  buttonType: 'single' | 'double';
  confirmButtonText?: string;
  cancelButtonText?: string;
  onClickConfirm: () => void;
};

export function Modal({
  title,
  content = '',
  buttonType,
  confirmButtonText = '확인',
  cancelButtonText = '취소',
  onClickConfirm,
}: ModalProps) {
  return (
    <>
      <div className={styles.background} />
      <dialog className={styles.container}>
        <div className={styles.textArea}>
          <div className={sansBold24}>{title}</div>
          {content && <div className={sansRegular16}>{content}</div>}
        </div>
        <Footer
          buttonType={buttonType}
          confirmButtonText={confirmButtonText}
          cancelButtonText={cancelButtonText}
          onClickConfirm={onClickConfirm}
        />
      </dialog>
    </>
  );
}
