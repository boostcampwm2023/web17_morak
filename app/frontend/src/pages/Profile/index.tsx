import { Divider } from '@/components';
import { sansBold24 } from '@/styles/font.css';

import * as styles from './index.css';
import { MyGroup } from './MyGroup';
import { MyProfile } from './MyProfile';

export function ProfilePage() {
  return (
    <div className={styles.container}>
      <MyProfile />
      <Divider />
      <section className={styles.section}>
        <div className={sansBold24}>현재 참가한 모각코</div>
        <ul className={styles.list}>{/* <MogacoItem /> */}</ul>
      </section>
      <MyGroup />
    </div>
  );
}
