import React, { useEffect } from 'react';

import {
  Button,
  Center,
  Flex,
  Heading,
  useColorModeValue,
  Link as External,
} from '@chakra-ui/react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Card from './ui/CardTokenomics';

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
                visible: { x: 30, opacity: 1 },
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
                Where did my 5% go?
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
              desc='2% are redistributed to all of the token’s current holders, proportional to the portion of the
              total supply that they currently own.'
              value='2%'>
              <Heading textAlign='center'>HODL!</Heading>
            </Card>
            <Card
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              name='Towards Charity'
              desc='Another 2% are sent to the charity wallet, which is the source of the donations this token
              aims to perform. It is controlled by the team and used exclusively for charity purposes, as
              its address shows.'
              value='2%'>
              {' '}
              <Center w='full'>
                <Button
                  roundedBottomRight='32'
                  roundedTopLeft='32'
                  rounded='5'
                  as={External}
                  size='xl'
                  w='full'
                  p={2}
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
                  Watch Charity Wallet
                </Button>
              </Center>
            </Card>
            <Card
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              name='BURNED'
              desc='Finally, 1% of the transaction is sent to the burn wallet. As a result, the total supply decreases, which contributes to the token’s deflationary nature and increases its value over
              time.'
              value='1%'>
              <Center w='full'>
                <Button
                  mt={4}
                  roundedBottomRight='32'
                  roundedTopLeft='32'
                  rounded='5'
                  as={External}
                  size='xl'
                  w='full'
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
                  Watch Burn Wallet
                </Button>
              </Center>
            </Card>
          </MotionFlex>
        </Flex>
      </Flex>
    </div>
  );
}
