import { sansBold12 } from '@/styles/font.css';

import { container } from './index.css';

type LabelProps = {
  theme: 'primary' | 'danger';
  shape: 'fill' | 'line';
  disabled?: boolean;
  children: React.ReactNode;
};

export function Label({
  theme,
  shape,
  disabled = false,
  children,
}: LabelProps) {
  return (
    <div className={`${container({ theme, shape, disabled })} ${sansBold12}`}>
      {children}
    </div>
  );
}
