import React, { useEffect } from 'react';

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Card from './ui/CardHowTo';

import PancakeLogo from './icons/PancakeLogo';
import PancakeIcon from './icons/PancakeIcon';
import BnbIcon from './icons/Bnb';
import { GiGlowingHands } from 'react-icons/gi';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function HowTo() {
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
    <div id='howto'>
      <Flex
        justifyContent='center'
        alignItems='center'
        px={4}
        pt={{ base: 16, md: 24 }}
        mx='auto'
        pos='relative'
        bg={useColorModeValue('orange.400', 'purple.900')}>
        <Flex direction='column' justifyContent='center' alignItems='center'>
          <Flex
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
                hidden: { x: -200, opacity: 0 },
              }}>
              <Heading
                color={useColorModeValue('white', 'gray.200')}
                textAlign='center'
                fontWeight={400}
                fontSize={{ base: '6xl', lg: '120' }}
                lineHeight={'90%'}
                maxW={{ base: 'sm', lg: '7xl' }}>
                How to
              </Heading>
            </MotionBox>
            <MotionBox
              mb={{ base: 0, lg: 12 }}
              ref={ref}
              animate={controls}
              initial='hidden'
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                visible: { x: 30, opacity: 1 },
                hidden: { x: 100, opacity: 0 },
              }}>
              <Heading
                textAlign='center'
                fontWeight={400}
                mt={{ base: '1', lg: '0' }}
                fontSize={{ base: '2xl', lg: '30' }}
                lineHeight={'90%'}
                maxW={{ base: 'sm', lg: 'xl' }}>
                help the doggos
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
                  staggerChildren: 0.75,
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
              name='Get BNB'
              desc="Deposit BNB in your wallet of choice. We recommend the usage of TrustWallet for it's simplicity!"
              icon={BnbIcon}
            />
            <Card
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              name='Use PancakeSwap'
              desc='Navigate to PancakeSwap by clicking the button below!'
              icon={PancakeLogo}>
              {' '}
              <Center w="full">
                <Button
                  size='xl'
                  w="full"
                  p={2}
                  textAlign='center'
                  fontWeight={900}
                  color={'white'}
                  fontSize={'1xl'}
                  textDecoration={'none'}
                  bgGradient='linear(to-r, orange.500,yellow.500)'
                  href={'#'}
                  leftIcon={<PancakeIcon />}
                  _hover={{
                    bgGradient: 'linear(to-r, orange.400,yellow.400)',
                    textDecoration: 'none',
                  }}>
                  <Center>Buy MoonBuds</Center>
                </Button>
              </Center>
            </Card>
            <Card
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              name='Diamond Hands'
              desc='Hold on to your bags and enjoy the ride. You just contributed to a better world for dogs!'
              icon={GiGlowingHands}
              lastCard={true}
            />
          </MotionFlex>
        </Flex>
      </Flex>
    </div>
  );
}
