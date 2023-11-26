import { keyframes, style } from '@vanilla-extract/css';

import { sansRegular16 } from '@/styles/font.css';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const container = style([
  sansRegular16,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
]);

export const indicator = style({
  animationName: rotate,
  animationDuration: '1s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
});
