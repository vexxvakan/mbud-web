import React, { useEffect } from 'react';

import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Card from './ui/CardTokenomics';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function Hero() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div id="tokenomics">
      <Flex
        justifyContent='center'
        alignItems='center'
        px={4}
        pt={{ base: 16, md: 32 }}
        mx='auto'
        pos='relative'
        bg={useColorModeValue('offwhite.1', 'blue.900')}>
        <Flex direction='column' justifyContent='center' alignItems='center'>
          <Flex
            py={2}
            w='full'
            overflow={'hidden'}
            align='center'
            direction='column'
            h='auto'>
            <MotionBox
              mb={{base: 0, lg: 4}}
              ref={ref}
              animate={controls}
              initial='hidden'
              transition={{ duration: 0.5 }}
              variants={{
                visible: { x: 0, opacity: 1},
                hidden: { x: -100, opacity: 0},
              }}>
              <Heading
                bgGradient={useColorModeValue(
                  'linear(to-tr, yellow.400, orange.400)', 'linear(to-r, purple.400, orange.500)'
                )}
                bgClip="text"
                textAlign='center'
                fontWeight={400}
                fontSize={{ base: '5xl', lg: "120" }}
                lineHeight={'90%'}
                maxW={{ base: 'sm', lg: '7xl' }}>
                Tokenomics
              </Heading>
            </MotionBox>
            <MotionBox
              mb={{base: 0, lg: 12}}
              ref={ref}
              animate={controls}
              initial='hidden'
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                visible: { x: 30, opacity: 1},
                hidden: { x: 100, opacity: 0 },
              }}>
              <Heading
                textAlign='center'
                fontWeight={400}
                mt={{ base: '1', lg: '0' }}
                fontSize={{ base: '2xl', lg: '30' }}
                lineHeight={'90%'}
                maxW={{ base: 'sm', lg: 'xl' }}>
                Where did my 5% go?
              </Heading>
            </MotionBox>
          </Flex>
          <MotionFlex
            mb={{base: 0, lg: 20}}
            direction={{ base: 'column', lg: 'row' }}
            ref={ref}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
            initial='hidden'
            animate={controls}
            transition={{ duration: 1 }}>
            <Card
              variants={{
                hidden: { opacity: 0, y: 50, transition: {delay: 1}},
                visible: { opacity: 1, y: 0 },
              }}
              name='Towards Charity'
              desc='2% of the fee will be sent to our charity wallet. This will be gradually sold over the course of the month to not cause price impact on MBUD. BNB generated from this will only leave when the charity chosen by YOU has accepted our donation and sent us a confirmation!'
              value="2%"
            />
            <Card
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              name='BURNED'
              desc='1% of the fee is sent to a burn wallet where nobody can access the token! This means our token is deflationary in nature, the longer time goes on, the less supply of $MBUD that will exist. HODL!'
              value="1%"
            />
            <Card
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              name='REFLECTED'
              desc='2% of the fee is reflected back to all of the holders of the token. This means our token is auto-staking in nature. The more you hold the more you get reflected.
            Earn more MBUD just by having MBUD in your wallet!'
            value="2%"
            />
          </MotionFlex>
        </Flex>
      </Flex>
    </div>
  );
}
