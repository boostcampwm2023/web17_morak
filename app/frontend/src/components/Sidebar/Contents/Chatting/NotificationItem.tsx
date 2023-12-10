import { memo } from 'react';

import * as styles from './ChatItem.css';

type NotificationItemProps = {
  contents: string;
};

function NotificationItem({ contents }: NotificationItemProps) {
  return <div className={styles.notification}>{contents}</div>;
}

export const MemorizedNotificationItem = memo(NotificationItem);
