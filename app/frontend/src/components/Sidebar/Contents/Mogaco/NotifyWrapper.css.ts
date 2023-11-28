import { style } from '@vanilla-extract/css';

import { sansBold18 } from '@/styles/font.css';

export const container = style([
  sansBold18,
  {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'pre',
    lineHeight: 'initial',
    textAlign: 'center',
  },
]);
