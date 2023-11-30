import { Error, Sidebar } from '@/components';
import { Chatting } from '@/components/Sidebar/Contents/Chatting';
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

  return (
    <Sidebar closed={closed} toggleClosed={toggleClosed}>
      {currentUser ? (
        <Chatting
          id={id}
          title={title}
          participants={participants}
          currentUserId={currentUser.providerId}
        />
      ) : (
        <Error message="로그인 필요" />
      )}
    </Sidebar>
  );
}
