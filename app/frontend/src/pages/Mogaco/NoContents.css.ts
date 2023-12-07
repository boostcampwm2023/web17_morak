import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular18 } from '@/styles/font.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.4rem',
  height: '32rem',
  filter: 'grayscale(80%)',
});

export const text = style([
  sansRegular18,
  {
    textAlign: 'center',
    lineHeight: 1.4,
    color: vars.color.grayscale400,
  },
]);
