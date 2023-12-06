import { ResponseMogacoWithMemberDto } from '@morak/apitype';

import { UserChip } from '@/components';
import { sansBold14 } from '@/styles/font.css';

import * as styles from './index.css';

export function GroupWrapper({
  member,
  groupTitle,
}: Pick<ResponseMogacoWithMemberDto, 'member' | 'groupTitle'>) {
  return (
    <div className={styles.groupWrapper}>
      <UserChip username={member.nickname} profileSrc={member.profilePicture} />
      <span className={sansBold14}>{groupTitle}</span>
    </div>
  );
}
