import * as styles from './index.css';
import { Button } from '../Button';

type FooterProps = {
  buttonType: 'single' | 'double';
  confirmButtonText?: string;
  cancelButtonText?: string;
  onClickConfirm: () => void;
};

export function Footer({ buttonType, confirmButtonText, cancelButtonText, onClickConfirm }: FooterProps) {
  return (
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
  );
}
