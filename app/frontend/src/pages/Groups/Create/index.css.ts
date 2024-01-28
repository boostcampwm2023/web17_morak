import { style } from '@vanilla-extract/css';

import { sansRegular14 } from '@/styles/font.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  maxWidth: '80rem',
  margin: '0 auto',
});

export const groupWrapper = style({
  display: 'flex',
  gap: '1.2rem',
});
export const inputField = style([
  sansRegular14,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
]);

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});
