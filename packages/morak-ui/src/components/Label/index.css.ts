import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles';

const { grayscale50, morakGreen, morakRed, grayscale200 } = vars.color;
export const container = recipe({
  base: {
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '3.6rem',
    padding: '0.4rem 1.4rem',
    borderRadius: '100rem',
    whiteSpace: 'pre',
  },

  variants: {
    theme: {
      primary: {},
      danger: {},
    },
    shape: {
      fill: {
        color: grayscale50,
        border: '1px solid transparent',
      },
      line: {
        background: grayscale50,
      },
    },
    disabled: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        theme: 'primary',
        shape: 'fill',
      },
      style: {
        background: morakGreen,
      },
    },
    {
      variants: {
        theme: 'danger',
        shape: 'fill',
      },
      style: {
        background: morakRed,
      },
    },
    {
      variants: {
        theme: 'primary',
        shape: 'line',
      },
      style: {
        color: morakGreen,
        border: `1px solid ${morakGreen}`,
      },
    },
    {
      variants: {
        theme: 'danger',
        shape: 'line',
      },
      style: {
        color: morakRed,
        border: `1px solid ${morakRed}`,
      },
    },
    {
      variants: {
        disabled: true,
        shape: 'fill',
      },
      style: {
        background: grayscale200,
      },
    },
    {
      variants: {
        disabled: true,
        shape: 'line',
      },
      style: {
        color: grayscale200,
        border: `1px solid ${grayscale200}`,
      },
    },
  ],
});
