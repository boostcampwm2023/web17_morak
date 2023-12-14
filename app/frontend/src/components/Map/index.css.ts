import { style, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars, fontStyle } from '@/styles';

const { morakGreen, subGreen, morakRed, grayscale100, grayscaleWhite } =
  vars.color;

export const container = style({
  height: '100%',
  paddingTop: '8.5rem',
});

export const label = recipe({
  base: [
    fontStyle.sansRegular12,
    {
      position: 'absolute',
      padding: '0.2rem',
      color: grayscaleWhite,
      borderRadius: '0.5rem',
      top: '-5.5rem',
      left: '50%',
      transform: 'translate(-50%)',
      whiteSpace: 'pre',
    },
  ],
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

export const map = style({
  height: '100%',
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

export const myLocation = style({
  width: '3rem',
  height: '3rem',
  position: 'absolute',
  bottom: '6rem',
  right: '2rem',
  background: grayscaleWhite,
  borderRadius: '0.8rem',
  boxShadow: '0px 0px 8px 0px rgba(0 0 0 / 0.25)',
  zIndex: '10',
});

globalStyle('.marker-image', {
  width: '5rem',
  height: '5rem',
  zIndex: '1',
});
