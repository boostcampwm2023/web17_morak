import { style } from '@vanilla-extract/css';

import { input } from './index.css';

export * from './index.css';

export const fullWidth = style({
  flexGrow: 1,
});

export const textarea = style([
  input,
  {
    resize: 'none',
    width: '100%',
  },
]);

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  minHeight: '1.2rem',
  marginBottom: '0.4rem',
});
