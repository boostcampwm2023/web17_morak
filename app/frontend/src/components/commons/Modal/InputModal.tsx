import { Button } from '@/components/commons/Button';
import { Input } from '@/components/commons/Input';
import { sansRegular16 } from '@/styles/font.css';

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
  return (
    <>
      <div className={styles.background} />
      <dialog className={styles.container}>
        <div className={styles.inputArea}>
          <div className={sansRegular16}>{description}</div>
          <Input maxLength={10} />
        </div>
        <div className={styles.buttonArea}>
          <Button type="button" theme="primary" shape="fill" size="large" fullWidth onClick={onClickConfirm}>
            {confirmButtonText}
          </Button>
          <Button type="button" theme="primary" shape="line" size="large" fullWidth>
            {cancelButtonText}
          </Button>
        </div>
      </dialog>
    </>
  );
}
