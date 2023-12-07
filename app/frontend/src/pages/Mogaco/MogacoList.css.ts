import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansBold16, sansRegular16 } from '@/styles/font.css';

const { morakGreen } = vars.color;

export const back = style([
  sansBold16,
  {
    textDecorationLine: 'underline',
    marginTop: '0.6rem',
    color: morakGreen,
    cursor: 'pointer',
  },
]);
export const background = style({
  width: '80%',
  height: '80%',
  opacity: '0.1',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const emptyWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '80rem',
});

export const text = style([
  sansRegular16,
  {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    position: 'absolute',
  },
]);
