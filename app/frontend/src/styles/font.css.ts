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

export const sansRegular12 = style([
  sansRegular,
  {
    fontSize: 12,
  },
]);

export const sansRegular14 = style([
  sansRegular,
  {
    fontSize: 14,
  },
]);

export const sansRegular16 = style([
  sansRegular,
  {
    fontSize: 16,
  },
]);

export const sansRegular18 = style([
  sansRegular,
  {
    fontSize: 18,
  },
]);

export const sansRegular24 = style([
  sansRegular,
  {
    fontSize: 24,
  },
]);

export const sansBold12 = style([
  sansBold,
  {
    fontSize: 12,
  },
]);

export const sansBold14 = style([
  sansBold,
  {
    fontSize: 14,
  },
]);

export const sansBold16 = style([
  sansBold,
  {
    fontSize: 16,
  },
]);

export const sansBold18 = style([
  sansBold,
  {
    fontSize: 18,
  },
]);

export const sansBold24 = style([
  sansBold,
  {
    fontSize: 24,
  },
]);
