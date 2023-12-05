import { ReactComponent as Location } from '@/assets/icons/location.svg';

import * as styles from './index.css';

export function MyLocation({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button type="button" className={styles.myLocation} onClick={onClick}>
      <Location width={30} height={30} />
    </button>
  );
}
