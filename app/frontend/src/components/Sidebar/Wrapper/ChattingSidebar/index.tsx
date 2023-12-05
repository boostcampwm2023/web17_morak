import { ResponseParticipant } from '@morak/apitype/dto/response/participant';

import { Sidebar } from '@/components';
import { Chatting } from '@/components/Sidebar/Contents/Chatting';

export function ChattingSidebar({
  closed,
  toggleClosed,
  chattingProps,
}: {
  closed: boolean;
  toggleClosed: () => void;
  id: string;
  title: string;
  participants: ResponseParticipant[];
}) {
  const { title, participants, chatItems, currentUsername } = chattingProps;

  return (
    <Sidebar closed={closed} toggleClosed={toggleClosed}>
      <Chatting
        title={title}
        participants={participants}
        chatItems={chatItems}
        currentUsername={currentUsername}
      />
    </Sidebar>
  );
}
