import { Group } from '@/components';
import { sansBold36 } from '@/styles/font.css';

import * as styles from './index.css';

export function Groups() {
  return (
    <div className={styles.container}>
      <h1 className={sansBold36}>그룹 리스트</h1>
      <div className={styles.groupWrapper}>
        <Group name="네이버 부스트캠프 웹·모바일 7기" joined />
        <Group name="네이버 부스트캠프 웹·모바일 8기" owned />
        <Group name="네이버 부스트캠프 웹·모바일 9기" />
      </div>
    </div>
  );
}
