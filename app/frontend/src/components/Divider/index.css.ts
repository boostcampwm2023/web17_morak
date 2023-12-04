import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';

export const horizontalLine = style({
  border: 'none',
  borderBottom: `1px solid ${vars.color.grayscale100}`,
  margin: 0,
});
