import { Button, Divider } from '@/components';
import { sansBold24, sansBold36 } from '@/styles/font.css';

import * as styles from './index.css';
import { MyGroup } from './MyGroup';

export function ProfilePage() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={sansBold36}>내 프로필</div>
        <div className={styles.userInfoBody}>
          <div className={styles.userInfoLine}>
            <span className={styles.userInfoLineTitle}>이메일</span>
            <span>js43og@gmail.com</span>
          </div>
          <div className={styles.userInfoLine}>
            <span className={styles.userInfoLineTitle}>닉네임</span>
            <span>지승</span>
          </div>
          <Button
            theme="primary"
            shape="text"
            size="large"
            className={styles.logoutButton}
          >
            로그아웃
          </Button>
        </div>
      </section>
      <Divider />
      <section className={styles.section}>
        <div className={sansBold24}>현재 참가한 모각코</div>
        <ul className={styles.list}>{/* <MogacoItem /> */}</ul>
      </section>
      <MyGroup />
    </div>
  );
}
