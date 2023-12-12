import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '@/styles';
import { sansRegular16 } from '@/styles/font.css';

const opened = style({});

export const container = style({
  position: 'relative',
});

export const dropdown = style({
  display: 'none',
  flexDirection: 'column',
  position: 'absolute',
  border: `1px solid ${vars.color.grayscale200}`,
  borderRadius: '0.8rem',
  overflow: 'hidden',
  transform: `translate(${calc.subtract('4.4rem', '100%')}, 0.5rem)`,
  boxShadow: '0px 4px 8px 0px rgba(0 0 0 / 0.1)',
  background: vars.color.grayscaleWhite,

  selectors: {
    [`${opened}&`]: {
      display: 'flex',
    },
  },
});

export const dropdownButton = style([
  sansRegular16,
  {
    padding: '0.8rem',
    width: '100%',
    whiteSpace: 'nowrap',

    ':hover': {
      background: vars.color.grayscale50,
    },
    ':active': {
      background: vars.color.grayscale100,
    },
  },
]);

export const dropdownItem = style({
  display: 'flex',

  selectors: {
    [`& + &`]: {
      borderTop: `1px solid ${vars.color.grayscale100}`,
    },
  },
});

export const moreButton = style({
  display: 'flex',
  borderRadius: '50%',
  padding: '0.8rem',

  ':hover': {
    background: vars.color.grayscale50,
  },
  ':active': {
    background: vars.color.grayscale100,
  },

  selectors: {
    [`${opened}&`]: {
      background: vars.color.grayscale100,
    },
  },
});

export { opened };
