import { ReactComponent as People } from '@/assets/icons/people.svg';
import { fontStyle, vars } from '@/styles';

import * as styles from './index.css';

type GroupInfoProps = {
  title: string;
  participantsCount: number;
};

export function GroupInfo({ title, participantsCount }: GroupInfoProps) {
  const { grayscale200 } = vars.color;
  const { sansBold20 } = fontStyle;

  return (
    <div className={styles.group}>
      <span className={sansBold20}>{title}</span>
      <span className={styles.participants}>
        <People width={24} height={24} fill={grayscale200} />
        {participantsCount}
      </span>
    </div>
  );
}
