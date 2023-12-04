import { Button } from '@/components';
import { sansBold36 } from '@/styles/font.css';

import * as styles from './index.css';

export function ProfilePage() {
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
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
      </div>
      <hr />
    </div>
  );
}
