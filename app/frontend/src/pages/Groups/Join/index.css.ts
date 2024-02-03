import { style } from '@vanilla-extract/css';

import { fontStyle, vars } from '@/styles';

const { grayscale200, morakGreen } = vars.color;
const { sansRegular18, sansRegular16, sansBold20 } = fontStyle;

export const buttons = style({
  display: 'flex',
  gap: '0.8rem',
});

export const closedText = style([
  sansRegular18,
  {
    textAlign: 'center',
    lineHeight: '2.4rem',
  },
]);

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '80rem',
  margin: '0 auto',
  gap: '2.4rem',
});

export const form = style([
  sansRegular18,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem',
    alignItems: 'center',
  },
]);

export const group = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',
  padding: '1.2rem',
  border: `1px solid ${morakGreen}`,
  borderRadius: '1.6rem',
  color: morakGreen,
});

export const groupTitle = style([
  sansBold20,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
]);

export const participants = style([
  sansRegular16,
  {
    display: 'flex',
    gap: '0.4rem',
    alignItems: 'center',
    color: grayscale200,
  },
]);

export const subText = style([
  sansRegular16,
  {
    color: grayscale200,
  },
]);
