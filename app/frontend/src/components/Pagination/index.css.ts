import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular16 } from '@/styles/font.css';

const { grayscale200, grayscale500 } = vars.color;

export const container = style({
  display: 'flex',
  gap: '1.6rem',
  justifyContent: 'center',
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
  },
]);

export const rotateArrow = style({
  transform: 'rotate(180deg)',
});
