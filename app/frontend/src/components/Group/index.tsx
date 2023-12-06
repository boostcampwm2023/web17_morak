import { ReactComponent as Copy } from '@/assets/icons/copy.svg';
import { ReactComponent as Crown } from '@/assets/icons/crown.svg';
import { ReactComponent as Count } from '@/assets/icons/people.svg';
import { vars } from '@/styles';

import { GroupButton } from './GroupButton';
import * as styles from './index.css';

const { grayscale200 } = vars.color;

type GroupProps = {
  id: string;
  owned?: boolean;
  joined?: boolean;
  name: string;
};
export function Group({ id, owned = false, name, joined = false }: GroupProps) {
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
        <GroupButton id={id} owned={owned} joined={joined} />
      </div>
      {!owned && (
        <div className={styles.detail}>
          <div className={styles.code}>
            <span>그룹 코드</span>
            <span>|</span>
            <span>FDGSIUH4RUR89U324R98</span>
          </div>
          <button type="button" className={styles.copyButton}>
            <Copy width={24} height={24} fill={grayscale200} />
          </button>
        </div>
      )}
    </div>
  );
}
