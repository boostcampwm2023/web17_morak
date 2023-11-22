import { style } from '@vanilla-extract/css';

import { input } from './index.css';

export * from './index.css';
export const textarea = style([
  input,
  {
    minHeight: '10rem',
    resize: 'none',
    overflow: 'hidden',
  },
]);
