import { ResponseParticipant } from '@morak/apitype';

import { Error, Sidebar } from '@/components';
import { Chatting } from '@/components/Sidebar/Contents/Chatting';
import { useGetMyInfoQuery } from '@/queries/hooks';

type ChattingSidebarProps = {
  closed: boolean;
  toggleClosed: () => void;
  id: string;
  title: string;
  participants: ResponseParticipant[];
};

export function ChattingSidebar({
  closed,
  toggleClosed,
  id,
  title,
  participants,
}: ChattingSidebarProps) {
  const { data: currentUser } = useGetMyInfoQuery();

  if (!currentUser) {
    return (
      <Sidebar closed={closed} toggleClosed={toggleClosed}>
        <Error message="로그인 필요" />
      </Sidebar>
    );
  }

  return (
    <Sidebar closed={closed} toggleClosed={toggleClosed}>
      <Chatting
        postId={id}
        title={title}
        participants={participants}
        currentUser={currentUser}
      />
    </Sidebar>
  );
}
