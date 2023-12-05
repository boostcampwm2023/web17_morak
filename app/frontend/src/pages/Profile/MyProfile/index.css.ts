import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular18 } from '@/styles/font.css';

import * as parentStyle from '../index.css';

export const logoutButton = style({
  alignSelf: 'end',
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

export const { section } = parentStyle;
