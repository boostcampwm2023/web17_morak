import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';

export const closeButton = style({
  display: 'flex',
  alignItems: 'center',
  width: '2.4rem',
  height: '6.4rem',
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
  transform: 'translateX(calc(-100% + 2.4rem))',
});

const panel = style({
  display: 'flex',
  flexGrow: '1',
  zIndex: 10,
  maxWidth: 'calc(100% - 2.4rem)',
  height: '100%',
  borderRight: `1px solid ${vars.color.grayscale100}`,
  background: vars.color.grayscaleWhite,
});

export const emptyPanel = style([
  panel,
  {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
    width: '100%',
    background: vars.color.grayscale50,
  },
]);

export const flip = style({
  transform: 'rotate(180deg)',
});

export const hidden = style({
  visibility: 'hidden',
});

export { panel };

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  top: '8.5rem',
  left: 0,
  zIndex: 10,
  width: '100%',
  maxWidth: '40rem',
  height: 'calc(100% - 8.6rem)',
  transition: 'transform 0.5s',
});
