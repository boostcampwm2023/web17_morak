import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansBold16, sansRegular18 } from '@/styles/font.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.6rem',
  maxWidth: '80rem',
  margin: '0 auto 8rem auto',
});

export const groupButtons = style({
  display: 'flex',
  gap: '1.2rem',
});

export const groupListButton = style([
  sansBold16,
  {
    display: 'flex',
    gap: 0,
    alignItems: 'center',
    alignSelf: 'end',
    color: vars.color.morakGreen,
  },
]);

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  maxHeight: '48rem',
  overflowY: 'auto',
});

export const logoutButton = style({
  alignSelf: 'end',
});

export const navLink = style({
  width: '100%',
});

export const rotateArrow = style({
  transform: 'rotate(180deg)',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const userInfoBody = style([
  sansRegular18,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem',
  },
]);

export const userInfoLine = style({
  display: 'flex',
  gap: '2.4rem',
});

export const userInfoLineTitle = style({
  color: vars.color.grayscale200,
});
