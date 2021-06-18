import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Button,
  useColorModeValue,
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
  Link as External,
} from '@chakra-ui/react';

import {
  FaDiscord,
  FaMediumM,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa';
import { ReactNode } from 'react';

import BSCLightIcon from '../icons/BSCIcon';

import { Link } from 'react-scroll';
const ChakraLink = chakra(Link);

import { Logo } from '../icons/Logo';

const SocialButton = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <External
      isExternal
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
      {children}
    </External>
  );
};

export default function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w='full'
      color={useColorModeValue('gray.700', 'gray.200')}
      bg={useColorModeValue('orange.300', 'gray.800')}>
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
          <ChakraLink
            to='features'
            duration={500}
            smooth={true}
            _hover={{
              cursor: 'pointer',
            }}>
            Features
          </ChakraLink>
          <ChakraLink
            to='tokenomics'
            smooth={true}
            duration={500}
            _hover={{
              cursor: 'pointer',
            }}>
            Tokenomics
          </ChakraLink>
          <ChakraLink
            to='howto'
            smooth={true}
            duration={500}
            _hover={{
              cursor: 'pointer',
            }}>
            How To Buy
          </ChakraLink>
          <ChakraLink
            to='roadmap'
            smooth={true}
            duration={500}
            _hover={{
              cursor: 'pointer',
            }}>
            Roadmap
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
            <ModalContent mx={2} roundedBottomRight={'34'} roundedTopLeft='48'>
              <ModalHeader
                css={{
                  backgroundColor: useColorModeValue(
                    'rgba(255, 255, 255, 0.5)',
                    'rgba(103, 113, 137, 0.5)'
                  ),
                }}
                roundedTopLeft='48'
                w='full'>
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
              <ModalBody
                css={{
                  backgroundColor: useColorModeValue(
                    'rgba(255, 255, 255, 0.8)',
                    'rgba(103, 113, 137, 0.8)'
                  ),
                }}>
                <Text align='justify'>
                  The content shared on this website is for informational
                  purposes only and should not be considered financial advice.
                  Always seek professional advice before making any investment.
                  You alone assume the sole responsibility of evaluating the
                  merits and risks associated with the use of any information or
                  other content on this website before making any decisions
                  based on such information or other content.
                </Text>
              </ModalBody>
              <ModalFooter
                opacity={0.7}
                bgGradient={useColorModeValue(
                  'linear(to-tr, yellow.400,orange.500)',
                  'linear(to-tr, purple.400,orange.500)'
                )}
                roundedBottomRight='34'
                justify='center'>
                <Button colorScheme='red' mr={3} onClick={onClose}>
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
            <SocialButton href={'https://t.me/moonbudofficial'}>
              <FaTelegramPlane />
            </SocialButton>
            <SocialButton href={'https://twitter.com/MoonBud_Coin'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton href={'https://discord.gg/d6GY682b3M'}>
              <FaDiscord />
            </SocialButton>
            <SocialButton href={'https://www.reddit.com/r/MoonBud/'}>
              <FaRedditAlien />
            </SocialButton>
            <SocialButton href='https://medium.com/@moonbud_official'>
              <FaMediumM />
            </SocialButton>
            <SocialButton
              href={
                'https://bscscan.com/token/0xbe8183612f145986a41ad8e8fcfefed1c2f9deba'
              }>
              <BSCLightIcon />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
