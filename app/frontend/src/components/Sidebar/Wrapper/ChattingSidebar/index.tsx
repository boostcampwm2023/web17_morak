import { ResponseParticipant } from '@morak/apitype/dto/response/participant';

import { Sidebar } from '@/components';
import { Chatting } from '@/components/Sidebar/Contents/Chatting';

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
  participants: ResponseParticipant[];
}) {
  return (
    <Sidebar closed={closed} toggleClosed={toggleClosed}>
      <Chatting id={id} title={title} participants={participants} />
    </Sidebar>
  );
}
