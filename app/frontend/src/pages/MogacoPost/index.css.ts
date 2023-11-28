import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  maxWidth: '75rem',
  margin: '0 auto',
  padding: '1.5rem',
});

export const formContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '100%',
});
