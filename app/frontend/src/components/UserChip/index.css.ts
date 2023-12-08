import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular14 } from '@/styles/font.css';

export const container = style([
  {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    gap: '0.4rem',
  },
]);

export const defaultProfileImage = style({
  border: `1px solid ${vars.color.morakGreen}`,
  borderRadius: '50%',
});

export const nickname = style([
  sansRegular14,
  {
    maxWidth: '10rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
]);

export const profileImage = style({
  display: 'flex',
  flexShrink: 0,
  width: '2.4rem',
  height: '2.4rem',
  borderRadius: '50%',
  overflow: 'hidden',
});
