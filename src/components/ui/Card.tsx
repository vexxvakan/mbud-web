import {
  Flex,
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
  icon?: any;
  value?: string;
  variants: any;
  children?: any;
  border?: boolean;
  useIcon?: boolean;
};

export default function Card({
  variants,
  children,
  name,
  desc,
  icon,
  value,
  border,
  useIcon,
}: CardProps) {
  return (
    <motion.div variants={variants} whileHover={{ scale: 1.1 }}>
      <Flex
        minH={{base: '200', lg: 'lg'}}
        maxH={{base: 'full', lg: 'lg'}}
        py={6}
        px={{ base: 4, lg: 8 }}
        alignItems='center'
        justifyContent='start'
        direction='column'>
        <Box
          minH={{base: '100', lg: 'lg'}}
          border={border === true ? '2px' : '0px'}
          borderColor='orange.300'
          bgGradient={useColorModeValue(
            'linear(to-tr, yellow.400,orange.200)',
            'linear(to-tr, purple.800,orange.500)'
          )}
          roundedTopLeft='48'
          roundedBottomRight='48'
          maxW='sm'>
          <Box
            roundedTopLeft='48'
            bg='transparent'
            w='full'
            h='full'
            position='relative'
            pb={2}>
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                velocity: 0.01,
                type: 'spring',
                bounce: 1,
              }}>
              <Center px={6} py={12} fontSize={150} color='offwhite.1'>
                {useIcon === true ? (
                  <Icon as={icon} />
                ) : (
                  <Heading letterSpacing={4} fontWeight={400} fontSize='8xl'>
                    {value}
                  </Heading>
                )}
              </Center>
            </motion.div>
          </Box>
          <Box
            overflow='hidden'
            bg='transparent'
            pos='relative'
            h='10'
            w='full'>
            <Wave
              fill={useColorModeValue('white', '#283C3E')}
              paused={false}
              options={{
                amplitude: 10,
                speed: 0.2,
                points: 4,
              }}
            />
          </Box>
          <Box
            textAlign='center'
            w='full'
            h="full"
            bg={useColorModeValue('white', 'gray.800')}
            px={6}>
            <Heading
              bgGradient={useColorModeValue(
                'linear(to-r, yellow.400, orange.400)',
                'linear(to-r, purple.400, orange.500)'
              )}
              bgClip='text'
              fontSize={{ base: '3xl', lg: '4xl' }}
              fontWeight='400'
              as='h3'
              isTruncated>
              {name}
            </Heading>
          </Box>
          <Box
            shadow='lg'
            roundedBottomRight='48'
            w='full'
            h={{base: 'full', lg: '200'}}
            bg={useColorModeValue('white', 'gray.800')}
            py={3}
            px={6}>
            <Text
              textAlign="justify"
              pb={3}
              color={useColorModeValue('gray.800', 'white')}
              fontSize={16}
              fontWeight={400}>
              {desc}
            </Text>
            {children}
          </Box>
        </Box>
      </Flex>
    </motion.div>
  );
}
