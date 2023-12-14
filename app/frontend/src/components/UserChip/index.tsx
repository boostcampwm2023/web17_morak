import { ReactComponent as Profile } from '@/assets/icons/profile.svg';
import { vars } from '@/styles';

import * as styles from './index.css';

type UserChipProps = {
  username?: string;
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
          <Profile width={24} height={24} fill={vars.color.morakGreen} />
        )}
      </div>
      <span className={`${styles.nickname} ${!username && styles.unknown}`}>
        {username || '(알 수 없음)'}
      </span>
    </div>
  );
}
