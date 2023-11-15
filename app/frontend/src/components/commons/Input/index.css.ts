import * as css from '@styles/index.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const error = style({});
export const disabled = style({});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '0.4rem',
});

export const label = style([
  css.fontStyle.sansRegular12,
  {
    color: css.vars.color.grayscaleBlack,
    selectors: {
      [`${disabled} &`]: {
        color: css.vars.color.grayscale200,
      },
    },
  },
]);

export const required = style({
  paddingLeft: '0.2rem',
  color: css.vars.color.morakRed,
});

export const input = style([
  css.fontStyle.sansRegular12,
  {
    padding: '0.8rem',
    color: css.vars.color.grayscale500,
    width: '100%',
    maxWidth: '-webkit-fill-available',
    outline: 'none',
    border: `2px solid ${css.vars.color.grayscale200}`,
    borderRadius: '0.4rem',

    selectors: {
      '&:focus': {
        border: `2px solid ${css.vars.color.morakGreen}`,
      },
      '&::placeholder': {
        color: css.vars.color.grayscale200,
      },
      [`${error} &`]: {
        border: `2px solid ${css.vars.color.morakRed}`,
      },
      [`${disabled} &`]: {
        border: `2px solid ${css.vars.color.grayscale200}`,
        cursor: 'not-allowed',
      },
    },
  },
]);

export const count = style([
  css.fontStyle.sansRegular12,
  {
    display: 'none',

    selectors: {
      [`${container}:focus-within &`]: {
        display: 'block',
      },
    },
  },
]);

export const errorMessage = style([
  css.fontStyle.sansRegular12,
  {
    color: css.vars.color.morakRed,
    marginTop: '0.4rem',
  },
]);
