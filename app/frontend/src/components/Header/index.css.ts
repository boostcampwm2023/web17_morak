import { style } from '@vanilla-extract/css';

import { vars, fontStyle } from '@/styles';

const { grayscaleWhite, grayscale100, grayscale200, morakGreen } = vars.color;

export const active = style({});

export const container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: grayscaleWhite,
  borderBottom: `1px solid ${grayscale100}`,
  zIndex: 20,
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

export const profileButton = style({
  fill: grayscale200,

  selectors: {
    [`${active} &`]: {
      fill: morakGreen,
    },
  },
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
    color: grayscale200,
    cursor: 'pointer',
    selectors: {
      [`${active}&`]: {
        fontWeight: 700,
        color: morakGreen,
      },
    },
  },
]);

export const title = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  color: morakGreen,
  textAlign: 'center',
});
