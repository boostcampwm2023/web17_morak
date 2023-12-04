import { NavLink } from 'react-router-dom';

import { Button, Divider, Group, MogacoItem } from '@/components';
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
        <ul className={styles.list}>
          <MogacoItem
            id="1"
            groupId="1"
            group={{ id: '1', title: '부스트캠프 웹·모바일 8기' }}
            title="사당역 모각코"
            contents="사당역에서 같이 모각코 하실 분 구합니다~"
            address="서울 관악구 남현3길 71 크레이저커피"
            maxHumanCount={5}
            date={new Date()}
            status="모집 중"
            latitude={30}
            longitude={30}
          />
          <MogacoItem
            id="1"
            groupId="1"
            group={{ id: '1', title: '부스트캠프 웹·모바일 8기' }}
            title="인천역 모각코"
            contents="인천역에서 같이 모각코 하실 분 구합니다~"
            address="인천 남현3길 71 크레이저커피"
            maxHumanCount={5}
            date={new Date()}
            status="모집 중"
            latitude={30}
            longitude={30}
          />
        </ul>
      </section>
      <section className={styles.section}>
        <div className={sansBold24}>내가 속한 그룹</div>
        <ul className={styles.list}>
          <Group name="부스트캠프 웹·모바일 8기" joined owned />
          <Group name="부스트캠프 웹·모바일 7기" joined />
        </ul>
        <div className={styles.groupButtons}>
          <Button theme="primary" shape="line" size="large" fullWidth>
            그룹 참여
          </Button>
          <NavLink to="/groups" className={styles.navLink}>
            <Button theme="primary" shape="line" size="large" fullWidth>
              새 그룹 추가
            </Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
