import * as css from '@styles/index.css';
import { style } from '@vanilla-extract/css';

export const left = style({});
export const center = style({});
export const right = style({});

export const container = style({
  position: 'relative',
  padding: '0.8rem',
  width: 'fit-content',
  borderRadius: '8px',
  background: css.vars.color.grayscaleWhite,
  boxShadow: '0px 0px 8px 0px rgba(0 0 0 / 0.25)',

  selectors: {
    '&:before': {
      position: 'absolute',
      top: '-0.5rem',
      content: '',
      borderBottom: `0.6rem solid ${css.vars.color.grayscaleWhite}`,
      borderLeft: '0.6rem solid transparent',
      borderRight: '0.6rem solid transparent',
      borderTop: '0.6rem solid transparent',
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
