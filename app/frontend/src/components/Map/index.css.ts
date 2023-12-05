import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles';

const { morakGreen, subGreen, morakRed, grayscale100, grayscaleWhite } =
  vars.color;

export const container = style({
  height: '100%',
  paddingTop: '8.5rem',
});

export const label = recipe({
  base: {
    padding: '0.2rem',
    color: grayscaleWhite,
    borderRadius: '0.5rem',
  },
  variants: {
    theme: {
      green: {
        background: morakGreen,
      },
      red: {
        background: morakRed,
      },
    },
  },
});

export const marker = recipe({
  base: {
    width: '5rem',
    height: '5rem',
  },
  variants: {
    theme: {
      green: {
        fill: morakGreen,
        stroke: subGreen,
      },
      red: {
        fill: morakRed,
        stroke: grayscale100,
      },
    },
  },
});
