import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  maxWidth: '80rem',
  margin: '0 auto',
});

export const pagination = style({
  marginTop: '2rem',
});
