import { useQuery } from '@tanstack/react-query';

import { UserChip } from '@/components';
import { queryKeys } from '@/queries';
import { sansBold24 } from '@/styles/font.css';

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
        <div className={sansBold24}>{mogacoData?.title}</div>
        <div className={styles.buttons}>
          <DetailHeaderButtons id={id} openChatting={openChatting} />
        </div>
      </div>
      <div className={styles.hostUser}>
        <UserChip
          username={mogacoData?.member.nickname || ''}
          profileSrc={mogacoData?.member.profilePicture}
        />
        <span>부스트캠프 웹·모바일 8기</span>
      </div>
    </div>
  );
}
