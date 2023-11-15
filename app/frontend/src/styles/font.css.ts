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

const poppinsRegular = style({
  fontFamily: vars.font.family.poppins,
  fontWeight: vars.font.weight.regular,
});

const poppinsBold = style({
  fontFamily: vars.font.family.poppins,
  fontWeight: vars.font.weight.bold,
});

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

export const sansBold24 = style([
  sansBold,
  {
    fontSize: '2.4rem',
  },
]);

export const poppinsRegular12 = style([
  poppinsRegular,
  {
    fontSize: '1.2rem',
  },
]);

export const poppinsRegular14 = style([
  poppinsRegular,
  {
    fontSize: '1.4rem',
  },
]);

export const poppinsRegular16 = style([
  poppinsRegular,
  {
    fontSize: '1.6rem',
  },
]);

export const poppinsRegular18 = style([
  poppinsRegular,
  {
    fontSize: '1.8rem',
  },
]);

export const poppinsRegular24 = style([
  poppinsRegular,
  {
    fontSize: '2.4rem',
  },
]);

export const poppinsBold12 = style([
  poppinsBold,
  {
    fontSize: '1.2rem',
  },
]);

export const poppinsBold14 = style([
  poppinsBold,
  {
    fontSize: '1.4rem',
  },
]);

export const poppinsBold16 = style([
  poppinsBold,
  {
    fontSize: '1.6rem',
  },
]);

export const poppinsBold18 = style([
  poppinsBold,
  {
    fontSize: '1.8rem',
  },
]);

export const poppinsBold24 = style([
  poppinsBold,
  {
    fontSize: '2.4rem',
  },
]);

export const poppinsBold30 = style([
  poppinsBold,
  {
    fontSize: '3rem',
  },
]);
