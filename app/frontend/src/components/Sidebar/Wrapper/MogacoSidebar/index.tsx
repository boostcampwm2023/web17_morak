import { Sidebar } from '../..';
import { MogacoSidebarItem } from '../../Contents/Mogaco';

export function MogacoSideBar({
  closed,
  toggleClosed,
}: {
  closed: boolean;
  toggleClosed: () => void;
}) {
  return (
    <Sidebar closed={closed} toggleClosed={toggleClosed}>
      <MogacoSidebarItem />
    </Sidebar>
  );
}
