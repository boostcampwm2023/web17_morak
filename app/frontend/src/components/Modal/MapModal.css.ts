import { style } from '@vanilla-extract/css';

import { container as modalContainer } from './index.css';

export const container = style([
  modalContainer,
  {
    width: '90%',
    height: '90%',
  },
]);

export const form = style({
  width: '100%',
  height: '100%',
});

export const map = style({
  width: '100%',
  height: '100%',
});
