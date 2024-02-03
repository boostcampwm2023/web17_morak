import { ReactComponent as Crown } from '@/assets/icons/crown.svg';
import { ReactComponent as Lock } from '@/assets/icons/lock.svg';
import { vars } from '@/styles';

import { GroupButton } from './GroupButton';
import * as styles from './index.css';

const { grayscale200 } = vars.color;

type GroupProps = {
  id: string;
  name: string;
  closed: boolean;
  joined: boolean;
  owned?: boolean;
};
export function Group({ id, name, closed, joined, owned = false }: GroupProps) {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.nameWrapper}>
          {owned && <Crown />}
          <div className={styles.title}>{name}</div>
          {closed && <Lock width={24} height={24} fill={grayscale200} />}
        </div>
        <GroupButton id={id} owned={owned} joined={joined} />
      </div>
      {/* <div className={styles.count}>
        <Count width={16} height={16} fill={grayscale200} />
        <span>200</span>
      </div>
       {!owned && (
        <div className={styles.detail}>
          <div className={styles.code}>
            <span>그룹 코드</span>
            <span className={styles.desktop}>
              <span className={sansRegular16}>FDGSIUH4RUR89U324R98</span>
            </span>
            <button type="button" className={styles.copyButton}>
              <Copy width={24} height={24} fill={grayscale200} />
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}
