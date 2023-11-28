import { Sidebar } from '@/components/Sidebar';
import { Chatting } from '@/components/Sidebar/Contents/Chatting';
import { Chat, Member } from '@/types';

type ChattingSidebarProps = {
  closed: boolean;
  toggleClosed: () => void;
  title: string;
  participants: Member[];
  chatItems: Chat[];
  currentUsername: string;
};

export function ChattingSidebar({
  closed,
  toggleClosed,
  title,
  participants,
  chatItems,
  currentUsername,
}: ChattingSidebarProps) {
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
