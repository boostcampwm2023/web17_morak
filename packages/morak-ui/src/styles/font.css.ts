import { style } from '@vanilla-extract/css';

import { vars } from './theme.css';

const sansRegular = style({
  fontFamily: vars.font.family.pretendard,
  fontWeight: vars.font.weight.regular,
});

const sansBold = style({
  fontFamily: vars.font.family.pretendard,
  fontWeight: vars.font.weight.bold,
});

const poppinsBold = style({
  fontFamily: vars.font.family.poppins,
  fontWeight: vars.font.weight.bold,
});

export const poppinsBold30 = style([
  poppinsBold,
  {
    fontSize: '3rem',
  },
]);

export const poppinsBold96 = style([
  poppinsBold,
  {
    fontSize: '9.6rem',
  },
]);

export const sansBold12 = style([
  sansBold,
  {
    fontSize: '1.2rem',
  },
]);

export const sansBold14 = style([
  sansBold,
  {
    fontSize: '1.4rem',
  },
]);

export const sansBold16 = style([
  sansBold,
  {
    fontSize: '1.6rem',
  },
]);

export const sansBold18 = style([
  sansBold,
  {
    fontSize: '1.8rem',
  },
]);

export const sansBold20 = style([
  sansBold,
  {
    fontSize: '2.0rem',
  },
]);

export const sansBold24 = style([
  sansBold,
  {
    fontSize: '2.4rem',
  },
]);

export const sansBold36 = style([
  sansBold,
  {
    fontSize: '3.6rem',
  },
]);

export const sansRegular12 = style([
  sansRegular,
  {
    fontSize: '1.2rem',
  },
]);

export const sansRegular14 = style([
  sansRegular,
  {
    fontSize: '1.4rem',
  },
]);

export const sansRegular16 = style([
  sansRegular,
  {
    fontSize: '1.6rem',
  },
]);

export const sansRegular18 = style([
  sansRegular,
  {
    fontSize: '1.8rem',
  },
]);

export const sansRegular24 = style([
  sansRegular,
  {
    fontSize: '2.4rem',
  },
]);
