import ReactDOMServer from 'react-dom/server';

import { ReactComponent as Pin } from '@/assets/icons/pin.svg';
import { TMap, TMapLatLng } from '@/types';

import * as styles from './index.css';

const { Tmapv2 } = window;

type MarkerProps = {
  mapContent: TMap;
  position: TMapLatLng;
  theme: 'green' | 'red';
};

export const Marker = ({ mapContent, position, theme }: MarkerProps) =>
  new Tmapv2.Marker({
    position,
    iconHTML: ReactDOMServer.renderToString(
      <Pin className={styles.marker({ theme })} width={50} height={50} />,
    ),
    iconSize: new Tmapv2.Size(50, 50),
    map: mapContent,
  });
