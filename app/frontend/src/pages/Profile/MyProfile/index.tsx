import { useMutation } from '@tanstack/react-query';

import { Button, Error } from '@/components';
import { useGetMyInfoQuery } from '@/queries/hooks';
import { auth } from '@/services';
import { sansBold36 } from '@/styles/font.css';

import * as styles from './index.css';

export function MyProfile() {
  const { data: currentUser } = useGetMyInfoQuery();
  const { mutateAsync: logoutMutate } = useMutation({
    mutationFn: (providerId: string) => auth.logout({ providerId }),
  });

  if (!currentUser) {
    return <Error message="사용자 정보를 불러오지 못했습니다." />;
  }

  const { email, nickname } = currentUser;
  const onLogout = () => {
    logoutMutate(currentUser.providerId);
    window.location.href = '/';
  };

  return (
    <section className={styles.section}>
      <div className={sansBold36}>내 프로필</div>
      <div className={styles.userInfoBody}>
        <div className={styles.userInfoLine}>
          <span className={styles.userInfoLineTitle}>이메일</span>
          <span>{email}</span>
        </div>
        <div className={styles.userInfoLine}>
          <span className={styles.userInfoLineTitle}>닉네임</span>
          <span>{nickname}</span>
        </div>
        <Button
          theme="primary"
          shape="text"
          size="large"
          className={styles.logoutButton}
          onClick={onLogout}
        >
          로그아웃
        </Button>
      </div>
    </section>
  );
}
