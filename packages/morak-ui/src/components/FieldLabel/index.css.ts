import { style } from '@vanilla-extract/css';

import { vars, fontStyle } from '@/styles';

const { grayscaleBlack } = vars.color;
export const label = style([
  fontStyle.sansRegular14,
  {
    color: grayscaleBlack,
  },
]);

export const required = style({
  paddingLeft: '0.2rem',
  color: vars.color.morakRed,
});
