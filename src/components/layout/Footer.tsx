import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Button,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

import { Link } from 'react-scroll';

const ChakraLink = chakra(Link);

import { Logo } from '../Logo';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <ChakraLink href={'#'}>
          <Logo />
        </ChakraLink>
        <Stack direction={'row'} spacing={2}>
          <Button as={ChakraLink} colorScheme="orange" variant="ghost" to='features' smooth={true} duration={500}>
            Features
          </Button>
          <Button as={ChakraLink} colorScheme="orange" variant="ghost" to='tokenomics' smooth={true} duration={500}>
            Tokenomics
          </Button>
          <Button colorScheme="orange" variant="ghost" as={ChakraLink} to='howto' smooth={true} duration={500}>
            HOW TO BUY
          </Button>
        </Stack>
      </Container>

      <Box bg={useColorModeValue('white', 'gray.900')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2021 MoonBud. All rights reserved.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
