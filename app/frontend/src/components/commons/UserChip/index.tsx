import { ReactComponent as Profile } from '@/assets/icons/profile_large.svg';
import { vars } from '@/styles';

import * as styles from './index.css';

type UserChipProps = {
  username: string;
  profileSrc?: string;
};

export function UserChip({ username, profileSrc }: UserChipProps) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.profileImage} ${
          !profileSrc && styles.defaultProfileImage
        }`}
      >
        {profileSrc ? (
          <img src={profileSrc} alt={`${username}의 프로필 사진`} />
        ) : (
          <Profile fill={vars.color.morakGreen} />
        )}
      </div>
      <span>{username}</span>
    </div>
  );
}