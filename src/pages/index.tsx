import React from 'react';
import { Fragment } from 'react';

import { Box, useColorModeValue } from '@chakra-ui/react';

import Wave from 'react-wavify';

import Hero from '../components/Hero';
import Features from '../components/Features';
import Tokenomics from '../components/Tokenomics';

const Index = () => (
  <Fragment>
    <Hero />
    <Box w="full" h="12">
      <Wave
        fill={useColorModeValue('orange', '#333b63')}
        paused={false}
        options={{
          height: 20,
          amplitude: 15,
          speed: 0.16,
          points: 6,
        }}
      />
    </Box>
    <Features />
    <Box bg={useColorModeValue('orange', '#333b63')} w="full" h="10">
      <Wave
        fill={useColorModeValue('white', '#001B33')}
        paused={false}
        options={{
          height: 20,
          amplitude: 15,
          speed: 0.16,
          points: 6,
        }}
      />
    </Box>
    <Tokenomics />
  </Fragment>
);

export default Index;
