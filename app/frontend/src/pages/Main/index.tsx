import { ReactComponent as Google } from '@/assets/icons/google.svg';
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
        <button type="button" className={styles.login}>
          <Google />
          Google로 시작하기
        </button>
      </div>
    </div>
  );
}
