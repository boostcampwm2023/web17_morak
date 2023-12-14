import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import {
  sansBold16,
  sansBold24,
  sansRegular14,
  sansRegular16,
} from '@/styles/font.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  color: vars.color.grayscaleBlack,
  padding: '2rem',
});

export const contents = style([
  sansRegular16,
  {
    lineHeight: 1.4,
    wordBreak: 'break-all',
  },
]);

export const group = style([
  sansBold16,
  {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
]);

export const groupWrapper = style({
  display: 'flex',
  alignItems: 'center',
  color: vars.color.grayscale200,
  gap: '1.6rem',
});

export const icon = style({
  fill: vars.color.grayscale200,
});

export const infoContent = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  gap: '0.4rem',
});

export const infoText = style([
  sansRegular14,
  {
    width: '100%',
    alignItems: 'center',
    gap: '0.4rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
]);

export const infoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const title = style([
  sansBold24,
  { overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' },
]);

export const titleWrapper = style({
  display: 'flex',
  gap: '0.8rem',
  alignItems: 'center',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});
