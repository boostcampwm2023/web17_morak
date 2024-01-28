import { useNavigate } from 'react-router-dom';

import { Button } from '@morak/ui';

import { GroupInfo } from '@/components';
import { fontStyle } from '@/styles';

import * as styles from './index.css';

const { sansBold36, sansRegular16 } = fontStyle;

export function GroupJoinPage() {
  const navigate = useNavigate();
  const groupType: string = 'private';

  const goBack = () => navigate(-1);

  return (
    <div className={styles.container}>
      <h2 className={sansBold36}>그룹 참여</h2>
      <div className={styles.group}>
        <GroupInfo title="부스트캠프 웹·모바일 9기" participantsCount={160} />
        <span className={sansRegular16}>
          {groupType === 'public'
            ? '이 그룹에 참여할까요?'
            : '비공개 그룹입니다. 가입 신청할까요?'}
        </span>
        <div className={styles.buttons}>
          <Button theme="primary" shape="line" size="large" onClick={goBack}>
            취소
          </Button>
          {groupType === 'public' ? (
            <Button theme="primary" shape="fill" size="large">
              참여하기
            </Button>
          ) : (
            <Button theme="primary" shape="fill" size="large">
              가입 신청
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
