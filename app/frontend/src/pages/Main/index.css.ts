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

export const login = style([
  fontStyle.sansBold16,
  {
    display: 'flex',
    padding: '0.8rem 3.6rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    borderRadius: '0.8rem',
    color: vars.color.morakGreen,
    border: `1px solid ${vars.color.morakGreen}`,
    background: vars.color.grayscale50,
  },
]);

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
  width: '49.6rem',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '1.2rem',
});

export const title = style([
  fontStyle.sansBold96,
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '31.5rem',
    height: '7rem',
    color: vars.color.morakGreen,
  },
]);
