import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular16 } from '@/styles/font.css';

const { morakRed } = vars.color;

export const text = style([
  sansRegular16,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.8rem',
    textAlign: 'center',
    color: morakRed,
  },
]);
