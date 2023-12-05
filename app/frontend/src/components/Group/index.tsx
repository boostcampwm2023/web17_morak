import { ReactComponent as Copy } from '@/assets/icons/copy.svg';
import { ReactComponent as Crown } from '@/assets/icons/crown.svg';
import { ReactComponent as Count } from '@/assets/icons/people.svg';
import { vars } from '@/styles';

import { useGroupJoinAndLeave } from './hooks/useGroupJoinLeave';
import { useGroupModal } from './hooks/useGroupModal';
import * as styles from './index.css';
import { Button } from '../Button';

const { grayscale200 } = vars.color;

type GroupProps = {
  id: string;
  owned?: boolean;
  joined?: boolean;
  name: string;
};
export function Group({ id, owned = false, name, joined = false }: GroupProps) {
  const { handleLeave, handleJoin } = useGroupJoinAndLeave();
  const { openLeaveModal, openJoinModal } = useGroupModal();

  const onClickLeave = () =>
    openLeaveModal({ onClickConfirm: () => handleLeave(id) });
  const onClickJoin = () =>
    openJoinModal({ onClickConfirm: () => handleJoin(id) });

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.info}>
          {owned && <Crown />}
          <div className={styles.title}>{name}</div>
          <div className={styles.count}>
            <Count width={16} height={16} fill={grayscale200} />
            <span>200</span>
          </div>
        </div>
        {owned && (
          <Button type="button" theme="danger" shape="fill" size="medium">
            그룹 삭제
          </Button>
        )}
        {!owned &&
          (joined ? (
            <Button
              type="button"
              theme="danger"
              shape="fill"
              size="medium"
              onClick={onClickLeave}
            >
              나가기
            </Button>
          ) : (
            <Button
              type="button"
              theme="primary"
              shape="fill"
              size="medium"
              onClick={onClickJoin}
            >
              참여하기
            </Button>
          ))}
      </div>
      {owned && (
        <div className={styles.detail}>
          <div className={styles.code}>
            <span>그룹 코드 | </span>
            <span className={styles.groupCode}>FDGSIUH4RUR89U324R98</span>
          </div>
          <button type="button">
            <Copy width={24} height={24} fill={grayscale200} />
          </button>
        </div>
      )}
    </div>
  );
}
