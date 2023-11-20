import { style } from '@vanilla-extract/css';

import { vars, fontStyle } from '@/styles';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: `1px solid ${vars.color.grayscale100}`,
});

export const header = style({
  display: 'flex',
  width: '120rem',
  padding: '2rem 8rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box',
});

export const logo = style({
  width: '3.6rem',
  height: '3.6rem',
  padding: '0.9rem 0.5rem',
  boxSizing: 'border-box',
});

export const logoTitle = style([
  fontStyle.poppinsBold30,
  {
    display: 'flex',
    width: '10.3rem',
    height: '4.5rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
]);

export const profile = style({
  fill: vars.color.grayscale200,
});

export const sideMenu = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '3.6rem',
});

export const sideMenuButton = style([
  fontStyle.sansRegular18,
  {
    color: vars.color.grayscale200,
  },
]);

export const sideMenuButtonActive = style([
  fontStyle.sansBold18,
  {
    color: vars.color.morakGreen,
  },
]);

export const title = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  color: vars.color.morakGreen,
  textAlign: 'center',
});
