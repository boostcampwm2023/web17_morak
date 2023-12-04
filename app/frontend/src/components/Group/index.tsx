import { ReactComponent as Copy } from '@/assets/icons/copy.svg';
import { ReactComponent as Crown } from '@/assets/icons/crown.svg';
import { ReactComponent as Count } from '@/assets/icons/people.svg';
import { vars } from '@/styles';

import * as styles from './index.css';
import { Button } from '../Button';

const { grayscale200 } = vars.color;

type GroupProps = {
  master?: boolean;
  join?: boolean;
  name: string;
};
export function Group({ master = false, name, join = false }: GroupProps) {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.info}>
          {master && <Crown />}
          <div className={styles.title}>{name}</div>
          <div className={styles.count}>
            <Count width={16} height={16} fill={grayscale200} />
            <span>200</span>
          </div>
        </div>
        {master ? (
          <Button type="button" theme="danger" shape="fill" size="medium">
            그룹 삭제
          </Button>
        ) : (
          <Button
            type="button"
            theme={join ? 'danger' : 'primary'}
            shape="fill"
            size="medium"
          >
            {join ? '나가기' : '참여하기'}
          </Button>
        )}
      </div>
      {master && (
        <div className={styles.detail}>
          <div className={styles.code}>
            <span>그룹 코드 | </span>
            <span className={styles.groupCode}>FDGSIUH4RUR89U324R98</span>
          </div>
          <Copy width={24} height={24} fill={grayscale200} />
        </div>
      )}
    </div>
  );
}
