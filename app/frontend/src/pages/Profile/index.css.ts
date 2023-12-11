import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.6rem',
  maxWidth: '80rem',
  margin: '0 auto',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  minHeight: '1.8rem',
  maxHeight: '48rem',
  overflowY: 'auto',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});
