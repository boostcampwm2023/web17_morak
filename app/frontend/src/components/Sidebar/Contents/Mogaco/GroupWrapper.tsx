import { ResponseMogacoWithMemberDto } from '@morak/apitype';

import { UserChip } from '@/components';

import * as styles from './index.css';

export function GroupWrapper({
  member,
  groupTitle,
}: Pick<ResponseMogacoWithMemberDto, 'member' | 'groupTitle'>) {
  return (
    <div className={styles.groupWrapper}>
      <UserChip username={member.nickname} profileSrc={member.profilePicture} />
      <span className={styles.group}>{groupTitle}</span>
    </div>
  );
}
