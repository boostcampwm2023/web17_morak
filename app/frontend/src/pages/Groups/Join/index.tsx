import { Button } from '@morak/ui';

import { GroupInfo } from '@/components';
import { fontStyle } from '@/styles';

import * as styles from './index.css';

const { sansBold36, sansRegular16 } = fontStyle;

export function GroupJoinPage() {
  const goBack = () => window.history.back();

  return (
    <div className={styles.container}>
      <h2 className={sansBold36}>그룹 가입</h2>
      <div className={styles.group}>
        <GroupInfo title="부스트캠프 웹·모바일 9기" participantsCount={160} />
        <span className={sansRegular16}>이 그룹에 가입 신청할까요?</span>
        <div className={styles.buttons}>
          <Button theme="primary" shape="line" size="large" onClick={goBack}>
            취소
          </Button>
          <Button theme="primary" shape="fill" size="large">
            가입 신청
          </Button>
        </div>
      </div>
    </div>
  );
}
