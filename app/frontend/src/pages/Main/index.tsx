import { ReactComponent as Google } from '@/assets/icons/google.svg';
import { Button } from '@/components';
import { MAIN_IMAGE } from '@/constants';

import * as styles from './index.css';

export function Main() {
  return (
    <div className={styles.container}>
      <img src={MAIN_IMAGE} alt="main" className={styles.mainImage} />
      <div className={styles.textArea}>
        <div className={styles.title}>Morak</div>
        <div className={styles.text}>
          모락모락 모각코 모락모락 모각코 모락모락 모각코 모락모락 모각코 모락모락 모각코 모락모락 모각코
        </div>
        <Button type="button" theme="primary" shape="line" size="large" onClick={() => {}}>
          <Google />
          Google로 시작하기
        </Button>
      </div>
    </div>
  );
}
