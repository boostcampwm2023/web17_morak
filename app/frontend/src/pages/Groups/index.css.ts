import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '72rem',
  margin: '0 auto',
});

export const groupWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  marginTop: '2.4rem',
});

export const loading = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
});
