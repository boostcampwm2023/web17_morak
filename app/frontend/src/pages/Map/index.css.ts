import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const container = style({
  height: calc.subtract('100vh', '8.5rem'),
});
