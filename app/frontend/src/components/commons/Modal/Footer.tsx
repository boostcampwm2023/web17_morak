import * as styles from './index.css';
import { Button } from '../Button';

type FooterProps = {
  buttonType: 'single' | 'double';
  confirmButtonText: string;
  cancelButtonText: string;
  closeModal: () => void;
  onClickConfirm: () => void;
};

export function Footer({
  buttonType,
  confirmButtonText,
  cancelButtonText,
  closeModal,
  onClickConfirm,
}: FooterProps) {
  const confirmModal = () => {
    onClickConfirm();
    closeModal();
  };

  return (
    <div className={styles.buttonArea}>
      <Button
        type="button"
        theme="primary"
        shape="fill"
        size="large"
        fullWidth
        onClick={buttonType === 'double' ? confirmModal : closeModal}
      >
        {confirmButtonText}
      </Button>
      {buttonType === 'double' && (
        <Button
          type="button"
          theme="primary"
          shape="line"
          size="large"
          fullWidth
          onClick={closeModal}
        >
          {cancelButtonText}
        </Button>
      )}
    </div>
  );
}
