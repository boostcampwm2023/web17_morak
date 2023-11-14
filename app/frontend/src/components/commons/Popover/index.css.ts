import { style } from '@vanilla-extract/css';

export const left = style({});
export const center = style({});
export const right = style({});

export const container = style({
  position: 'relative',
  padding: '8px',
  width: 'fit-content',
  borderRadius: '8px',
  background: '#FFF',
  boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.25)',

  selectors: {
    '&:before': {
      borderBottom: '6px solid #fff',
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderTop: '6px solid #transparent',
      content: '',
      position: 'absolute',
      top: '-5px',
    },
    [`${left}&:before`]: {
      left: '8px',
    },
    [`${center}&:before`]: {
      left: '50%',
      transform: 'translate(-50%)',
    },
    [`${right}&:before`]: {
      right: '8px',
    },
  },
});
