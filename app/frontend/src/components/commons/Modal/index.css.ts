import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '32rem',
  minHeight: '20rem',
  border: 'none',
  borderRadius: '0.8rem',
  boxShadow: '0 0.4rem 0.8rem rgba(0, 0, 0, 0.25)',
});

export const textArea = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'center',
  gap: '0.8rem',
});

export const title = style({
  fontSize: '2.4rem',
});

export const content = style({
  fontSize: '1.6rem',
});

export const buttonArea = style({
  display: 'flex',
  justifyContent: 'stretch',
  gap: '1.6rem',
});

export const button = style({
  width: '100%',
  fontSize: '1.6rem',
});
