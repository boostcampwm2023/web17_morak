import { ReactComponent as GoogleIcon } from '@/assets/icons/google.svg';
import { Button } from '@/components';
import { MAIN_IMAGE } from '@/constants';

import * as styles from './index.css';

export function Main() {
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
          <Button
            type="button"
            theme="primary"
            shape="line"
            size="large"
            onClick={() => {}}
          >
            <GoogleIcon />
            Google로 시작하기
          </Button>
        </div>
      </div>
    </div>
  );
}
