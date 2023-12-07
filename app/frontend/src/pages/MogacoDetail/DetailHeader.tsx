import { useQuery } from '@tanstack/react-query';

import { UserChip } from '@/components';
import { queryKeys } from '@/queries';

import { DetailHeaderButtons } from './DetailHeaderButtons';
import * as styles from './index.css';

type DetailHeaderProps = {
  id: string;
  openChatting: () => void;
};

export function DetailHeader({ id, openChatting }: DetailHeaderProps) {
  const { data: mogacoData } = useQuery(queryKeys.mogaco.detail(id));

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <div className={styles.titleText}>{mogacoData?.title}</div>
        <div className={styles.buttons}>
          <DetailHeaderButtons id={id} openChatting={openChatting} />
        </div>
      </div>
      <div className={styles.hostUser}>
        <UserChip
          username={mogacoData?.member.nickname || ''}
          profileSrc={mogacoData?.member.profilePicture}
        />
        <span className={styles.groupTitle}>{mogacoData?.groupTitle}</span>
      </div>
    </div>
  );
}
