import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    morakGreen: '#1FAB70',
    subGreen: '#9EEECC',
    morakRed: '#F24242',
    grayscaleWhiteAlt: '#FFFFFFB3',
    grayscaleWhite: '#FFFFFF',
    grayscale50: '#F5F7F9',
    grayscale100: '#DAE5E1',
    grayscale200: '#9AA9A2',
    grayscale300: '#769387',
    grayscale400: '#52655D',
    grayscale500: '#25362E',
    grayscaleBlack: '#0E1F18',
  },
  font: {
    family: {
      pretendard: 'Pretendard',
      poppins: 'Poppins',
    },
    weight: {
      regular: '400',
      semibold: '600',
      bold: '700',
    },
  },
});
