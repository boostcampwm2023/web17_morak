import { ResponseMogacoWithMemberDto } from '@morak/apitype';

import { Button } from '@/components';

import { GroupWrapper } from './GroupWrapper';
import * as styles from './index.css';
import { InfoWrapper } from './InfoWrapper';
import { TitleWrapper } from './TitleWrapper';

export function MogacoInfo({
  mogaco,
  onClickDetailPage,
}: {
  mogaco: ResponseMogacoWithMemberDto;
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
    groupTitle,
  } = mogaco;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <TitleWrapper status={status} title={title} />
        <GroupWrapper member={member} groupTitle={groupTitle} />
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
