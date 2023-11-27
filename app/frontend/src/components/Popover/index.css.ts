import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';

const left = style({});
const right = style({});
const center = style({});

export { center, left, right };

export const container = style({
  position: 'absolute',
  padding: '0.8rem',
  width: 'fit-content',
  top: '0.8rem',
  borderRadius: '8px',
  background: vars.color.grayscaleWhite,
  boxShadow: '0px 0px 8px 0px rgba(0 0 0 / 0.25)',

  selectors: {
    [`${left}&`]: {
      left: '0.4rem',
    },
    [`${center}&`]: {
      left: '50%',
      transform: 'translate(-50%)',
    },
    [`${right}&`]: {
      right: '0.4rem',
    },
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
