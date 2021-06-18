import { Fragment } from 'react';

import dynamic from 'next/dynamic';
import Navigation from './Navigation';
import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const Footer = dynamic(() => import('./Footer'), { loading: () => <div /> });
const Wave = dynamic(() => import('react-wavify'), { loading: () => <div /> });

type LayoutProps = {
  children: any;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Navigation />
      <main>{children}</main>
      <Box bg={useColorModeValue('orange.400', 'purple.900')} w='full' h='6'>
        <Wave
          fill={useColorModeValue('var(--chakra-colors-orange-200', '#283C3E')}
          paused={false}
          options={{
            height: 1,
            amplitude: 15,
            speed: 0.16,
            points: 6,
          }}
        />
      </Box>
      <Footer />
    </Fragment>
  );
};
