import { Sidebar } from '@/components';
import { Chatting } from '@/components/Sidebar/Contents/Chatting';
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
  return (
    <Sidebar closed={closed} toggleClosed={toggleClosed}>
      <Chatting id={id} title={title} participants={participants} />
    </Sidebar>
  );
}
