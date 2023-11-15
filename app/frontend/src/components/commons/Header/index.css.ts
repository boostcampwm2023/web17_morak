import { vars } from '@styles/index.css';
import { globalStyle, style } from '@vanilla-extract/css';

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

export const title = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',

  color: vars.color.morakGreen,
  textAlign: 'center',
  fontFamily: vars.font.family.poppins,
  fontWeight: vars.font.weight.bold,
  fontSize: '3rem',
});

export const logo = style({
  width: '3.6rem',
  height: '3.6rem',
  padding: '0.9rem 0.5rem',
  boxSizing: 'border-box',
});

export const logoTitle = style({
  display: 'flex',
  width: '10.3rem',
  height: '4.5rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const sideMenu = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '3.6rem',
});

export const sideMenuButton = style({
  color: vars.color.grayscale200,
  fontFamily: vars.font.family.poppins,
  fontWeight: vars.font.weight.regular,
  fontSize: '1.8rem',
});

globalStyle('.active', {
  color: vars.color.morakGreen,
  fontWeight: vars.font.weight.bold,
  fill: vars.color.morakGreen,
});
