import { style } from '@vanilla-extract/css';

import { vars, fontStyle } from '@/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
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
    color: vars.color.morakRed,
    marginTop: '0.4rem',
  },
]);

export const fullWidth = style({
  flexGrow: 1,
});

export const hide = style({});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  minHeight: '1.2rem',
  marginBottom: '0.4rem',
});
