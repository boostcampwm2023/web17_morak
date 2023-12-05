import { NavLink } from 'react-router-dom';

import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow_left.svg';
import { Button, Divider, Group } from '@/components';
import { vars } from '@/styles';
import { sansBold24, sansBold36 } from '@/styles/font.css';

import * as styles from './index.css';

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
      <section className={styles.section}>
        <div className={sansBold24}>내가 속한 그룹</div>
        <ul className={styles.list}>
          <Group name="부스트캠프 웹·모바일 8기 FE" joined />
        </ul>
        <NavLink to="/groups" className={styles.groupListButton}>
          <ArrowLeft
            fill={vars.color.morakGreen}
            width={24}
            className={styles.rotateArrow}
          />
          그룹 리스트 보기
        </NavLink>
        <div className={styles.groupButtons}>{/* <Button /> */}</div>
      </section>
    </div>
  );
}
