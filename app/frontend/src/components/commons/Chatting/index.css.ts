import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansBold14, sansBold24, sansRegular14, sansRegular16 } from '@/styles/font.css';

export const chatList = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  gap: '1.6rem',
  padding: '1.6rem 2.4rem',
  borderTop: `1px solid ${vars.color.grayscale100}`,
  borderBottom: `1px solid ${vars.color.grayscale100}`,
  overflowY: 'scroll',
});

export const container = style({ display: 'flex', flexDirection: 'column', width: '100%' });

export const footer = style({
  display: 'flex',
  alignItems: 'stretch',
  gap: '0.8rem',
  padding: '2.4rem 1.6rem',
  background: vars.color.grayscale50,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1.6rem',
  padding: '2.4rem 1.6rem',
  background: vars.color.grayscale50,
});

export const participants = style([
  sansRegular16,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    position: 'relative',
  },
]);

export const popover = style({
  top: '3rem',
});

export const submitButton = style([
  sansBold14,
  {
    border: 'none',
    borderRadius: '0.8rem',
    padding: '2.4rem',
    color: vars.color.grayscaleWhite,
    background: vars.color.morakGreen,
  },
]);

export const textarea = style([
  sansRegular14,
  {
    border: `1px solid ${vars.color.grayscale200}`,
    borderRadius: '0.4rem',
    flexGrow: 1,
    resize: 'none',
  },
]);

export const title = style([
  sansBold24,
  {
    flexGrow: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
]);

export const userList = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  gap: '0.8rem',
  maxWidth: '15rem',
  maxHeight: '30rem',
  overflowY: 'scroll',
});
