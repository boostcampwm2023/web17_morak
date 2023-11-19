import * as styles from './NotificationItem.css';

type NotificationItemProps = {
  content: string;
};

export function NotificationItem({ content }: NotificationItemProps) {
  return <div className={styles.container}>{content}</div>;
}
