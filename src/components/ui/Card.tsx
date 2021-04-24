import {
  Flex,
  Circle,
  Box,
  useColorModeValue,
  Heading,
  Text,
  Center,
  Icon,
} from '@chakra-ui/react';

import Wave from 'react-wavify';

import { motion } from 'framer-motion';

type CardProps = {
  name: string;
  desc: string;
  icon: any;
  variants: any;
};

const MotionFlex = motion(Flex);

export default function Card({ name, desc, icon, variants }: CardProps) {
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
        roundedTopLeft='48'
        bg={useColorModeValue('waves.3', 'gray.800')}
        w='full'
        h={{ base: '48', lg: '48' }}
        position='relative'
        pb={2}>
        <Circle
          size='15px'
          position='absolute'
          top={2}
          right={2}
          bg={useColorModeValue('orange.400', '#333b63')}
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
            color={useColorModeValue('white', 'gray.500')}>
            <Icon as={icon} />
          </Center>
        </motion.div>
      </Box>
      <Flex
        bg={useColorModeValue('waves.3', 'gray.800')}
        pos='relative'
        p={0}
        m={0}
        h='10'
        w='full'>
        <Wave
          fill={useColorModeValue('white', '#667F99')}
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
        bg={useColorModeValue('white', '#667F99')}
        px={6}
        py={1}>
        <Heading
          bgGradient={useColorModeValue(
            'linear(to-l, orange.500, gradients.4)',
            'linear(to-l, blue.800, blue.600)'
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
        bg={useColorModeValue('white', '#667F99')}
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
    </MotionFlex>
  );
}
