import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular16 } from '@/styles/font.css';

const { grayscale200, grayscale500, grayscale50 } = vars.color;

export const container = style({
  display: 'flex',
  gap: '1.2rem',
  justifyContent: 'center',
  width: '100%',
});

globalStyle(`${container} button`, {
  padding: '0.4rem',
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
