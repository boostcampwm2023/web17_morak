import { ReactComponent as Morak } from '@/assets/icons/morak.svg';

import * as styles from './NoContents.css';

export function NoContents() {
  return (
    <div className={styles.container}>
      <Morak width={128} height={128} />
      <p className={styles.text}>
        아직 속한 그룹에 등록된 모각코가 없습니다.
        <br />첫 모각코를 열어보세요.
      </p>
    </div>
  );
}
