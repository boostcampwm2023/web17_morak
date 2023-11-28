import { UserChip } from '@/components';
import { sansBold14 } from '@/styles/font.css';
import { Member } from '@/types';

import * as styles from './index.css';

export function GroupWrapper({
  nickname,
  profilePicture,
}: Pick<Member, 'nickname' | 'profilePicture'>) {
  return (
    <div className={styles.groupWrapper}>
      <UserChip username={nickname} profileSrc={profilePicture} />
      {/* TODO: group 받아와서 적용 */}
      <span className={sansBold14}>부스트캠프 웹모바일 8기</span>
    </div>
  );
}
