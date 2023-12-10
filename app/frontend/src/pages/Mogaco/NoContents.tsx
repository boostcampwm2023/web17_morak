import { MessageWrapper } from '@/components';
import * as styles from '@/styles/message.css';

export function NoContents() {
  return (
    <MessageWrapper>
      <p className={styles.text}>
        아직 속한 그룹에 등록된 모각코가 없습니다.
        <br />첫 모각코를 열어보세요.
      </p>
    </MessageWrapper>
  );
}
