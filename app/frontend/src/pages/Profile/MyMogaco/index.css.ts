import { style } from '@vanilla-extract/css';

import { sansRegular16 } from '@/styles/font.css';

import * as parentStyle from '../index.css';

export const { section, list } = parentStyle;

export const loading = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const notParticipated = style([
  sansRegular16,
  {
    display: 'flex',
    justifyContent: 'space-between',
  },
]);
