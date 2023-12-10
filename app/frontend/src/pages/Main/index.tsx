import { useQuery } from '@tanstack/react-query';

import { ReactComponent as GoogleIcon } from '@/assets/icons/google.svg';
import MAIN_IMAGE from '@/assets/images/main.png';
import { Button } from '@/components';
import { URL } from '@/constants';
import { getMyInfoQuery } from '@/queries/hooks';

import * as styles from './index.css';

export function MainPage() {
  const onClickGoogleLogin = () => {
    window.location.href = `${URL.API}/auth/google/login`;
  };
  const {
    data: userInfo,
    isLoading,
    isSuccess,
  } = useQuery({
    ...getMyInfoQuery,
    staleTime: 0,
  });
  const isLogin = !isLoading && isSuccess && userInfo;

  return (
    <div className={styles.container}>
      <img src={MAIN_IMAGE} alt="main" className={styles.mainImage} />
      <div className={styles.textArea}>
        <div className={styles.title}>morak</div>
        <div className={styles.text}>
          함께라서 더 빛나는 코드의 세계
          <br />
          모락과 함께하세요
        </div>
        <div className={styles.login}>
          {!isLogin && (
            <Button
              type="button"
              theme="primary"
              shape="line"
              size="large"
              onClick={onClickGoogleLogin}
            >
              <GoogleIcon />
              Google로 시작하기
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
