import { vars } from '@styles';
import { style } from '@vanilla-extract/css';

import { sansRegular12 } from '@styles/font.css';

export const container = style([
  sansRegular12,
  {
    display: 'flex',
    alignItems: 'center',
    padding: '0.4rem 1.6rem',
    border: `1px solid ${vars.color.grayscale100}`,
    borderRadius: 100,
    background: vars.color.grayscaleWhite,
  },
]);
