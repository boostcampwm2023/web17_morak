import { style } from '@vanilla-extract/css';

import * as parentStyle from '../index.css';

export const groupButtons = style({
  display: 'flex',
  gap: '1.2rem',
});

export const { section, list, loading, navLinkButton, rotateArrow } =
  parentStyle;
