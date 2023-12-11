import { style } from '@vanilla-extract/css';

import { vars, fontStyle } from '@/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  maxWidth: '104rem',
  color: vars.color.grayscale400,
  background: vars.color.grayscaleWhite,
});

export const login = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const mainImage = style({
  width: '100%',
  maxWidth: '69.7rem',
  maxHeight: '69.7rem',
  objectFit: 'contain',
});

export const text = style([
  fontStyle.sansRegular24,
  {
    color: vars.color.grayscale400,
    textAlign: 'right',
    lineHeight: '3.5rem',

    '@media': {
      'screen and (max-width:768px)': {
        fontSize: '1.8rem',
      },
    },
  },
]);

export const textArea = style({
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

    '@media': {
      'screen and (max-width:768px)': {
        fontSize: '4.8rem',
      },
    },
  },
]);
