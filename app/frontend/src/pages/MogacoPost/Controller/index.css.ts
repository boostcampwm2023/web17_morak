import { style } from '@vanilla-extract/css';

import { vars, fontStyle } from '@/styles';

const error = style({});

const title = style([
  fontStyle.sansBold24,
  {
    padding: '0.8rem 0',
    height: '4rem',
    width: '100%',
    color: vars.color.grayscale500,
    borderBottom: '2px solid transparent',

    selectors: {
      '&:focus': {
        outline: 'none',
      },
      '&::placeholder': {
        color: vars.color.grayscale200,
      },
    },
  },
]);

const titleContent = style([
  fontStyle.sansRegular12,
  {
    display: 'flex',
    flex: '1 0 0',
    alignItems: 'center',
    gap: '1.6rem',
    borderBottom: '2px solid transparent',

    selectors: {
      '&:focus-within': {
        borderBottom: `2px solid ${vars.color.morakGreen}`,
      },
      [`${error} &`]: {
        borderBottom: `2px solid ${vars.color.morakRed}`,
      },
    },
  },
]);

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  maxWidth: '75rem',
  margin: '0 auto',
  padding: '1.5rem',
});

export const count = style([
  fontStyle.sansRegular12,
  {
    visibility: 'hidden',

    selectors: {
      [`${titleContent}:focus-within &`]: {
        visibility: 'visible',
      },
    },
  },
]);

export { error, title, titleContent };

export const errorMessage = style([
  fontStyle.sansRegular12,
  {
    color: vars.color.morakRed,
  },
]);

export const formContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '100%',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});
