import { ReactComponent as Lock } from '@/assets/icons/lock.svg';
import { ReactComponent as People } from '@/assets/icons/people.svg';
import { fontStyle, vars } from '@/styles';

import * as styles from './index.css';

const { grayscale200 } = vars.color;
const { sansBold20 } = fontStyle;

type GroupInfoProps = {
  title: string;
  participantsCount: number;
  closed?: boolean;
};

export function GroupInfo({
  title,
  participantsCount,
  closed = false,
}: GroupInfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={sansBold20}>{title}</span>
        {closed && <Lock width={24} height={24} fill={grayscale200} />}
      </div>
      <span className={styles.participants}>
        <People width={24} height={24} fill={grayscale200} />
        {participantsCount}
      </span>
    </div>
  );
}
