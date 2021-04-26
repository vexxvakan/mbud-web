import React from 'react';
import { Fragment } from 'react';

import { Box, useColorModeValue } from '@chakra-ui/react';

import Wave from 'react-wavify';

import Hero from '../components/Hero';
import Features from '../components/Features';
import Tokenomics from '../components/Tokenomics';
import HowTo from '../components/HowTo';

const Index = () => (
  <Fragment>
      <Hero />
      <Box w='full' h='12' bg='transparent'>
        <Wave
          fill={useColorModeValue('#EE763F', '#270033')}
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
      <Box bg={useColorModeValue('#EE763F', '#270033')} w='full' h='12'>
        <Wave
          fill={useColorModeValue('#FBF7F5', '#0A1D29')}
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
      <Box bg={useColorModeValue('offwhite.1', 'blue.900')} w='full' h='12'>
        <Wave
          fill={useColorModeValue('#EE763F', '#270033')}
          paused={false}
          options={{
            height: 20,
            amplitude: 15,
            speed: 0.16,
            points: 6,
          }}
        />
      </Box>
      <HowTo />
  </Fragment>
);

export default Index;
