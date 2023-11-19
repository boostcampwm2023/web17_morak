import { vars } from '@styles';
import { style } from '@vanilla-extract/css';

import { sansRegular12, sansRegular14 } from '@styles/font.css';

export const isMine = style({});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '0.8rem',
  width: '100%',
});

export const userInfo = style([
  sansRegular12,
  {
    display: 'flex',
    gap: '0.4rem',
    alignItems: 'center',
  },
]);

export const profileImage = style({
  display: 'flex',
  width: '2.4rem',
  height: '2.4rem',
  borderRadius: '50%',
  overflow: 'hidden',
});

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
