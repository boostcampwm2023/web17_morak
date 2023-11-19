import { style } from '@vanilla-extract/css';

import { vars, fontStyle } from '@styles/index.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const count = style([
  fontStyle.sansRegular12,
  {
    display: 'none',

    selectors: {
      [`${container}:focus-within &`]: {
        display: 'block',
      },
    },
  },
]);
export const disabled = style({});

export const error = style({});

export const errorMessage = style([
  fontStyle.sansRegular12,
  {
    color: vars.color.morakRed,
    marginTop: '0.4rem',
  },
]);

export const input = style([
  fontStyle.sansRegular12,
  {
    padding: '0.8rem',
    color: vars.color.grayscale500,
    width: ['100%', '-webkit-fill-available'],
    outline: 'none',
    border: `2px solid ${vars.color.grayscale200}`,
    borderRadius: '0.4rem',

    selectors: {
      '&:focus': {
        border: `2px solid ${vars.color.morakGreen}`,
      },
      '&::placeholder': {
        color: vars.color.grayscale200,
      },
      [`${error} &`]: {
        border: `2px solid ${vars.color.morakRed}`,
      },
      [`${disabled} &`]: {
        border: `2px solid ${vars.color.grayscale200}`,
        cursor: 'not-allowed',
      },
    },
  },
]);

export const label = style([
  fontStyle.sansRegular12,
  {
    color: vars.color.grayscaleBlack,
    selectors: {
      [`${disabled} &`]: {
        color: vars.color.grayscale200,
      },
    },
  },
]);

export const required = style({
  paddingLeft: '0.2rem',
  color: vars.color.morakRed,
});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '0.4rem',
});
