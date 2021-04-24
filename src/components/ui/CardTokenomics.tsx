import {
  Flex,
  Circle,
  Box,
  useColorModeValue,
  Heading,
  Text,
  Center
} from '@chakra-ui/react';

import Wave from 'react-wavify';

import { motion } from 'framer-motion';

type CardProps = {
  name: string;
  desc: string;
  value: any;
  variants: any;
};

const MotionFlex = motion(Flex);

export default function Card({ name, desc, value, variants }: CardProps) {
  return (
    <MotionFlex
      variants={variants}
      whileHover={{ scale: 1.1 }}
      py={6}
      px={{ base: 0, lg: 8 }}
      w={{ base: '80', lg: 'md' }}
      alignItems='center'
      justifyContent='center'
      direction='column'
      rounded='xl'>
      <Box
        border="2px"
        borderColor={useColorModeValue(
          'waves.2',
          'linear(to-l, gradients.3,gradients.4)'
        )}
        bgGradient={useColorModeValue(
          'linear(to-tr, gradients.1,gradients.2)',
          'linear(to-l, gradients.3,gradients.4)'
        )}
        roundedTopLeft='48'
        roundedBottomRight='48'
        shadow="xl">
        <Box
          roundedTopLeft='48'
          bg="transparent"
          w='full'
          h={{ base: '48', lg: '48' }}
          position='relative'
          pb={2}>
          <Circle
            size='15px'
            position='absolute'
            top={2}
            right={2}
            bg={useColorModeValue('white', 'blue.900')}
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
              <Heading letterSpacing={4}
              fontWeight={400}
              fontSize="8xl">
                {value}
              </Heading>
            </Center>
          </motion.div>
        </Box>
        <Flex bg='transparent' pos='relative' p={0} m={0} h='10' w='full'>
          <Wave
            fill={useColorModeValue('white', '#3D4C5C')}
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
          bg={useColorModeValue('white', 'gray.700')}
          px={6}
          py={1}>
          <Heading
            bgGradient={useColorModeValue(
              'linear(to-b, gradients.1, gradients.2)', 'linear(to-t, gradients.5, gradients.6, gradients.7)'
            )}
            bgClip='text'
            fontSize={{ base: '3xl', lg: '4xl' }}
            fontWeight='semibold'
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
          bg={useColorModeValue('white', 'gray.700')}
          py={3}
          px={6}>
          <Text
            color={useColorModeValue('gray.800', 'white')}
            fontSize='sm'
            fontWeight={600}
            lineHeight='tight'>
            {desc}
          </Text>
        </Box>
      </Box>
    </MotionFlex>
  );
}
