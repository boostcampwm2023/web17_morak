import { createPortal } from 'react-dom';

import { useAtom } from 'jotai';

import { currentModalAtom, modalOpenedAtom } from '@/stores';

import * as styles from './index.css';

export function ModalContainer() {
  const [open] = useAtom(modalOpenedAtom);
  const [currentModal] = useAtom(currentModalAtom);

  return createPortal(
    open && (
      <div role="dialog">
        <div className={`${styles.background} ${open ? styles.open : ''}`} />
        {currentModal}
      </div>
    ),
    document.body,
  );
}
