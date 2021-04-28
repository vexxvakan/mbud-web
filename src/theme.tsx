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
      '50': '#FFF4E5',
      '100': '#FFE0B8',
      '200': '#FFCC8A',
      '300': '#FFB85C',
      '400': '#FFA52E',
      '500': '#FF9100',
      '600': '#CC7400',
      '700': '#995700',
      '800': '#663A00',
      '900': '#331D00',
    },
    orange: {
      '50': '#FDEEE8',
      '100': '#F9D0BE',
      '200': '#F5B293',
      '300': '#F19469',
      '400': '#EE763F',
      '500': '#EA5815',
      '600': '#BB4611',
      '700': '#8C350D',
      '800': '#5E2308',
      '900': '#2F1204',
    },
    blue: {
      '50': '#EBF4FA',
      '100': '#C6E1F1',
      '200': '#A1CDE8',
      '300': '#7CB9DF',
      '400': '#57A6D6',
      '500': '#3292CD',
      '600': '#2875A4',
      '700': '#1E587B',
      '800': '#143B52',
      '900': '#0A1D29',
    },
    gray: {
      '50': '#EFF4F5',
      '100': '#D3E1E3',
      '200': '#B7CED1',
      '300': '#9BBBBF',
      '400': '#7FA8AE',
      '500': '#63959C',
      '600': '#4F777D',
      '700': '#3C595D',
      '800': '#283C3E',
      '900': '#141E1F',
    },
    teal: {
      '50': '#EAFAF7',
      '100': '#C6F1E9',
      '200': '#A1E8DB',
      '300': '#7CDFCD',
      '400': '#57D6BF',
      '500': '#32CDB1',
      '600': '#28A48E',
      '700': '#1E7B6A',
      '800': '#145247',
      '900': '#0A2923',
    },
    red: {
      '50': '#FDE7EA',
      '100': '#FABCC4',
      '200': '#F7929E',
      '300': '#F46778',
      '400': '#F13C52',
      '500': '#EE112C',
      '600': '#BE0E23',
      '700': '#8F0A1B',
      '800': '#5F0712',
      '900': '#300309',
    },
    purple: {
      '50': '#F9E5FF',
      '100': '#EEB8FF',
      '200': '#E28AFF',
      '300': '#D75CFF',
      '400': '#CC2EFF',
      '500': '#C100FF',
      '600': '#9A00CC',
      '700': '#740099',
      '800': '#4D0066',
      '900': '#270033',
    },
    pink: {
      '50': '#F6EFEF',
      '100': '#E5D2D3',
      '200': '#D4B5B7',
      '300': '#C3989B',
      '400': '#B27B7F',
      '500': '#A15E63',
      '600': '#814B4F',
      '700': '#61383B',
      '800': '#402628',
      '900': '#201314',
    },
    gradients: {
      '1': '#f9844a',
      '2': '#fab54c',
      '3': '#243949',
      '4': '#517fa4',
    },
    offwhite: {
      '1': '#FBF7F5',
    },
  },
  fonts: {
    heading: 'Permanent Marker',
    body: 'Poppins',
  },
  breakpoints,
  initialColorMode: "dark",
  useSystemColorMode: false,
});

export default theme;
