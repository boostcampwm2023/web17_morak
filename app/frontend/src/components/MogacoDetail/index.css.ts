import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular16 } from '@/styles/font.css';

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
    width: '80rem',
    lineHeight: '1.6',
  },
]);
export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexGrow: 1,
});

export const horizontalLine = style({
  border: 'none',
  borderBottom: `1px solid ${vars.color.grayscale100}`,
  margin: 0,
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
  width: '32rem',
  height: '20rem',
  objectFit: 'cover',
  borderRadius: '0.8rem',
  imageRendering: 'crisp-edges',
});

const shown = style({});

export const participants = style({
  display: 'none',
  gap: '0.8rem',
  overflowX: 'scroll',

  selectors: {
    [`${shown}&`]: {
      display: 'flex',
    },
  },
});

export { shown };

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
