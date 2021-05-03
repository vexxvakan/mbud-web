import React, { useEffect } from 'react';

import {
  Button,
  Center,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Card from '../ui/Card';

import PancakeLogo from '../icons/PancakeLogo';
import BnbIcon from '../icons/Bnb';
import { GiGlowingHands } from 'react-icons/gi';

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
      id=""
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
            <motion.div
              ref={ref}
              animate={controls}
              initial='hidden'
              transition={{ duration: 0.5 }}
              variants={{
                visible: { x: 0, opacity: 1 },
                hidden: { x: -200, opacity: 0 },
              }}>
              <Heading
              mb={20}
                color={useColorModeValue('white', 'offwhite.1')}
                textAlign='center'
                fontWeight={400}
                fontSize={{ base: '6xl', lg: '120' }}
                lineHeight={'90%'}
                maxW={{ base: 'sm', lg: '7xl' }}>
                How to buy
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
              desc="Deposit BNB in your wallet of choice."
              icon={BnbIcon}
              useIcon={true}
            />
            <Card
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              name='Swap to MBUD'
              desc="Don’t forget to set slippage to at least 6%!"
              icon={PancakeLogo}
              useIcon={true}>
              <Center w='full'
              >
                <Button
                maxH="10"
                  roundedBottomRight='36'
                  roundedTopLeft='36'
                  size='xl'
                  w={48}
                  p={2}
                  textAlign='center'
                  fontWeight={900}
                  color={'white'}
                  fontSize={'1xl'}
                  textDecoration={'none'}
                  bgGradient='linear(to-r, orange.500,yellow.500)'
                  href='https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0xbe8183612f145986a41ad8e8fcfefed1c2f9deba'
                  leftIcon={<PancakeLogo />}
                  _hover={{
                    bgGradient: 'linear(to-r, orange.400,yellow.400)',
                    textDecoration: 'none',
                  }}>
                  Buy MoonBuds
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
              useIcon={true}
            />
          </MotionFlex>
        </Flex>
      </Flex>
    </div>
  );
}
