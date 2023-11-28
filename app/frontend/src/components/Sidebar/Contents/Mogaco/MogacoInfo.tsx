import { Button } from '@/components';
import { Mogaco } from '@/types';

import { GroupWrapper } from './GroupWrapper';
import * as styles from './index.css';
import { InfoWrapper } from './InfoWrapper';
import { TitleWrapper } from './TitleWrapper';

export function MogacoInfo({
  mogaco,
  onClickDetailPage,
}: {
  mogaco: Mogaco;
  onClickDetailPage: () => void;
}) {
  const {
    title,
    contents,
    date,
    maxHumanCount,
    status,
    address,
    participants,
    member,
  } = mogaco;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <TitleWrapper status={status} title={title} />
        {/* TODO: group 받아와서 적용 */}
        <GroupWrapper
          nickname={member.nickname}
          profilePicture={member.profilePicture}
        />
        <InfoWrapper
          date={date}
          participantCount={participants.length}
          maxHumanCount={maxHumanCount}
          address={address}
        />
        <p className={styles.contents}>{contents}</p>
      </div>
      <Button
        fullWidth
        shape="fill"
        theme="primary"
        size="large"
        onClick={onClickDetailPage}
      >
        글로 이동하기
      </Button>
    </div>
  );
}
