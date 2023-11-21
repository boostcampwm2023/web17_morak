import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular12 } from '@/styles/font.css';

export const container = style([
  sansRegular12,
  {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    padding: '0.4rem 1.6rem',
    border: `1px solid ${vars.color.grayscale100}`,
    borderRadius: '100rem',
    margin: '1rem 0',
    background: vars.color.grayscaleWhite,
  },
]);
