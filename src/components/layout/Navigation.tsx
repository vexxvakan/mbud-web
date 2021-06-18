import {
  chakra,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  ButtonGroup,
  Icon,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Tooltip,
  Heading,
  Link as External,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { Link } from 'react-scroll';

const ChakraLink = chakra(Link);

import {
  FaDiscord,
  FaMediumM,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
  FaShoppingCart
} from 'react-icons/fa';

import { AiOutlineDashboard } from 'react-icons/ai';
import { GoFlame } from 'react-icons/go';
import BSCLightIcon from '../icons/BSCIcon';
import PancakeIcon from '../icons/PancakeLogo';

import { Logo } from '../icons/Logo';
import { DarkModeSwitch } from '../ui/SettingsMenu';

import React, { Fragment } from 'react';

import { Squash as Hamburger } from 'hamburger-react';
import WindSwapLogo from '../icons/WindSwapLogo';

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w='full'>
      <Flex
        justifyContent='space-between'
        as={'header'}
        pos='fixed'
        top='0'
        boxShadow={'lg'}
        w='full'
        zIndex='999'
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderTop={5}
        borderStyle={'solid'}
        borderColor={useColorModeValue('orange.400', 'purple.500')}
        align={'center'}
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: useColorModeValue(
            'rgba(255, 255, 255, 0.5)',
            'rgba(40, 60, 62, 0.26)'
          ),
        }}>
        <Flex
          align='center'
          justify='start'
          flex={{ base: 1, md: '0' }}
          ml={{ base: -2 }}>
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={
              <Hamburger
                hideOutline={true}
                rounded
                label='Show menu'
                toggled={isOpen}
              />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
          <Link to='start' smooth={true} duration='2000'>
            <Logo />
          </Link>
        </Flex>
        <Flex
          flex={{ base: 0, md: 'none' }}
          justify={{ base: 'center', md: 'space-between' }}>
          <Flex
            align='center'
            h={'full'}
            display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex alignItems='center'>
          <ButtonGroup
            display={{ base: 'none', md: 'flex' }}
            spacing={1}
            mr={2}>
            <IconButton
              as={External}
              isExternal
              variant='ghost'
              size='sm'
              color='#FF5700'
              aria-label='Visit /r/moonbud'
              fontSize='16px'
              href='https://www.reddit.com/r/MoonBud/'
              icon={<FaRedditAlien />}
            />
            <IconButton
              as={External}
              href='https://t.me/moonbudofficial'
              isExternal
              variant='ghost'
              colorScheme='telegram'
              size='sm'
              aria-label='Join us on Telegram'
              fontSize='16px'
              icon={<FaTelegramPlane />}
            />
            <IconButton
              as={External}
              href='https://twitter.com/MoonBud_Coin'
              isExternal
              variant='ghost'
              colorScheme='twitter'
              bg='transparent'
              size='sm'
              aria-label='Follow us on Twitter!'
              fontSize='16px'
              icon={<FaTwitter />}
            />
            <IconButton
              as={External}
              href='https://medium.com/@moonbud_official'
              isExternal
              variant='ghost'
              colorScheme='gray'
              bg='transparent'
              size='sm'
              aria-label='Read the news on Medium'
              fontSize='16px'
              icon={<FaMediumM />}
            />
            <IconButton
              as={External}
              href='https://discord.gg/d6GY682b3M'
              isExternal
              variant='ghost'
              colorScheme='blue'
              bg='transparent'
              size='sm'
              aria-label='Find us on BscScan.com!'
              fontSize='16px'
              icon={<FaDiscord />}
            />
            <IconButton
              as={External}
              href='https://bscscan.com/token/0xbe8183612f145986a41ad8e8fcfefed1c2f9deba'
              isExternal
              variant='ghost'
              colorScheme='gray'
              bg='transparent'
              size='sm'
              aria-label='Find us on BscScan.com!'
              fontSize='16px'
              icon={<BSCLightIcon />}
            />
          </ButtonGroup>
          <HStack spacing="1">
            <IconButton
               href='https://shop.spreadshirt.com/moonbud'
               as={External}
               isExternal
               _hover={{
                 textDecoration: 'none',
                bgGradient: useColorModeValue(
                  'linear(to-tr, yellow.300, orange.400)',
                  'linear(to-tr, purple.400, orange.500)'
                ),
              }}
              bgGradient={useColorModeValue(
                'linear(to-tr, yellow.300, orange.500)',
                'linear(to-tr, purple.500, orange.600)'
              )}
              color={useColorModeValue("offwhite.1", "offwhite.1")}
              icon={<FaShoppingCart />}
              variant='solid'
              aria-label='Open Merchstore'/>
            <Tooltip
              p={3}
              arrowSize={21}
              roundedBottomRight='12'
              roundedTopLeft='12'
              hasArrow
              border='2px solid black'
              label={
                <Flex direction='column' maxW='32'>
                  <Heading fontSize={'20'}>Coming Soon</Heading>
                  <Text pt='2'>
                    A toolkit full of features to make your bud life easier.
                    Arriving soon.
                  </Text>
                </Flex>
              }
              bg={useColorModeValue('orange.400', 'purple.200')}>
              <IconButton
                display={{ base: 'none', lg: 'inline-flex' }}
                icon={<AiOutlineDashboard />}
                variant='outline'
                aria-label='Open MBUD Dashboard'
                colorScheme={useColorModeValue('orange', 'purple')}/>
            </Tooltip>
            <Popover>
              <PopoverTrigger>
                <Box>
                  <IconButton
                    variant='outline'
                    colorScheme={useColorModeValue('orange', 'purple')}
                    display={{ base: 'inline-flex', lg: 'none' }}
                    fontSize={'16'}
                    isDisabled
                    icon={<AiOutlineDashboard />}
                    mr={1}
                    aria-label='Open MBUD Dashboard'
                  />
                </Box>
              </PopoverTrigger>
              <PopoverContent
                css={{
                  backdropFilter: 'saturate(180%) blur(6px)',
                  backgroundColor: useColorModeValue(
                    'rgba(255, 255, 255, 0.75)',
                    'rgba(10, 29, 41, 0.9)'
                  ),
                }}
                mx={3}
                roundedTopLeft='48'
                roundedBottomRight='48'>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader px={4}>
                  <Heading
                    bgGradient={useColorModeValue(
                      'linear(to-tr, yellow.400,orange.500)',
                      'linear(to-tr, purple.400,orange.500)'
                    )}
                    bgClip='text'>
                    Coming soon!
                  </Heading>
                </PopoverHeader>
                <PopoverBody>
                  A toolkit full of features to make your bud life easier. Soon.
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <DarkModeSwitch />
          </HStack>
        </Flex>
      </Flex>
      <Box
        position='fixed'
        top={'61px'}
        w='full'
        zIndex='999'
        color={useColorModeValue('gray.600', 'white')}>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack as='nav' direction={'row'} spacing={0}>
      {NAV_ITEMS.map((navItem) => (
        <Button
          as={ChakraLink}
          to={navItem.href}
          smooth={true}
          duration={500}
          key={navItem.label}
          variant='ghost'
          colorScheme='orange'
          color={useColorModeValue('orange.500', 'gray.200')}
          _hover={{
            cursor: 'pointer',
          }}>
          {navItem.label}
        </Button>
      ))}
      <Button
        as={External}
        isExternal
        display={{ base: 'none', lg: 'inline-flex' }}
        variant='ghost'
        colorScheme='orange'
        color={useColorModeValue('orange.500', 'gray.200')}
        _hover={{
          textDecoration: 'none',
        }}
        href='https://solidity.finance/audits/Moonbud/'
        aria-label='Check our Audit!'>
        Audit
      </Button>
      <Button
        as={ChakraLink}
        to='roadmap'
        smooth={true}
        duration={500}
        variant='ghost'
        color={useColorModeValue('orange.500', 'gray.200')}
        _hover={{
          cursor: 'pointer',
        }}>
        Roadmap
      </Button>
      <Button
        as={ChakraLink}
        to='whitepaper'
        smooth={true}
        duration={500}
        variant='ghost'
        color={useColorModeValue('red.500', 'red.300')}
        _hover={{
          cursor: 'pointer',
        }}>
        {' '}
        <span>
          <Badge
            roundedBottomRight='xl'
            roundedTopLeft='xl'
            display='true'
            p={1}
            mr={1}
            variant='ghost'
            colorScheme='orange'>
            <Icon w={4} h={4} color='orange.400' as={GoFlame} />
          </Badge>
        </span>
        Whitepaper
      </Button>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Fragment>
      <Stack
        w='full'
        borderTop={5}
        borderStyle={'solid'}
        borderColor={useColorModeValue('orange.400', 'orange.300')}
        css={{
          backdropFilter: 'saturate(180%) blur(7px)',
          backgroundColor: useColorModeValue(
            'rgba(255, 255, 255, 0.5)',
            'rgba(103, 113, 137, 0.2)'
          ),
        }}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
        <Stack spacing={4}>
          <Flex
            py={2}
            href='https://solidity.finance/audits/Moonbud/'
            as={External}
            isExternal
            justify={'start'}
            align={'center'}
            _hover={{
              textDecoration: 'none',
            }}>
            <Text
              fontWeight={600}
              color={useColorModeValue('gray.800', 'offwhite.1')}>
              Audit
            </Text>
          </Flex>
          <Flex
            py={2}
            as={ChakraLink}
            to='roadmap'
            smooth={true}
            duration='1000'
            justify={'start'}
            align={'center'}
            _hover={{
              textDecoration: 'none',
            }}>
            <Text
              fontWeight={600}
              color={useColorModeValue('gray.800', 'offwhite.1')}>
              Roadmap
            </Text>
          </Flex>
          <Flex
            py={2}
            as={ChakraLink}
            to='whitepaper'
            smooth={true}
            duration='1000'
            justify={'start'}
            align={'center'}
            _hover={{
              textDecoration: 'none',
            }}>
            <Text
              fontWeight={600}
              color={useColorModeValue('gray.800', 'offwhite.1')}>
              <span>
                <Badge
                  roundedBottomRight='xl'
                  roundedTopLeft='xl'
                  display='true'
                  p={1}
                  mr={1}
                  variant='subtle'
                  colorScheme='orange'>
                  <Icon w={4} h={4} color='orange.400' as={GoFlame} />
                  NEW
                </Badge>
              </span>
              Whitepaper
            </Text>
          </Flex>
        </Stack>
      </Stack>
      <Stack
        roundedBottom='32'
        shadow={'md'}
        direction={'column'}
        borderTop={2}
        borderStyle={'solid'}
        borderColor={useColorModeValue('orange.400', 'orange.300')}
        css={{
          backdropFilter: 'saturate(180%) blur(7px)',
          backgroundColor: useColorModeValue(
            'rgba(255, 255, 255, 0.5)',
            'rgba(103, 113, 137, 0.2)'
          ),
        }}
        p={4}
        display={{ md: 'none' }}>
        <VStack>
          <ButtonGroup align='center' w='full' spacing='2' mx='auto'>
            <Button
              as={External}
              display={{ base: 'inline-flex', md: 'none' }}
              size='lg'
              w='full'
              px={3}
              fontWeight={900}
              color={'offwhite.1'}
              fontSize={'1xl'}
              textDecoration={'none'}
              bgGradient='linear(to-tr, orange.500,yellow.300)'
              href='https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0xbe8183612f145986a41ad8e8fcfefed1c2f9deba'
              leftIcon={<PancakeIcon />}>
              PancakeSwap
            </Button>
            <Button
              as={External}
              display={{ base: 'inline-flex', md: 'none' }}
              size='lg'
              px={3}
              fontWeight={900}
              color={'offwhite.1'}
              fontSize={'1xl'}
              textDecoration={'none'}
              bgGradient='linear(to-tr, blue.500,cyan.300)'
              leftIcon={<WindSwapLogo />}
              href='https://app.windswap.finance/#/swap?outputCurrency=0xbE8183612F145986A41ad8e8fCFefED1C2F9dEbA'
              w='full'>
              WindSwap
            </Button>
          </ButtonGroup>
          <ButtonGroup spacing={1}>
            <IconButton
              as={External}
              isExternal
              variant='ghost'
              size='lg'
              colorScheme='orange'
              aria-label='Visit /r/moonbud'
              fontSize='20px'
              href='https://www.reddit.com/r/MoonBud/'
              icon={<FaRedditAlien />}
            />
            <IconButton
              as={External}
              href='https://t.me/moonbudofficial'
              isExternal
              variant='ghost'
              colorScheme='telegram'
              size='lg'
              aria-label='Join us on Telegram'
              fontSize='20px'
              icon={<FaTelegramPlane />}
            />
            <IconButton
              as={External}
              href='https://twitter.com/MoonBud_Coin'
              isExternal
              variant='ghost'
              colorScheme='cyan'
              bg='transparent'
              size='lg'
              aria-label='Follow us on Twitter!'
              fontSize='20px'
              icon={<FaTwitter />}
            />
            <IconButton
              as={External}
              href='https://medium.com/@moonbud_official'
              isExternal
              variant='ghost'
              colorScheme='gray'
              bg='transparent'
              size='lg'
              aria-label='Read the news on Medium'
              fontSize='20px'
              icon={<FaMediumM />}
            />
            <IconButton
              as={External}
              href='https://discord.gg/d6GY682b3M'
              isExternal
              variant='ghost'
              colorScheme='blue'
              bg='transparent'
              size='lg'
              aria-label='Meet MoonBuds on our official Discord server!'
              fontSize='20px'
              icon={<FaDiscord />}
            />
            <IconButton
              as={External}
              href='https://bscscan.com/token/0xbe8183612f145986a41ad8e8fcfefed1c2f9deba'
              isExternal
              variant='ghost'
              colorScheme='gray'
              bg='transparent'
              size='lg'
              aria-label='Find us on BscScan.com!'
              fontSize='20px'
              icon={<BSCLightIcon />}
            />
          </ButtonGroup>
        </VStack>
      </Stack>
    </Fragment>
  );
};

const MobileNavItem = ({ label, href, isNew }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={ChakraLink}
        to={href}
        href={href}
        smooth={true}
        duration={1000}
        justify={'start'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.800', 'offwhite.1')}>
          <span>
            <Badge
              display={isNew === true ? 'inline-flex' : 'none'}
              mr='1'
              mb='1'
              colorScheme='grey'>
              <Icon w={4} h={4} color='orange.400' as={GoFlame} />
            </Badge>
          </span>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

interface NavItem {
  label: string;
  href?: string;
  isNew: boolean;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Features',
    href: 'features',
    isNew: false,
  },
  {
    label: 'Tokenomics',
    href: 'tokenomics',
    isNew: false,
  },
  {
    label: 'How To Buy',
    href: 'howto',
    isNew: false,
  },
];
