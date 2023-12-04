import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansBold16, sansBold24, sansRegular16 } from '@/styles/font.css';

const { grayscale200, grayscaleWhite, grayscale500, grayscaleBlack } =
  vars.color;
export const code = style([
  sansBold16,
  {
    color: grayscale200,
    display: 'flex',
  },
]);
export const container = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '0.8rem',
  border: `1px solid ${grayscale200}`,
  background: grayscaleWhite,
  padding: '2rem',
  gap: '0.8rem',
});
export const count = style([
  sansRegular16,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    color: grayscale500,
  },
]);
export const detail = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});
export const groupCode = style({
  marginLeft: '0.4rem',
});
export const info = style({
  display: 'flex',
  gap: '0.8rem',
});
export const title = style([
  sansBold24,
  {
    color: grayscaleBlack,
  },
]);
export const titleWrapper = style({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
});
