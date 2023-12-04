import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular18 } from '@/styles/font.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.6rem',
  maxWidth: '72rem',
  margin: '0 auto',
});

export const logoutButton = style({
  alignSelf: 'end',
});

export const userInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const userInfoBody = style([
  sansRegular18,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
]);

export const userInfoLine = style({
  display: 'flex',
  gap: '2.4rem',
});

export const userInfoLineTitle = style({
  color: vars.color.grayscale200,
});
