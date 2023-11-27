import { Mogaco } from '@/types';

import { Sidebar } from '../..';
import { MogacoSidebarItem } from '../../Contents/Mogaco';

export function MogacoSideBar({
  closed,
  toggleClosed,
  mogaco,
  participantCount,
}: {
  closed: boolean;
  toggleClosed: () => void;
  mogaco: Mogaco | undefined;
  participantCount: number;
}) {
  return (
    <Sidebar closed={closed} toggleClosed={toggleClosed}>
      <MogacoSidebarItem mogaco={mogaco} participantCount={participantCount} />
    </Sidebar>
  );
}
