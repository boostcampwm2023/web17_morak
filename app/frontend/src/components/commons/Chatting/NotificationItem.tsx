import { Notification } from '@/types';

import * as styles from './NotificationItem.css';

type NotificationItemProps = {
  notification: Notification;
};

export function NotificationItem({
  notification: { content },
}: NotificationItemProps) {
  return <div className={styles.container}>{content}</div>;
}
