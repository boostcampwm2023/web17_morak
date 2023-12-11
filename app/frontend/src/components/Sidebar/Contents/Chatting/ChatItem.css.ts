import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular12, sansRegular14 } from '@/styles/font.css';

const isMine = style({});

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
    flexShrink: 0,
    alignSelf: 'center',
    maxWidth: '100%',
    padding: '0.4rem 1.6rem',
    border: `1px solid ${vars.color.grayscale100}`,
    borderRadius: '100rem',
    margin: '1rem 0',
    color: vars.color.grayscale200,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
]);

export const talkContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '0.8rem',
  width: '100%',
});

export const talkContents = style([
  sansRegular14,
  {
    display: 'flex',
    alignSelf: 'start',
    maxWidth: '30rem',
    padding: '1.2rem 1.6rem',
    border: `1px solid ${vars.color.grayscale200}`,
    borderRadius: '0 0.8rem 0.8rem 0.8rem',
    background: vars.color.grayscale50,
    lineHeight: '1.4',
    wordBreak: 'break-word',

    selectors: {
      [`${isMine}&`]: {
        borderRadius: '0.8rem 0 0.8rem 0.8rem',
        border: `1px solid ${vars.color.morakGreen}`,
        background: vars.color.subGreen,
        alignSelf: 'end',
      },
    },
  },
]);
