import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansBold16 } from '@/styles/font.css';

import * as parentStyle from '../index.css';

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

export const loading = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const navLink = style({
  width: '100%',
});

export const rotateArrow = style({
  transform: 'rotate(180deg)',
});

export const { section, list } = parentStyle;
