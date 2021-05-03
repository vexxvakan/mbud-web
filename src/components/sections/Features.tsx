import React, { useEffect } from 'react';

import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Button,
  Center,
  Link as External,
} from '@chakra-ui/react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Card from '../ui/Card';
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
                visible: { x: 0, opacity: 1 },
                hidden: { x: 100, opacity: 0 },
              }}>
              <Heading
                textAlign='center'
                fontWeight={400}
                color={useColorModeValue('gray.900', 'gray.500')}
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
                  duration: 1,
                },
              },
            }}
            initial='hidden'
            animate={controls}>
            <Card
              variants={{
                hidden: { opacity: 0, y: 50, transition: { delay: 1 } },
                visible: { opacity: 1, y: 0 },
              }}
              name='Charitable'
              useIcon={true}
              desc='Every transaction sends MBUD tokens to our public charity wallet. MoonBud holders vote on which charitable organization 100% of these funds will be delivered to.'
              icon={GiHealthPotion}>
              {' '}
              <Center w='full'>
                <Button
                  roundedBottomRight='32'
                  roundedTopLeft='32'
                  rounded='5'
                  as={External}
                  size='lg'
                  w='full'
                  h="10"
                  px={2}
                  textAlign='center'
                  fontWeight={900}
                  color={'white'}
                  colorScheme='orange'
                  fontSize={'1xl'}
                  textDecoration={'none'}
                  bgGradient={useColorModeValue(
                    'linear(to-tr, yellow.400, orange.400)',
                    'linear(to-r, purple.400, orange.500)'
                  )}
                  href={
                    'https://bscscan.com/token/0xbe8183612f145986a41ad8e8fcfefed1c2f9deba?a=0xcb326b9f02660a4b52e8863cd40a3806af009e20'
                  }
                  _hover={{
                    textDecoration: 'none',
                  }}>
                  Check Out Charity Wallet
                </Button>
              </Center>
            </Card>
            <Card
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              useIcon={true}
              name='Reflective'
              desc='Every MBUD transaction sends MBUD tokens directly to each and every holder, providing passive income and incentivizing holding.'
              icon={GiReceiveMoney}></Card>
            <Card
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              name='Deflationary'
              useIcon={true}
              desc='Every MBUD transaction results in tokens being permanently burned, decreasing the total supply and increasing the value of each MBUD token.'
              icon={GiFlamedLeaf}>
              <Center w='full'>
                <Button
                  mt={4}
                  roundedBottomRight='32'
                  roundedTopLeft='32'
                  rounded='5'
                  as={External}
                  size='lg'
                  w='full'
                  h="10"
                  p={2}
                  textAlign='center'
                  fontWeight={900}
                  color={'white'}
                  fontSize={'1xl'}
                  textDecoration={'none'}
                  bgGradient={useColorModeValue(
                    'linear(to-tr, yellow.400, orange.400)',
                    'linear(to-r, purple.400, orange.500)'
                  )}
                  href={
                    'https://bscscan.com/token/0xbe8183612f145986a41ad8e8fcfefed1c2f9deba?a=0x000000000000000000000000000000000000dead'
                  }
                  _hover={{
                    textDecoration: 'none',
                  }}>
                  Check Out Burn Wallet
                </Button>
              </Center>
            </Card>
          </MotionFlex>
        </Flex>
      </Flex>
    </div>
  );
}
