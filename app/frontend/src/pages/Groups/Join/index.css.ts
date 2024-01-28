import { style } from '@vanilla-extract/css';

export const buttons = style({
  display: 'flex',
  gap: '0.8rem',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.6rem',
  margin: '0 auto',
  maxWidth: '80rem',
});

export const group = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.6rem',
});
