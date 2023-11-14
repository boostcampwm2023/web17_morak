import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const error = style({});
export const disabled = style({});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '4px',
});

export const label = style({
  // color: var(--grayscale-black, #0E1F18);
  /* sans-regular-9 */
  // fontFamily: Poppins;
  color: '#0E1F18',
  fontSize: '12px',
  fontWeight: 400,

  selectors: {
    [`${disabled} &`]: {
      color: '#9AA9A2',
    },
  },
});

export const input = style({
  padding: '8px',
  color: '#25362E',
  fontSize: '12px',
  fontWeight: 400,
  width: '100%',
  maxWidth: '-webkit-fill-available',
  outline: 'none',
  border: '2px solid #9AA9A2',
  borderRadius: '4px',

  selectors: {
    '&:focus': {
      border: '2px solid #1FAB70',
    },
    '&::placeholder': {
      color: '#9AA9A2',
    },
    [`${error} &`]: {
      border: '2px solid #F24242',
    },
    [`${disabled} &`]: {
      border: '2px solid #9AA9A2',
      cursor: 'not-allowed',
    },
  },
});

export const count = style({
  /* sans-regular-9 */
  // fontFamily: Poppins;
  color: '#0E1F18',
  fontSize: '12px',
  fontWeight: 400,
  display: 'none',

  selectors: {
    [`${container}:focus-within &`]: {
      display: 'block',
    },
  },
});

export const errorMessage = style({
  color: '#F24242',
  /* sans-regular-9 */ // fontFamily: Poppins;
  fontSize: '12px',
  fontWeight: 400,
  marginTop: '4px',
});
