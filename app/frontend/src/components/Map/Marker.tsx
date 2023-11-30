import ReactDOMServer from 'react-dom/server';

import { ReactComponent as Pin } from '@/assets/icons/pin.svg';

import * as styles from './index.css';

const { Tmapv2 } = window;
type MapType = typeof Tmapv2;
type MarkerProps = {
  mapContent: MapType;
  latitude: number;
  longitude: number;
  theme: 'green' | 'red';
};

export const Marker = ({
  mapContent,
  latitude,
  longitude,
  theme,
}: MarkerProps) =>
  new Tmapv2.Marker({
    position: new Tmapv2.LatLng(latitude, longitude),
    iconHTML: ReactDOMServer.renderToString(
      <Pin className={styles.marker({ theme })} />,
    ),
    iconSize: new Tmapv2.Size(50, 50),
    map: mapContent,
  });
