import {
  Flex,
  Circle,
  Box,
  useColorModeValue,
  Heading,
  Text,
  Center,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';

import Wave from 'react-wavify';

import { TiArrowRightOutline, TiArrowDownOutline } from 'react-icons/ti';

import { motion } from 'framer-motion';

type CardProps = {
  name: string;
  desc: string;
  icon: any;
  variants: any;
  children?: any;
  lastCard?: boolean;
};

const MotionFlex = motion(Flex);

export default function Card({
  variants,
  children,
  name,
  desc,
  icon,
  lastCard,
}: CardProps) {
  return (
    <Flex direction={{ base: 'column', lg: 'row' }} align='start'>
      <MotionFlex
        variants={variants}
        whileHover={{ scale: 1.1 }}
        py={6}
        px={{ base: 4, lg: 8 }}
        alignItems='center'
        justifyContent='start'
        direction='column'>
        <Box
          border={useColorModeValue('2px', '0px')}
          borderColor={useColorModeValue('orange.300', 'green.400')}
          bgGradient={useColorModeValue(
            'linear(to-tr, yellow.400,orange.200)',
            'linear(to-tr, purple.800,orange.500)'
          )}
          roundedTopLeft='48'
          roundedBottomRight='48'
          shadow='xl'
          maxW='sm'>
          <Box
            roundedTopLeft='48'
            bg='transparent'
            w='full'
            h={{ base: '48', lg: '48' }}
            position='relative'
            pb={2}>
            <Circle
              size='15px'
              position='absolute'
              top={2}
              right={2}
              bg={useColorModeValue('offwhite.1', 'gray.900')}
            />
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                velocity: 0.3,
                type: 'spring',
                damping: 10,
                stiffness: 10,
                bounce: 1,
              }}>
              <Center
                px={6}
                py={{ base: 12, lg: 12 }}
                fontSize={{ base: 150, lg: 150 }}
                color={useColorModeValue('white', 'offwhite.1')}>
                <Icon as={icon} />
              </Center>
            </motion.div>
          </Box>
          <Flex bg='transparent' pos='relative' p={0} m={0} h='10' w='full'>
            <Wave
              fill={useColorModeValue('white', '#283C3E')}
              paused={false}
              options={{
                amplitude: 10,
                speed: 0.2,
                points: 6,
              }}
            />
          </Flex>
          <Box
            textAlign='center'
            w='full'
            bg={useColorModeValue('white', 'gray.800')}
            px={6}
            py={1}>
            <Heading
              bgGradient={useColorModeValue(
                'linear(to-r, yellow.400, orange.400)',
                'linear(to-r, purple.400, orange.500)'
              )}
              bgClip='text'
              fontSize={{ base: '3xl', lg: '4xl' }}
              fontWeight='400'
              as='h3'
              lineHeight='tight'
              isTruncated>
              {name}
            </Heading>
          </Box>
          <Box
            shadow='lg'
            roundedBottomRight='48'
            w='full'
            bg={useColorModeValue('white', 'gray.800')}
            py={3}
            px={6}>
            <Text
              pb={3}
              color={useColorModeValue('gray.800', 'white')}
              fontSize='md'
              fontWeight={400}
              lineHeight='tight'>
              {desc}
            </Text>
            {children}
          </Box>
        </Box>
      </MotionFlex>
      <Box alignSelf='center'>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
          }}>
          {useBreakpointValue({
            base: (
              <Icon
                as={TiArrowDownOutline}
                opacity={lastCard === true ? '0' : '1'}
                fontSize={64}></Icon>
            ),
            lg: (
              <Icon
                as={TiArrowRightOutline}
                opacity={lastCard === true ? '0' : '1'}
                fontSize={64}></Icon>
            ),
          })}
        </motion.div>
      </Box>
    </Flex>
  );
}
