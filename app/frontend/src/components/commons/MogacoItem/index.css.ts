import { style } from '@vanilla-extract/css';

import { vars, fontStyle } from '@/styles';

export const container = style([
  fontStyle.sansRegular12,
  {
    display: 'flex',
    padding: '2rem',
    width: '73.5rem',
    height: '19.6rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.2rem',
    borderRadius: '0.8rem',
    border: `1px solid ${vars.color.grayscale200}`,
    background: vars.color.grayscaleWhite,
    boxSizing: 'border-box',
    selectors: {
      '&:hover': {
        background: vars.color.grayscale50,
      },
    },
  },
]);

export const content = style([
  fontStyle.sansRegular12,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.8rem',
    color: vars.color.grayscaleBlack,
  },
]);

export const detail = style({
  width: '69.5rem',
  height: '3.5rem',
  lineHeight: '1.8rem',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-all',
});

export const group = style([
  fontStyle.sansBold12,
  {
    color: vars.color.grayscale500,
    textAlign: 'center',
  },
]);

export const icon = style({
  fill: vars.color.grayscale200,
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.4rem',
});

export const infoContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const infoText = style({
  width: '67.5rem',
  alignItems: 'center',
  gap: '0.4rem',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export const title = style([
  fontStyle.sansBold24,
  {
    width: '42.3rem',
    color: vars.color.grayscaleBlack,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
]);

export const titleArea = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});
