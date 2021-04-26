import React, { useEffect } from 'react';

import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Card from './ui/Card';
import { GiHealthPotion, GiFlamedLeaf, GiReceiveMoney } from 'react-icons/gi';

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
    <div id='features'>
      <Flex
        justifyContent='center'
        alignItems='center'
        px={4}
        pt={{ base: 16, md: 32 }}
        mx='auto'
        pos='relative'
        bg={useColorModeValue('orange.400', 'purple.900')}>
        <Flex direction='column' justifyContent='center' alignItems='center'>
          <Flex
            py={2}
            w='full'
            overflow={'hidden'}
            align='center'
            direction='column'
            h='auto'>
            <MotionBox
              mb={{ base: 0, lg: 4 }}
              ref={ref}
              animate={controls}
              initial='hidden'
              transition={{ duration: 0.5 }}
              variants={{
                visible: { x: 0, opacity: 1 },
                hidden: { x: -100, opacity: 0 },
              }}>
              <Heading
                color={useColorModeValue('white', 'offwhite.1')}
                textAlign='center'
                fontWeight={400}
                fontSize={{ base: '6xl', lg: '120' }}
                lineHeight={'90%'}
                maxW={{ base: 'sm', lg: '7xl' }}>
                Features
              </Heading>
            </MotionBox>
            <MotionBox
              mb={{ base: 0, lg: 12 }}
              ref={ref}
              animate={controls}
              initial='hidden'
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                visible: { x: 50, opacity: 1 },
                hidden: { x: 100, opacity: 0 },
              }}>
              <Heading
                textAlign='center'
                fontWeight={400}
                color={useColorModeValue("gray.900","gray.500")}
                mt={{ base: '1', lg: '0' }}
                fontSize={{ base: '1xl', lg: '30' }}
                lineHeight={'90%'}
                maxW={{ base: 'sm', lg: 'xl' }}>
                DO ONLY GOOD EVERY DAY
              </Heading>
            </MotionBox>
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
            transition={{ duration: 1 }}>
            <Card
              variants={{
                hidden: { opacity: 0, y: 50, transition: { delay: 1 } },
                visible: { opacity: 1, y: 0 },
              }}
              name='Charity'
              desc='You will be effectively supporting dogs in need all over the world. How exactly will be explained at a later point.'
              icon={GiHealthPotion}></Card>
            <Card
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              name='Deflationary'
              desc='For every transaction on MoonBud, a small amount is burned forever. You can see the burned wallet below.'
              icon={GiFlamedLeaf}></Card>
            <Card
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              name='Reflection'
              desc="In addition to the MBUD burned, there's another small amount being split up even and reflected to every Holder."
              icon={GiReceiveMoney}></Card>
          </MotionFlex>
        </Flex>
      </Flex>
    </div>
  );
}
