import { ChattingProps } from '@/types';

import { Sidebar } from '../..';
import { Chatting } from '../../Contents/Chatting';

export function ChattingSidebar({
  closed,
  toggleClosed,
  chattingProps,
}: {
  closed: boolean;
  toggleClosed: () => void;
  chattingProps: ChattingProps;
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
