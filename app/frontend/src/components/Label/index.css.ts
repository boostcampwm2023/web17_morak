import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles';

export const container = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '3.5rem',
    padding: '0.4rem 1.5rem',
    borderRadius: '100rem',
  },

  variants: {
    theme: {
      primary: {},
      danger: {},
    },
    shape: {
      fill: {
        color: vars.color.grayscale50,
        border: '1px solid transparent',
      },
      line: {
        background: vars.color.grayscale50,
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
        background: vars.color.morakGreen,
      },
    },
    {
      variants: {
        theme: 'danger',
        shape: 'fill',
      },
      style: {
        background: vars.color.morakRed,
      },
    },
    {
      variants: {
        theme: 'primary',
        shape: 'line',
      },
      style: {
        color: vars.color.morakGreen,
        border: `1px solid ${vars.color.morakGreen}`,
      },
    },
    {
      variants: {
        theme: 'danger',
        shape: 'line',
      },
      style: {
        color: vars.color.morakRed,
        border: `1px solid ${vars.color.morakRed}`,
      },
    },
    {
      variants: {
        disabled: true,
        shape: 'fill',
      },
      style: {
        background: vars.color.grayscale200,
      },
    },
    {
      variants: {
        disabled: true,
        shape: 'line',
      },
      style: {
        color: vars.color.grayscale200,
        border: `1px solid ${vars.color.grayscale200}`,
      },
    },
  ],
});
