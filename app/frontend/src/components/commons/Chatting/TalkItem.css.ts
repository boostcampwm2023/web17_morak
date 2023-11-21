import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular12, sansRegular14 } from '@/styles/font.css';

const isMine = style({});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '0.8rem',
  width: '100%',
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

export const defaultProfileImage = style({
  border: `1px solid ${vars.color.morakGreen}`,
  borderRadius: '50%',
});

export { isMine };

export const profileImage = style({
  display: 'flex',
  flexShrink: 0,
  width: '2.4rem',
  height: '2.4rem',
  borderRadius: '50%',
  overflow: 'hidden',
});

export const userInfo = style([
  sansRegular12,
  {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    gap: '0.4rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
]);
