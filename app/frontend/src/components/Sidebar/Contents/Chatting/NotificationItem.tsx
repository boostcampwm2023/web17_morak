import { Notification } from '@/types';

import * as styles from './NotificationItem.css';

type NotificationItemProps = {
  notification: Notification;
};

export function NotificationItem({
  notification: { contents },
}: NotificationItemProps) {
  return <div className={styles.container}>{contents}</div>;
}
