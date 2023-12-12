import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import {
  sansBold16,
  sansBold24,
  sansRegular14,
  sansRegular16,
} from '@/styles/font.css';

export const buttons = style({
  display: 'flex',
  gap: '0.4rem',
});

export const container = style([
  sansRegular16,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.4rem',
    width: '100%',
    maxWidth: '80rem',
    lineHeight: '1.6',
  },
]);

export const contents = style([
  sansRegular14,
  {
    wordBreak: 'break-all',
  },
]);

export const error = style([
  sansRegular16,
  {
    color: vars.color.morakRed,
  },
]);

export const groupTitle = style([
  sansBold16,
  {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
]);

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const hostUser = style({
  display: 'flex',
  gap: '1.6rem',
  color: vars.color.grayscale200,
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const infoItem = style({
  display: 'flex',
  gap: '0.4rem',
  alignItems: 'center',
});

export const map = style({
  maxWidth: '32rem',
  width: '100%',
  height: '20rem',
  objectFit: 'cover',
  borderRadius: '0.8rem',
  overflow: 'hidden',
  imageRendering: 'crisp-edges',
});

const shown = style({});

export const participants = style({
  display: 'none',
  gap: '0.8rem',
  overflowX: 'auto',

  selectors: {
    [`${shown}&`]: {
      display: 'flex',
    },
  },
});

export { shown };

export const title = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexGrow: 1,
});

export const titleText = style([
  sansBold24,
  {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
]);

export const togglePeopleButton = style({
  display: 'flex',
  padding: '0.25rem',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  ':hover': { background: vars.color.grayscale50, borderRadius: '50%' },

  selectors: {
    [`${shown}&`]: {
      transform: 'rotate(180deg)',
    },
  },
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
