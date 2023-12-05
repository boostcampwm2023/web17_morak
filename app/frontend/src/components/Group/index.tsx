import { useQuery } from '@tanstack/react-query';

import { ReactComponent as Copy } from '@/assets/icons/copy.svg';
import { ReactComponent as Crown } from '@/assets/icons/crown.svg';
import { ReactComponent as Count } from '@/assets/icons/people.svg';
import { useModal } from '@/hooks';
import { queryKeys } from '@/queries';
import { useJoinGroupQuery, useLeaveGroupQuery } from '@/queries/hooks/group';
import { vars } from '@/styles';

import * as styles from './index.css';
import { Button } from '../Button';
import { Modal } from '../Modal';

const { grayscale200 } = vars.color;

type GroupProps = {
  id: string;
  owned?: boolean;
  joined?: boolean;
  name: string;
};
export function Group({ id, owned = false, name, joined = false }: GroupProps) {
  const { mutate: leaveGroup } = useLeaveGroupQuery();
  const { mutate: joinGroup } = useJoinGroupQuery();
  const { openModal } = useModal();

  const { data: myGroup } = useQuery({
    ...queryKeys.group.myGroup(),
    staleTime: Infinity,
  });

  const joinedGroupId = myGroup?.[0]?.id;

  const join = () => {
    if (joinedGroupId) {
      leaveGroup(joinedGroupId);
    }
    joinGroup(id);
  };
  const handleGroupJoinAndLeave = () => {
    if (joined) {
      leaveGroup(id);
    }
    join();
  };
  const onClickLeave = () => {
    openModal(
      <Modal
        title={joined ? '그룹에서 나가시겠습니까?' : '그룹에 참여하시겠습니까?'}
        buttonType="double"
        onClickConfirm={handleGroupJoinAndLeave}
      />,
    );
  };
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
        {owned ? (
          <Button type="button" theme="danger" shape="fill" size="medium">
            그룹 삭제
          </Button>
        ) : (
          <Button
            type="button"
            theme={joined ? 'danger' : 'primary'}
            shape="fill"
            size="medium"
            onClick={onClickLeave}
          >
            {joined ? '나가기' : '참여하기'}
          </Button>
        )}
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
