import { Button } from '@morak/ui';

import { ReactComponent as GoogleIcon } from '@/assets/icons/google.svg';
import MAIN_IMAGE_PNG from '@/assets/images/main.png';
import MAIN_IMAGE_WEBP from '@/assets/images/main.webp';
import { URL } from '@/constants';
import { useGetLoginBasedMyInfoQuery } from '@/queries/hooks';

import * as styles from './index.css';

export function MainPage() {
  const onClickGoogleLogin = () => {
    window.location.href = `${URL.API}/auth/google/login`;
  };

  const { isLoading, isLogin } = useGetLoginBasedMyInfoQuery();

  return (
    <div className={styles.container}>
      <div className={styles.textArea}>
        <div className={styles.title}>morak</div>
        <div className={styles.text}>
          함께라서 더 빛나는 코드의 세계
          <br />
          모락과 함께하세요
        </div>
        <div className={styles.login} data-cy="login-button">
          {!isLoading && !isLogin && (
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
      <picture>
        <source
          type="image/webp"
          srcSet={MAIN_IMAGE_WEBP}
          className={styles.mainImage}
        />
        <img
          src={MAIN_IMAGE_PNG}
          alt="메인 이미지"
          className={styles.mainImage}
        />
      </picture>
    </div>
  );
}
