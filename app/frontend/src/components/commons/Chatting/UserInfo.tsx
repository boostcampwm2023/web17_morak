import { ReactComponent as Profile } from '@/assets/icons/profile.svg';
import { vars } from '@/styles';

import * as styles from './TalkItem.css';

type UserInfoProps = {
  username: string;
  profileSrc?: string;
};

export function UserInfo({ username, profileSrc }: UserInfoProps) {
  return (
    <div className={styles.userInfo}>
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
