import { style } from '@vanilla-extract/css';

export const background = style({
  width: '80%',
  height: '80%',
  opacity: '0.1',
});

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '80rem',
  position: 'relative',
});

export const wrapper = style({
  position: 'absolute',
  width: '80%',
});
