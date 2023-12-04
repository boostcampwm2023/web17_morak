import { Error, Sidebar } from '@/components';
import { Chatting } from '@/components/Sidebar/Contents/Chatting';
import * as styles from '@/components/Sidebar/index.css';
import { useGetMyInfoQuery } from '@/queries/hooks';
import { Member } from '@/types';

export function ChattingSidebar({
  closed,
  toggleClosed,
  id,
  title,
  participants,
}: {
  closed: boolean;
  toggleClosed: () => void;
  id: string;
  title: string;
  participants: Member[];
}) {
  const { data: currentUser } = useGetMyInfoQuery();

  if (!currentUser) {
    return (
      <Sidebar closed={closed} toggleClosed={toggleClosed}>
        <Error message="로그인 필요" />
      </Sidebar>
    );
  }

  if (
    !participants.find(
      (participant) => participant.providerId === currentUser.providerId,
    )
  ) {
    return (
      <Sidebar closed={closed} toggleClosed={toggleClosed}>
        <div className={styles.notParticipated}>
          아직 해당 모각코에 참여하지 않았습니다!
          <br />
          채팅방에 입장하려면 먼저 모각코에 참석해 주세요.
        </div>
      </Sidebar>
    );
  }

  return (
    <Sidebar closed={closed} toggleClosed={toggleClosed}>
      <Chatting
        postId={id}
        title={title}
        participants={participants}
        currentUserId={currentUser.providerId}
      />
    </Sidebar>
  );
}
