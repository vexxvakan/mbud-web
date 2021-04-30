import React, { useEffect } from 'react';

import {
  Flex,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Card from './ui/Card';

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
    <div id='tokenomics'>
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
            <motion.div
              ref={ref}
              animate={controls}
              initial='hidden'
              transition={{ duration: 0.5 }}
              variants={{
                visible: { x: 0, opacity: 1 },
                hidden: { x: -100, opacity: 0 },
              }}>
              <Heading
                mt={{base: 0, lg: 4}}
                bgGradient={useColorModeValue(
                  'linear(to-tr, yellow.400, orange.400)',
                  'linear(to-r, purple.400, orange.500)'
                )}
                bgClip='text'
                textAlign='center'
                fontWeight={400}
                fontSize={{ base: '5xl', lg: '120' }}
                lineHeight={'90%'}
                maxW={{ base: 'sm', lg: '7xl' }}>
                Tokenomics
              </Heading>
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial='hidden'
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                visible: { x: 0, opacity: 1 },
                hidden: { x: 100, opacity: 0 },
              }}>
              <Heading
                textAlign='center'
                fontWeight={400}
                mt={{ base: 1, lg: 0 }}
                mb={{base: 0, lg: 6}}
                fontSize={{ base: '2xl', lg: '30' }}
                lineHeight={'90%'}
                maxW={{ base: 'sm', lg: 'xl' }}>
                Transaction Fee: Where Did My 5% Go?
              </Heading>
            </motion.div>
          </Flex>
          <MotionFlex
            mb={{ base: 0, lg: 20 }}
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
            transition={{ duration: 0.1 }}>
            <Card
              variants={{
                hidden: { opacity: 0, y: 50, transition: { delay: 1 } },
                visible: { opacity: 1, y: 0 },
              }}
              name='REFLECTED'
              desc='2% of the MBUD fee is redistributed to all MBUD holders proportional to the amount of the supply that they own.'
              value='2%'>
              <Heading textAlign='center'>HODL!</Heading>
            </Card>
            <Card
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              name='Towards Charity'
              desc='Another 2% of the MBUD fee is sent directly to the public charity wallet.'
              value='2%'>
            </Card>
            <Card
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              name='BURNED'
              desc='The final 1% of the MBUD transaction fee is burned forever, decreasing the total supply and increasing the value of each MBUD token.'
              value='1%'>
              
            </Card>
          </MotionFlex>
        </Flex>
      </Flex>
    </div>
  );
}
