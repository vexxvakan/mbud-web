import React, { useEffect } from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  useColorModeValue,
  Link as External,
} from '@chakra-ui/react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);

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
    <div id='whitepaper'>
      <Flex
        justifyContent='center'
        alignItems='center'
        px={{base: 0, lg: 4}}
        pt={{ base: 16, md: 24 }}
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
              mb={{ base: 0, lg: 6 }}
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
                mb={20}
                fontSize={{ base: '6xl', lg: '120' }}
                lineHeight={'90%'}
                maxW={{ base: 'sm', lg: '7xl' }}>
                Whitepaper
              </Heading>
            </MotionBox>
          </Flex>
          <Flex
            mb={16}
            py={4}
            direction='column'
            align='center'
            justify='start'
            rounded='5'
            roundedTopLeft='36'
            roundedBottomRight='36'
            w={{base: "full", lg: '70vw'}}
            h='auto'
            overflow='hidden'
            bgGradient={useColorModeValue(
              'linear(to-t, offwhite.1, offwhite.1)',
              'linear(to-tr, orange.600, purple.700)'
            )}>
            <Accordion rounded='xl' w='full' h='auto' allowMultiple>
              <Flex w='full' align='center' justify={{base: 'center', lg: 'start'}}>
                <Heading pl={{base: 0, lg: 6}} mb={5}>Summary</Heading>
              </Flex>
              <AccordionItem
                roundedTop='xl'
                bgGradient={useColorModeValue(
                  'linear(to-tr, yellow.400, orange.300)',
                  'linear(to-tr, blue.600, blue.800)'
                )}
                _expanded={{
                  bgGradient: useColorModeValue(
                    'linear(to-tr, yellow.300, orange.400)',
                    'linear(to-tr, blue.700, blue.900)'
                  ),
                }}
                border='0px'>
                <AccordionButton boxShadow='md'>
                  <Box flex='1' textAlign='center'>
                    <Heading>Introduction</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  color={useColorModeValue('gray.800', 'offwhite.1')}
                  pb={4}>
                  MoonBud ($MBUD) is a deflationary and reflective token on the
                  Binance Smart Chain. The purpose of this coin is to harness
                  the power of cryptocurrency to benefit both holders and dogs
                  around the world. At the time of writing, we are on track to
                  donate over $100,000 to charitable causes just days after
                  creation. This paper outlines the vision and future of the
                  MBud token. Please join us on our goal to create a profitable
                  and ethical currency.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                bgGradient={useColorModeValue(
                  'linear(to-t, offwhite.1, offwhite.1)',
                  'linear(to-tr, purple.600, orange.700)'
                )}
                _expanded={{
                  bgGradient: useColorModeValue(
                    'linear(to-tr, yellow.300, yellow.400)',
                    'linear(to-tr, blue.700, blue.900)'
                  ),
                }}
                border='0px'>
                <h2>
                  <AccordionButton boxShadow='md'>
                    <Box flex='1' textAlign='center'>
                      <Heading>Vision</Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Currently, charity is often seen as either ineffective or
                  malicious, as people are not incentivized to donate to it or
                  do so with purposes such as tax avoidance. Charity directors
                  are also sometimes seen as paying themselves disproportionate
                  salaries. The vision of Moonbud involves overcoming this
                  barrier with the advantages that cryptocurrency has created.
                  The advent of smart contracts has opened up the path to new
                  systems of wealth generation, which, compared to those in use
                  currently, can be more fair, profitable, and ethical. By using
                  blockchains such as the Binance Smart Chain, it is possible to
                  make various processes automated and transparent, ensuring
                  that no misdeeds can take place. At the same time, the highly
                  public blockchain system enables anyone to benefit, from the
                  smallest holders to the largest. MoonBud’s vision is people
                  investing in it to earn money while also supporting charity
                  through the mechanism explained below.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                bgGradient={useColorModeValue(
                  'linear(to-tr, yellow.400, orange.300)',
                  'linear(to-tr, blue.600, blue.800)'
                )}
                _expanded={{
                  bgGradient: useColorModeValue(
                    'linear(to-tr, yellow.300, orange.400)',
                    'linear(to-tr, blue.700, blue.900)'
                  ),
                }}
                border='0px'>
                <h2>
                  <AccordionButton boxShadow='md'>
                    <Box flex='1' textAlign='center'>
                      <Heading>Charity</Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  As described above, the charity wallet is one of MoonBud’s key
                  features. It grows as people trade the token, and the funds in
                  it are converted into BNB and, later on, fiat (or crypto if
                  the charity in question takes it). Currently, team members
                  control the wallet and perform that function. The holders
                  submit potential charities and vote on them, and team members
                  make a monthly donation. However, in the future, we plan on
                  transitioning to a fully automated system via a DAO where
                  holders can participate in governance. The selling function
                  will be given over to a bot programmed to sell tokens so as to
                  interfere with price movements as little as possible.
                </AccordionPanel>
              </AccordionItem>
              <Flex
                px={6}
                w='full'
                align='center'
                justify={{ base: 'center', lg: 'flex-end' }}>
                <Button
                  mt={3}
                  roundedTopLeft="36"
                  roundedBottomRight="36"
                  size='md'
                  href='/wp.pdf'
                  as={External}
                  isExternal
                  colorScheme='orange'
                  _hover={{
                    textDecoration: 'none',
                  }}>
                  Read Full Whitepaper
                </Button>
              </Flex>
            </Accordion>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
