import { style } from '@vanilla-extract/css';

import { container as modalContainer } from './index.css';

export const container = style([
  modalContainer,
  {
    width: '90%',
  },
]);
