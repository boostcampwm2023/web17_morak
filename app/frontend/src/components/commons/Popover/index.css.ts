import { style } from '@vanilla-extract/css';

import { vars } from '@styles';

export const left = style({});
export const center = style({});
export const right = style({});

export const container = style({
  position: 'relative',
  padding: '0.8rem',
  width: 'fit-content',
  borderRadius: '8px',
  background: vars.color.grayscaleWhite,
  boxShadow: '0px 0px 8px 0px rgba(0 0 0 / 0.25)',

  selectors: {
    '&:before': {
      position: 'absolute',
      top: '-1.2rem',
      content: '',
      border: '0.6rem solid transparent',
      borderBottom: `0.6rem solid ${vars.color.grayscaleWhite}`,
    },
    [`${left}&:before`]: {
      left: '0.8rem',
    },
    [`${center}&:before`]: {
      left: '50%',
      transform: 'translate(-50%)',
    },
    [`${right}&:before`]: {
      right: '0.8rem',
    },
  },
});
