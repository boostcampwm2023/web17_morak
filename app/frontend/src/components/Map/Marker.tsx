import markerGreen from '@/assets/icons/marker-green.svg';
import markerRed from '@/assets/icons/marker-red.svg';
import { TMap, TMapLatLng } from '@/types';
import { reactElementToString } from '@/utils';

import * as styles from './index.css';

const { Tmapv3 } = window;

type MarkerProps = {
  mapContent: TMap;
  position: TMapLatLng;
  theme: 'green' | 'red';
  icon?: string;
  labelText?: string;
};

export function Marker({
  mapContent,
  position,
  theme,
  labelText,
}: MarkerProps) {
  const markerIcon = theme === 'green' ? markerGreen : markerRed;
  return new Tmapv3.Marker({
    position,
    map: mapContent,
    icon: markerIcon,
    iconSize: new Tmapv3.Size(50, 50),
    label: labelText
      ? reactElementToString(
          <span className={styles.label({ theme })}>{labelText}</span>,
        )
      : '',
  });
}
