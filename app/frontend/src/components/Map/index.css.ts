import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles';

export const container = style({
  height: '100%',
  paddingTop: '8.5rem',
});

export const label = style({
  padding: '0.2rem',
  background: vars.color.morakRed,
  color: vars.color.grayscaleWhite,
  borderRadius: '0.5rem',
});

export const marker = recipe({
  base: {
    width: '5rem',
    height: '5rem',
  },
  variants: {
    theme: {
      green: {
        fill: vars.color.morakGreen,
        stroke: vars.color.subGreen,
      },
      red: {
        fill: vars.color.morakRed,
        stroke: vars.color.grayscale100,
      },
    },
  },
});
