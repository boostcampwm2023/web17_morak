import { memo } from 'react';

import { ChatMessage } from '@morak/chat/src/interface/message.interface';

import { TalkItem } from './TalkItem';

type ChatItemProps = {
  chatItem: ChatMessage;
  isMine: boolean;
};

export function ChatItem({ chatItem, isMine }: ChatItemProps) {
  return (
    <TalkItem
      key={chatItem.date.toString()}
      chatItem={chatItem}
      isMine={isMine}
    />
  );
}

export const MemorizedChatItem = memo(ChatItem);
