import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansBold16 } from '@/styles/font.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.6rem',
  maxWidth: '80rem',
  margin: '0 auto',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  minHeight: '1.8rem',
  maxHeight: '48rem',
  overflowY: 'auto',
});

export const loading = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const navLinkButton = style([
  sansBold16,
  {
    display: 'flex',
    gap: 0,
    alignItems: 'center',
    alignSelf: 'end',
    color: vars.color.morakGreen,
  },
]);

export const rotateArrow = style({
  transform: 'rotate(180deg)',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});
