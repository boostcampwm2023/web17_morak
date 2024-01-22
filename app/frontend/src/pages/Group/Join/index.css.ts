import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular16 } from '@/styles/font.css';

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

export const group = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
  border: `1px solid ${vars.color.morakGreen}`,
  padding: '1.6rem',
  borderRadius: '0.8rem',
  color: vars.color.morakGreen,
});

export const navLinkButton = style({
  width: '100%',
});

export const participants = style([
  sansRegular16,
  {
    display: 'flex',
    gap: '0.4rem',
    alignItems: 'center',
    color: vars.color.grayscale200,
  },
]);

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
