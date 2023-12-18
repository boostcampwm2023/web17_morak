import { style } from '@vanilla-extract/css';

import { vars, fontStyle } from '@/styles';

const {
  grayscale50,
  grayscale200,
  grayscale500,
  grayscaleWhite,
  grayscaleBlack,
} = vars.color;
const { sansRegular14, sansBold14, sansBold20 } = fontStyle;

export const container = style([
  sansRegular14,
  {
    display: 'flex',
    padding: '2rem',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.2rem',
    borderRadius: '0.8rem',
    border: `1px solid ${grayscale200}`,
    background: grayscaleWhite,
    boxSizing: 'border-box',
    selectors: {
      '&:hover': {
        background: grayscale50,
      },
    },
  },
]);

export const content = style([
  sansRegular14,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.8rem',
    width: '100%',
    color: grayscaleBlack,
  },
]);

export const detail = style({
  width: '100%',
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
  sansBold14,
  {
    width: '100%',
    color: grayscale500,
    textAlign: 'left',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
]);

export const icon = style({
  fill: grayscale200,
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  gap: '0.4rem',
});

export const infoContent = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  gap: '0.4rem',
});

export const infoText = style({
  width: '100%',
  alignItems: 'center',
  gap: '0.4rem',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export const title = style([
  sansBold20,
  {
    color: grayscaleBlack,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
]);

export const titleArea = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  width: '100%',
});
