import { style } from '@vanilla-extract/css';

import { fontStyle, vars } from '@/styles';

const { sansBold16 } = fontStyle;
const { grayscale100, grayscale50, morakGreen, grayscaleWhite } = vars.color;

export const container = style({
  display: 'flex',
  gap: '0.8rem',
  overflowX: 'auto',
  overflowY: 'hidden',
});

export const line = style({
  display: 'flex',
  width: '0.8rem',
  height: '0.2rem',
  background: grayscale50,
});

export const step = style([
  sansBold16,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: '3.2rem',
    height: '3.2rem',
    background: morakGreen,
    color: grayscaleWhite,

    selectors: {
      '&.prev': {
        background: grayscale100,
      },
      '&.next': {
        opacity: 0.5,
      },
    },
  },
]);

export const stepWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});
