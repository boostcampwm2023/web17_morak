import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansRegular16 } from '@/styles/font.css';

import * as parentStyle from '../index.css';

export const { section, list, loading, navLinkButton, rotateArrow } =
  parentStyle;

export const notParticipated = style([
  sansRegular16,
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: vars.color.grayscale200,
  },
]);
