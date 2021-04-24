import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  colors: {
    yellow: {
      '50': '#FFFBE5',
      '100': '#FFF3B8',
      '200': '#FFEB8A',
      '300': '#FFE45C',
      '400': '#FFDC2E',
      '500': '#FFD400',
      '600': '#CCAA00',
      '700': '#997F00',
      '800': '#665500',
      '900': '#332A00',
    },
    orange: {
      '50': '#FFF5E6',
      '100': '#FEE4B8',
      '200': '#FED28B',
      '300': '#FDC15E',
      '400': '#FCAF31',
      '500': '#FC9E03',
      '600': '#C97E03',
      '700': '#975F02',
      '800': '#653F01',
      '900': '#322001',
    },
    gray: {
      '50': '#F0F2F5',
      '100': '#D4DBE3',
      '200': '#B9C4D0',
      '300': '#9DADBE',
      '400': '#8196AC',
      '500': '#667F99',
      '600': '#51667B',
      '700': '#3D4C5C',
      '800': '#29333D',
      '900': '#14191F',
    },
    blue: {
      '50': '#E5F3FF',
      '100': '#B8DDFF',
      '200': '#8AC7FF',
      '300': '#5CB1FF',
      '400': '#2E9BFF',
      '500': '#0085FF',
      '600': '#006ACC',
      '700': '#005099',
      '800': '#003566',
      '900': '#001B33',
    },
    gradients: {
      '1': '#ff5858',
      '2': '#f09819',
      '3': '#243949',
      '4': '#517fa4',
      '5': '#3ab5b0',
      '6': '#3d99be',
      '7': '#56317a',
    },
    waves: {
      '1': '#333b63',
      '2': 'orange',
      '3': '#FED28B',
      '4': '#FED28B',
    },
    offwhite: {
      '1': '#FBF7F5'
    }
  },
  fonts: {
    heading: 'Permanent Marker',
    body: 'Poppins',
  },
  breakpoints,
});

export default theme;