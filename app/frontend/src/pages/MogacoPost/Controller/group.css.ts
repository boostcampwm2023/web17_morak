import { style } from '@vanilla-extract/css';

import { input } from '@/components/Input/index.css';
import { vars } from '@/styles';
import { sansRegular14 } from '@/styles/font.css';

const { grayscale400 } = vars.color;

export const container = style([input, { paddingLeft: '0.3rem' }]);

export const message = style([
  sansRegular14,
  {
    color: grayscale400,
  },
]);
