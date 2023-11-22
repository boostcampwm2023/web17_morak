import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansBold16, sansRegular16 } from '@/styles/font.css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
});

export const filter = style([
  sansRegular16,
  {
    display: 'flex',
    gap: '0.8rem',
    color: vars.color.grayscale200,
  },
]);

export const selected = style([
  sansBold16,
  {
    selectors: {
      [`${filter} &`]: {
        color: vars.color.grayscale400,
      },
    },
  },
]);

globalStyle(`${filter} span`, {
  cursor: 'pointer',
});

globalStyle(`${filter} span:not(${selected})`, {
  cursor: 'not-allowed',
});
