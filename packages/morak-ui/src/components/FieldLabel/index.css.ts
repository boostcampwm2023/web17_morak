import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular14 } from '@/styles/font.css';

const { grayscaleBlack, morakRed } = vars.color;
export const label = style([
  sansRegular14,
  {
    color: grayscaleBlack,
  },
]);

export const required = style({
  paddingLeft: '0.2rem',
  color: morakRed,
});
