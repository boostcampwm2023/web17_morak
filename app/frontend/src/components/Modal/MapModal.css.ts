import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular12 } from '@/styles/font.css';

import { container as modalContainer } from './index.css';

const { grayscale500, grayscale200, grayscale50 } = vars.color;

export const buttonWrapper = style({
  display: 'flex',
  gap: '0.4rem',
});
export const container = style([
  modalContainer,
  {
    width: '90%',
    height: '90%',
  },
]);

export const form = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const inputWrapper = style({
  marginBottom: '0.4rem',
  display: 'flex',
  flexDirection: 'column',
});

export const list = style([
  sansRegular12,
  {
    color: grayscale500,
    width: ['100%', '-webkit-fill-available'],
    outline: 'none',
    border: `2px solid ${grayscale200}`,
    borderBottom: `none`,
    borderRadius: '0.4rem',
    marginTop: '0.4rem',
  },
]);

export const listItem = style({
  selectors: {
    [`&:hover`]: {
      backgroundColor: grayscale50,
    },
    [`${list} &`]: {
      padding: '0.8rem',
      borderBottom: `2px solid ${grayscale200}`,
    },
  },
});

export const map = style({
  width: '100%',
  height: '100%',
});
