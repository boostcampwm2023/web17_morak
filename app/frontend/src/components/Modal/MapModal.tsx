import { Button } from '@/components';
import { useModalAtom } from '@/stores';

import * as styles from './MapModal.css';

export function MapModal() {
  const [open, setOpen] = useModalAtom();

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <dialog className={styles.container} open={open}>
      <form method="dialog">
        <Button
          type="button"
          theme="primary"
          size="medium"
          shape="fill"
          onClick={closeModal}
        >
          닫기
        </Button>
      </form>
    </dialog>
  );
}
