import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansBold16, sansRegular16 } from '@/styles/font.css';

const { morakGreen } = vars.color;

export const button = style([
  sansBold16,
  {
    textDecorationLine: 'underline',
    color: morakGreen,
    cursor: 'pointer',
  },
]);

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

export const text = style([
  sansRegular16,
  {
    textAlign: 'center',
    whiteSpace: 'break-spaces',
    lineHeight: '2rem',
  },
]);
