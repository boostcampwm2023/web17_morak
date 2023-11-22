import { style } from '@vanilla-extract/css';

import { vars, fontStyle } from '@/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  maxWidth: '75rem',
  margin: '8rem auto 0',
  padding: '1.5rem',
});

export const formContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '100%',
});

export const title = style([
  fontStyle.sansBold24,
  {
    padding: '0.8rem',
    height: '4rem',
    color: vars.color.grayscale500,
    borderBottom: '2px solid transparent',

    selectors: {
      '&:focus': {
        outline: 'none',
        borderBottom: `2px solid ${vars.color.morakGreen}`,
      },
      '&::placeholder': {
        color: vars.color.grayscale200,
      },
    },
  },
]);
