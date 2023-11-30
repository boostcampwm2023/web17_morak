import { useEffect, useRef } from 'react';

import { Button } from '@/components';
import { useModalAtom } from '@/stores';

import * as styles from './MapModal.css';

export function MapModal() {
  const [open, setOpen] = useModalAtom();
  const mapRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    const { Tmapv2 } = window;
    if (mapRef.current?.firstChild) {
      return;
    }
    const mapContent = new Tmapv2.Map('map', {
      center: new Tmapv2.LatLng(37.566535, 126.9779692),
      zoom: 14,
    });
    mapContent.setZoomLimit(7, 16);
  }, [mapRef]);

  return (
    <dialog className={styles.container} open={open}>
      <form method="dialog" className={styles.form}>
        <div id="map" className={styles.map} ref={mapRef} />
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
