import { style } from '@vanilla-extract/css';

import { vars, fontStyle } from '@/styles';

export const container = style({
  position: 'relative',
  display: 'flex',
  margin: '8.5rem auto',
  width: '104rem',
  height: '81.7rem',
  color: vars.color.grayscale400,
  background: vars.color.grayscaleWhite,
});

export const login = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const mainImage = style({
  width: '69.7rem',
  height: '69.7rem',
  alignSelf: 'flex-end',
  objectFit: 'contain',
});

export const text = style([
  fontStyle.sansRegular24,
  {
    color: vars.color.grayscale400,
    textAlign: 'right',
    lineHeight: '3.5rem',
  },
]);

export const textArea = style({
  position: 'absolute',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '1.2rem',
});

export const title = style([
  fontStyle.poppinsBold96,
  {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    color: vars.color.morakGreen,
  },
]);
