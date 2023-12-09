import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansBold16, sansRegular16 } from '@/styles/font.css';

const { morakGreen } = vars.color;

export const button = style([
  sansBold16,
  {
    textDecorationLine: 'underline',
    marginTop: '0.6rem',
    color: morakGreen,
    cursor: 'pointer',
  },
]);

export const text = style([
  sansRegular16,
  {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    whiteSpace: 'break-spaces',
  },
]);
