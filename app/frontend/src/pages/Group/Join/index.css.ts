import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';

export const confirmButtons = style({
  display: 'flex',
  gap: '1.6rem',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.6rem',
  maxWidth: '80rem',
  margin: '0 auto',
});

export const navLinkButton = style({
  width: '100%',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  position: 'relative',
  opacity: 1,
  transition: 'opacity 0.5s, transform 0.5s',

  selectors: {
    '& + &': {
      paddingTop: '2.4rem',
      borderTop: `1px solid ${vars.color.grayscale100}`,
    },
    '&.completed::before': {
      position: 'absolute',
      zIndex: 10,
      width: '100%',
      height: '100%',
      background: vars.color.grayscaleWhite,
      opacity: 0.75,
      content: '',
    },
    '&.disabled': {
      transform: 'translateY(-0.8rem)',
      visibility: 'hidden',
      opacity: 0,
    },
  },
});
