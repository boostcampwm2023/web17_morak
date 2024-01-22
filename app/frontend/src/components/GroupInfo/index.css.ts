import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular16 } from '@/styles/font.css';

export const group = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
  border: `1px solid ${vars.color.morakGreen}`,
  padding: '1.6rem',
  borderRadius: '0.8rem',
  color: vars.color.morakGreen,
});

export const participants = style([
  sansRegular16,
  {
    display: 'flex',
    gap: '0.4rem',
    alignItems: 'center',
    color: vars.color.grayscale200,
  },
]);
