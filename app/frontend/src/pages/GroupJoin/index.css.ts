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
  gap: '1.6rem',
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
  },
]);

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',

  selectors: {
    '& + &': {
      paddingTop: '2.4rem',
      borderTop: `1px solid ${vars.color.grayscale100}`,
    },
  },
});
