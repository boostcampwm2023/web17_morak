import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular14 } from '@/styles/font.css';

const { grayscale400 } = vars.color;

const error = style({});
const disabled = style({});
const input = style([
  sansRegular14,
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
      '&::-webkit-inner-spin-button': {
        appearance: 'none',
        MozAppearance: 'none',
        WebkitAppearance: 'none',
      },
    },
  },
]);

export const container = style([input, { paddingLeft: '0.3rem' }]);

export const message = style([
  sansRegular14,
  {
    color: grayscale400,
  },
]);
