import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular12 } from '@/styles/font.css';

const { grayscaleBlack } = vars.color;
export const label = style([
  sansRegular12,
  {
    color: grayscaleBlack,
  },
]);

export const required = style({
  paddingLeft: '0.2rem',
  color: vars.color.morakRed,
});
