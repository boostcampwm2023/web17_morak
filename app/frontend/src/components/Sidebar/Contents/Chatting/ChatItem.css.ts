import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular12, sansRegular14 } from '@/styles/font.css';

const isMine = style({});

export const content = style([
  sansRegular14,
  {
    display: 'flex',
    alignSelf: 'start',
    maxWidth: '30rem',
    padding: '1.2rem 1.6rem',
    border: `1px solid ${vars.color.grayscale200}`,
    borderRadius: '0 0.8rem 0.8rem 0.8rem',
    background: vars.color.grayscaleWhite,
    lineHeight: '1.4',
    wordBreak: 'break-word',

    selectors: {
      [`${isMine}&`]: {
        borderRadius: '0.8rem 0 0.8rem 0.8rem',
        background: vars.color.subGreen,
        alignSelf: 'end',
      },
    },
  },
]);

export const datetime = style([
  sansRegular12,
  {
    padding: '0 0.4rem',
    alignSelf: 'start',
    color: vars.color.grayscale200,

    selectors: {
      [`${isMine}&`]: {
        alignSelf: 'end',
      },
    },
  },
]);

export { isMine };

export const notification = style([
  sansRegular14,
  {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '100rem',
    padding: '0.4rem',
    margin: '1rem 0',
    background: vars.color.grayscale100,
    color: vars.color.grayscale400,
  },
]);

export const talk = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '0.8rem',
  width: '100%',
});
