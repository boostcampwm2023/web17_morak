import { Mogaco } from '@/types';

import { Sidebar } from '../..';
import { MogacoSidebarItem } from '../../Contents/Mogaco';

export function MogacoSideBar({
  closed,
  toggleClosed,
  mogaco,
}: {
  closed: boolean;
  toggleClosed: () => void;
  mogaco: Mogaco | undefined;
}) {
  return (
    <Sidebar closed={closed} toggleClosed={toggleClosed}>
      <MogacoSidebarItem mogaco={mogaco} />
    </Sidebar>
  );
}
