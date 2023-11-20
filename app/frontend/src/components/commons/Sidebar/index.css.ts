import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';

export const closeButton = style({
  display: 'flex',
  alignItems: 'center',
  width: '2.4rem',
  height: '4.8rem',
  padding: 0,
  border: `1px solid ${vars.color.grayscale200}`,
  borderRadius: '0 0.8rem 0.8rem 0',
  borderLeftColor: 'transparent',
  background: vars.color.grayscaleWhite,
  cursor: 'pointer',

  ':hover': {
    filter: 'brightness(1.1)',
  },
  ':active': {
    filter: 'brightness(0.9)',
  },
});

export const closed = style({
  transform: 'translateX(-40rem)',
});

export const flip = style({
  transform: 'rotate(180deg)',
});

export const panel = style({
  display: 'flex',
  width: '40rem',
  height: '100%',
  borderRight: `1px solid ${vars.color.grayscale100}`,
  background: vars.color.grayscaleWhite,
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 100,
  height: '100%',
  transition: 'transform 0.5s',
});
