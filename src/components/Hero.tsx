import React from 'react';

import Particles from 'react-tsparticles';

import {
  chakra,
  Flex,
  Heading,
  Box,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  useColorMode
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

import { Link } from 'react-scroll'
const ChakraLink = chakra(Link);

import PlanetBlue from '../components/icons/PlanetBlue';

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z'
      fill='currentColor'
    />
  ),
});

const MotionButton = motion(Button);
const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 30,
  restSpeed: 0.5,
};

export default function Hero() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      id='start'
      justifyContent='center'
      alignItems='center'
      px={4}
      pt={{ base: 0, md: 32 }}
      mx='auto'
      maxH='90vh'>
      <Box
        zIndex={-2}
        bg={useColorModeValue('offwhite.1', 'blue.900')}
        pos='absolute'
        top={0}
        left={0}
        w='full'
        overflow='hidden'
        h='full'>
        <Box
          pos='absolute'
          w='full'
          h='full'
          top={{ base: '40vh', lg: '400' }}
          right={{ base: '20', lg: '100' }}>
          <motion.div
            animate={{ x: [0, 5, 0], y: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}>
            {colorMode === 'dark' ? <PlanetBlue /> : ''}
          </motion.div>
        </Box>

        <Particles
          id='tsparticles'
          options={{
            particles: {
              number: {
                value: 90,
                density: {
                  enable: true,
                  value_area: 315,
                },
              },
              color: {
                value: '#ffffff',
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000',
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1.1,
                  opacity_min: 0.5,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: false,
                  mode: 'repulse',
                },
                onclick: {
                  enable: false,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </Box>
      <Stack
        w='full'
        overflow={'hidden'}
        as={Box}
        alignItems='center'
        textAlign={'justify'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 6, md: 36 }}>
        <Flex
          direction='column'
          alignItems='center'
          mt={{ base: '40', lg: '0' }}
          w='full'>
          <MotionBox
            textAlign='center'
            transition={spring}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}>
            <MotionHeading
              bgGradient={useColorModeValue(
                'linear(to-r, yellow.400, orange.400)',
                'linear(to-r, purple.400, orange.500)'
              )}
              bgClip='text'
              textAlign='center'
              fontWeight={400}
              fontSize={{ base: '6xl', lg: '9xl' }}
              lineHeight={'90%'}
              maxW={{ base: '256', lg: '7xl' }}>
              HELLO FRENS
            </MotionHeading>
          </MotionBox>
          <MotionBox
            transition={spring}
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}>
            <MotionHeading
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                velocity: 0.1,
                type: 'spring',
                damping: 10,
                stiffness: 10,
                bounce: 1,
              }}
              bgGradient={useColorModeValue(
                'linear(to-r, yellow.400, orange.400)',
                'linear(to-r, purple.400, orange.500)'
              )}
              bgClip='text'
              textAlign='center'
              fontWeight={400}
              mt={{ base: '1', lg: '4' }}
              fontSize={{ base: '1xl', lg: '4xl' }}
              lineHeight={'90%'}
              maxW={{ base: 'sm', lg: 'xl' }}>
              LETS SAVE THE DOGS!
            </MotionHeading>
          </MotionBox>
        </Flex>
        <Flex direction='column' alignItems='center'>
          <Heading
            as={'h6'}
            color={useColorModeValue('gray.800', 'offwhite.1)')}
            textAlign='center'
            fontWeight={400}
            fontSize={{ base: '2xl', lg: '4xl' }}
            lineHeight={'90%'}
            maxW={{ base: '400', lg: '7xl' }}
            pt={4}
            pb={2}>
            Moon Buds{' '}
            <chakra.span
              fontSize={{ base: '1xl', lg: '2xl' }}
              bgGradient={useColorModeValue(
                'linear(to-tr, red.200, red.300)',
                'linear(to-tr, red.500, red.700)'
              )}
              bgClip='text'>
              ❤️
            </chakra.span>{' '}
            Charity
          </Heading>
          <Text
            px={5}
            pb={3}
            pt={1}
            maxW={{ base: 'sm', lg: 'xl' }}
            color={useColorModeValue('gray.600', 'gray.200')}>
            Moon Bud is the latest deflationary currency on the Binance Smart
            Chain, and we aim to make a difference. Along with normal token
            burning and reflection, a portion of every $MBUD transaction is
            directed towards shelters and charities chosen by our community.
            Join us on our mission to the moon, and to a better planet.
          </Text>
        </Flex>

        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          position={'relative'}>
          <MotionButton
            height='60px'
            roundedTopLeft={'32'}
            roundedBottomRight={'32'}
            bgGradient={useColorModeValue(
              'linear(to-tr, yellow.400, orange.400)',
              'linear(to-tr, purple.400, orange.500)'
            )}
            color={useColorModeValue('offwhite.1', 'offwhite.1')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            Buy MoonBud
          </MotionButton>

          <Button as={ChakraLink} to="features" smooth={true} duration="1000" variant={'ghost'} colorScheme={'orange'} size={'sm'}>
            Learn more
          </Button>

          <Box>
            <Icon
              display={{ base: 'none', lg: 'block' }}
              as={Arrow}
              color={useColorModeValue('gray.800', 'gray.300')}
              w={71}
              position={'absolute'}
              right={-76}
              top={'18px'}
            />
            <Text
              color={useColorModeValue('gray.800', 'gray.300')}
              display={{ base: 'none', lg: 'block' }}
              fontSize={'lg'}
              fontFamily={'Permanent Marker'}
              position={'absolute'}
              right={'-155px'}
              top={'-6px'}
              transform={'rotate(15deg)'}>
              FILL YOUR BAGS
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Flex>
  );
}

Hero.defaultProps = {
  title: 'Title',
};
