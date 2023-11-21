import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular12 } from '@/styles/font.css';

export const container = style([
  sansRegular12,
  {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    gap: '0.4rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    lineHeight: 0,
  },
]);

export const defaultProfileImage = style({
  border: `1px solid ${vars.color.morakGreen}`,
  borderRadius: '50%',
});

export const profileImage = style({
  display: 'flex',
  flexShrink: 0,
  width: '2.4rem',
  height: '2.4rem',
  borderRadius: '50%',
  overflow: 'hidden',
});
