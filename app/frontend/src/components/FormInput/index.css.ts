import { style } from '@vanilla-extract/css';

import { sansRegular14 } from '@/styles/font.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const count = style([
  sansRegular14,
  {
    visibility: 'hidden',

    selectors: {
      [`${container}:focus-within &`]: {
        visibility: 'visible',
      },
    },
  },
]);

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  minHeight: '1.2rem',
  marginBottom: '0.4rem',
});
