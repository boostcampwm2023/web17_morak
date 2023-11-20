import { sansBold24, sansRegular16 } from '@/styles/font.css';

import * as styles from './index.css';
import { Button } from '../Button';

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
        <div className={sansBold24}>{title}</div>
        {content && <div className={sansRegular16}>{content}</div>}
      </div>
      <div className={styles.buttonArea}>
        <Button
          type="button"
          theme="primary"
          shape="fill"
          size="large"
          fullWidth
          onClick={buttonType === 'double' ? onClickConfirm : undefined}
        >
          {confirmButtonText}
        </Button>
        {buttonType === 'double' && (
          <Button type="button" theme="primary" shape="line" size="large" fullWidth>
            {cancelButtonText}
          </Button>
        )}
      </div>
    </dialog>
  );
}
