import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular16 } from '@/styles/font.css';

export const container = style([
  sansRegular16,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.4rem',
    width: '72rem',
    lineHeight: '1.6',
  },
]);

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexGrow: 1,
});

export const horizontalLine = style({
  border: 'none',
  borderBottom: `1px solid ${vars.color.grayscale100}`,
  margin: 0,
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const infoItem = style({
  display: 'flex',
  gap: '0.4rem',
  alignItems: 'center',
});

export const togglePeopleButton = style({
  display: 'flex',
  padding: 0,
  border: 'none',
  background: 'none',
  cursor: 'pointer',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
