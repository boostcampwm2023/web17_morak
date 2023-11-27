import { style } from '@vanilla-extract/css';

import { sansRegular14 } from '@/styles/font.css';

export const container = style([
  sansRegular14,
  {
    maxWidth: '120rem',
    paddingBottom: '4rem',
  },
]);
