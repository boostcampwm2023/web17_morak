import { style } from '@vanilla-extract/css';

import { sansRegular14 } from '@/styles/font.css';

export const container = style([
  sansRegular14,
  {
    maxWidth: '100rem',
    margin: '0 auto',
    paddingBottom: '4rem',
  },
]);
