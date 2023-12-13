import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular16 } from '@/styles/font.css';

const { grayscale200, grayscale500, grayscale50 } = vars.color;
const { bold } = vars.font.weight;

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

globalStyle(`${container} button`, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '3.6rem',
  height: '3.6rem',
  borderRadius: '100%',
});

globalStyle(`${container} button:hover`, {
  backgroundColor: grayscale50,
});

globalStyle(`${container} button[disabled]`, {
  cursor: 'not-allowed',
  backgroundColor: 'transparent',
});

export const current = style({});
export const page = style([
  sansRegular16,
  {
    color: grayscale200,

    selectors: {
      [`${current}&`]: {
        color: grayscale500,
        fontWeight: bold,
      },
    },

    '@media': {
      'screen and (max-width: 768px)': {
        fontSize: '1.2rem',
      },
    },
  },
]);

export const rotateArrow = style({
  transform: 'rotate(180deg)',
});
