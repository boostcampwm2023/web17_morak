import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular16 } from '@/styles/font.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
  width: '100%',
  padding: '1.6rem',
  border: `1px solid ${vars.color.morakGreen}`,
  borderRadius: '0.8rem',
  textAlign: 'center',
  wordBreak: 'break-all',
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

export const title = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});
