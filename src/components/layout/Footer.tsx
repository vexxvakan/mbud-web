import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Button,
  useColorModeValue,
  VisuallyHidden,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  StackDivider,
} from '@chakra-ui/react';
import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { ReactNode } from 'react';

import { Link } from 'react-scroll';
const ChakraLink = chakra(Link);

import { Logo } from '../icons/Logo';

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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w='full'
      color={useColorModeValue('gray.700', 'gray.200')}
      bg={useColorModeValue('#FBF7F5', 'gray.800')}>
      <Stack align='center'>
        <Link to='start' smooth={true} duration='2000'>
          <Logo />
        </Link>
        <Stack
          divider={
            <StackDivider borderColor='gray.200' orientation='horizontal' />
          }
          direction={'row'}
          spacing={2}>
          <ChakraLink to='features' duration={500} smooth={true}>
            Features
          </ChakraLink>
          <ChakraLink to='tokenomics' smooth={true} duration={500}>
            Tokenomics
          </ChakraLink>
          <ChakraLink to='howto' smooth={true} duration={500}>
            How To Buy
          </ChakraLink>
        </Stack>
        <Stack>
          <Button variant='ghost' colorScheme='orange' onClick={onOpen}>
            High Risk Investment
          </Button>
          <Modal
            preserveScrollBarGap
            motionPreset='slideInBottom'
            isCentered
            isOpen={isOpen}
            onClose={onClose}>
            <ModalOverlay />
            <ModalContent mx={2}>
              <ModalHeader w='full'>
                <Heading
                  bgGradient={useColorModeValue(
                    'linear(to-tr, yellow.400,orange.500)',
                    'linear(to-tr, purple.400,orange.500)'
                  )}
                  fontWeight={400}
                  bgClip='text'>
                  HIGH RISK INVESTMENT
                </Heading>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text align='justify'>
                  The content shared on this website is for information purpose
                  only and, thus, should not be considered as financial
                  advice.Trading/Investing is risky and you should never invest
                  more than you can afford to lose. Cryptocurrencies are risky.
                  Always seek professional advice before making any investment.
                  You alone assume the sole responsibility of evaluating the
                  merits and risks associated with the use of any information or
                  other content on this website before making any decisions
                  based on such information or other content.
                </Text>
              </ModalBody>
              <ModalFooter justify='center'>
                <Button colorScheme='orange' mr={3} onClick={onClose}>
                  I understand.
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
      </Stack>

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
            <SocialButton
              label={'Telegram'}
              href={'https://t.me/moonbudofficial'}>
              <FaTelegramPlane />
            </SocialButton>
            <SocialButton
              label={'Twitter'}
              href={'https://twitter.com/MoonBud_Coin'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={'Discord'}
              href={'https://discord.gg/d6GY682b3M'}>
              <FaDiscord />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
