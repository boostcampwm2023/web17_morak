/* eslint-disable react/require-default-props */
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
    <dialog className={styles.container}>
      <div className={styles.textArea}>
        <div className={styles.title}>{title}</div>
        {content && <div className={styles.content}>{content}</div>}
      </div>
      <div className={styles.buttonArea}>
        <button type="button" onClick={buttonType === 'double' ? onClickConfirm : undefined} className={styles.button}>
          {confirmButtonText}
        </button>
        {buttonType === 'double' && (
          <button type="button" className={styles.button}>
            {cancelButtonText}
          </button>
        )}
      </div>
    </dialog>
  );
}
