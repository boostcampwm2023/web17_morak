import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansBold16, sansRegular16 } from '@/styles/font.css';

import * as parentStyle from '../index.css';

export const { section, list } = parentStyle;

export const loading = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const mogacoListButton = style([
  sansBold16,
  {
    display: 'flex',
    gap: 0,
    alignItems: 'center',
    alignSelf: 'end',
    color: vars.color.morakGreen,
  },
]);

export const notParticipated = style([
  sansRegular16,
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: vars.color.grayscale200,
  },
]);

export const rotateArrow = style({
  transform: 'rotate(180deg)',
});
