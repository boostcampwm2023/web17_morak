import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@morak/ui';

import { ReactComponent as Lock } from '@/assets/icons/lock.svg';
import { ReactComponent as People } from '@/assets/icons/people.svg';
import { useGroupJoinAndLeave } from '@/components/Group/hooks/useGroupJoinLeave';
import { useGroupModal } from '@/components/Group/hooks/useGroupModal';
import { fontStyle, vars } from '@/styles';

import * as styles from './index.css';

const { sansBold36 } = fontStyle;
const { grayscale200 } = vars.color;

export function GroupJoinPage() {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { access_code: accessCode } = useParams();

  const { openJoinModal } = useGroupModal();
  const { handleJoin } = useGroupJoinAndLeave();

  // accessCode로 그룹 정보 페칭 필요
  const { id, closed } = { id: '1', closed: true };

  const goBack = () => navigate(-1);

  const onClickJoin = () =>
    openJoinModal({ onClickConfirm: () => handleJoin(id) });

  return (
    <div className={styles.container}>
      <h2 className={sansBold36}>그룹 참여</h2>
      <div className={styles.group}>
        <div className={styles.groupTitle}>
          <span>부스트캠프 웹·모바일 9기</span>
          {closed && <Lock width={24} height={24} fill={grayscale200} />}
        </div>
        <span className={styles.participants}>
          <People width={24} height={24} fill={grayscale200} />
          120
        </span>
      </div>
      <div className={styles.form}>
        {closed ? (
          <div className={styles.closedText}>
            <div>그룹에 가입 신청할까요?</div>
            <div className={styles.subText}>
              비공개 그룹은 그룹장의 승인 후 참여 처리됩니다.
            </div>
          </div>
        ) : (
          '이 그룹에 참여할까요?'
        )}
        <div className={styles.buttons}>
          <Button theme="primary" shape="line" size="large" onClick={goBack}>
            취소
          </Button>
          {closed ? (
            <Button theme="primary" shape="fill" size="large">
              가입 신청
            </Button>
          ) : (
            <Button
              theme="primary"
              shape="fill"
              size="large"
              onClick={onClickJoin}
            >
              참여하기
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
