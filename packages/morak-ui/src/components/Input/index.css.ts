import { style } from '@vanilla-extract/css';

import { vars, fontStyle } from '@/styles';

const { morakGreen, morakRed, grayscale200, grayscale500 } = vars.color;

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
});

export const count = style([
  fontStyle.sansRegular14,
  {
    visibility: 'hidden',

    selectors: {
      [`${container}:focus-within &`]: {
        visibility: 'visible',
      },
    },
  },
]);
export const disabled = style({});

export const error = style({});

export const errorMessage = style([
  fontStyle.sansRegular14,
  {
    color: morakRed,
    marginTop: '0.4rem',
  },
]);

export const fullWidth = style({
  flexGrow: 1,
});
export const hide = style({});

export const input = style([
  fontStyle.sansRegular14,
  {
    padding: '0.8rem',
    color: grayscale500,
    width: ['100%', '-webkit-fill-available'],
    outline: 'none',
    border: `2px solid ${grayscale200}`,
    borderRadius: '0.4rem',

    selectors: {
      '&:focus': {
        border: `2px solid ${morakGreen}`,
      },
      '&::placeholder': {
        color: grayscale200,
      },
      [`${error} &`]: {
        border: `2px solid ${morakRed}`,
      },
      [`${disabled} &`]: {
        border: `2px solid ${grayscale200}`,
        cursor: 'not-allowed',
      },
      '&::-webkit-inner-spin-button': {
        appearance: 'none',
        MozAppearance: 'none',
        WebkitAppearance: 'none',
      },
    },
  },
]);

export const textarea = style([
  input,
  {
    resize: 'none',
    width: '100%',
  },
]);
