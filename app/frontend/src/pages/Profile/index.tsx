import { Divider } from '@/components';

import * as styles from './index.css';
import { MyGroup } from './MyGroup';
import { MyMogaco } from './MyMogaco';
import { MyProfile } from './MyProfile';

export function ProfilePage() {
  return (
    <div className={styles.container}>
      <MyProfile />
      <Divider />
      <MyMogaco />
      <MyGroup />
    </div>
  );
}
