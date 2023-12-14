import { memo } from 'react';

import * as styles from './ChatItem.css';

type NotificationItemProps = {
  contents: string;
};

function NotificationItem({ contents }: NotificationItemProps) {
  return <li className={styles.notification}>{contents}</li>;
}

export const MemorizedNotificationItem = memo(NotificationItem);
