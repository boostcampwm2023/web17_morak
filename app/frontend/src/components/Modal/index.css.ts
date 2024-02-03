import { style } from '@vanilla-extract/css';

import { sansRegular16 } from '@/styles/font.css';

const open = style({});

export const background = style({
  display: 'none',
  position: 'absolute',
  inset: 0,
  zIndex: 20,
  background: 'rgba(14, 31, 24, 0.05)',
  backdropFilter: 'blur(0.2rem)',

  selectors: {
    [`${open}&`]: {
      display: 'block',
    },
  },
});
export const buttonArea = style({
  display: 'flex',
  justifyContent: 'stretch',
  gap: '1.6rem',
});
export const container = style({
  display: 'none',
  position: 'fixed',
  zIndex: 30,
  top: '50%',
  left: '50%',
  minHeight: '20rem',
  minWidth: '32rem',
  padding: '1.6rem',
  borderRadius: '0.8rem',
  boxShadow: '0 0.4rem 0.8rem rgba(0, 0, 0, 0.25)',
  transform: 'translate(-50%, -50%)',

  selectors: {
    [`&[open]`]: {
      display: 'flex',
    },
  },
});

export const contents = style([
  sansRegular16,
  {
    whiteSpace: 'pre-line',
    textAlign: 'center',
  },
]);

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

export const inputArea = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '0.8rem',
  flexGrow: 1,
});

export { open };

export const textArea = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.8rem',
  lineHeight: 'normal',
});
