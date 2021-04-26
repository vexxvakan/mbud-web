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
  Center,
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
} from '@chakra-ui/react';

import { Link } from 'react-scroll';

const ChakraLink = chakra(Link);

import { FaRedditAlien, FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineDashboard } from 'react-icons/ai';
import { GoFlame } from 'react-icons/go';
import BSCLightIcon from '../icons/BscLight';
import PancakeIcon from '../icons/PancakeIcon';

import { Logo } from '../Logo';
import { DarkModeSwitch } from '../ui/DarkModeSwitch';

import React, { Fragment } from 'react';

import { Squash as Hamburger } from 'hamburger-react';

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
        borderColor={useColorModeValue('orange.400', 'orange.300')}
        align={'center'}
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: useColorModeValue(
            'rgba(255, 255, 255, 0.5)',
            'rgba(40, 60, 62, 0.26)'
          ),
        }}>
        <Flex flex={{ base: 1, md: '0' }} ml={{ base: -2 }}>
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={
              isOpen ? (
                <Hamburger toggled={isOpen} />
              ) : (
                <Hamburger toggled={isOpen} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
          <Logo />
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
        <Flex>
          {' '}
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
            <Button
              display={{ base: 'none', lg: 'inline-flex' }}
              leftIcon={<AiOutlineDashboard />}
              variant='outline'
              aria-label='Open MBUD Dashboard'
              colorScheme={useColorModeValue('orange', 'purple')}
              mr={3}>
              Dashboard
            </Button>
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
                A toolkit full of features to make your bud life easier.
                Arriving soon.
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <DarkModeSwitch />
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
    <Stack as='nav' direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Button
          as={ChakraLink}
          to={navItem.href}
          smooth={true}
          duration={500}
          key={navItem.label}
          variant='ghost'
          colorScheme='orange'
          color={useColorModeValue('orange.500', 'gray.200')}>
          {navItem.label}
        </Button>
      ))}
      <Button
        as={External}
        display={{ base: 'none', lg: 'inline-flex' }}
        leftIcon={<GoFlame />}
        variant='ghost'
        _hover={{
          textDecoration: 'none',
        }}
        href='https://solidity.finance/audits/Moonbud/'
        aria-label='Check our Audit!'
        colorScheme={useColorModeValue('red', 'red')}>
        Audit
      </Button>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Fragment>
      <Stack
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
              Audit
            </Text>
          </Flex>
        </Stack>
      </Stack>
      <Stack
        roundedBottom='32'
        shadow={'md'}
        mb={2}
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
        <ButtonGroup variant='outline' spacing='2'>
          <Button
            as={'a'}
            display={{ base: 'inline-flex', md: 'none' }}
            size='lg'
            px={3}
            fontWeight={900}
            color={'white'}
            fontSize={'1xl'}
            textDecoration={'none'}
            bgGradient='linear(to-r, orange.500,yellow.500)'
            href='https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0xbe8183612f145986a41ad8e8fcfefed1c2f9deba'
            leftIcon={<PancakeIcon />}
            _hover={{
              bgGradient: 'linear(to-r, orange.400,yellow.400)',
              textDecoration: 'none',
            }}>
            <Center>Buy MoonBuds</Center>
          </Button>
          <IconButton
            variant='ghost'
            size='lg'
            colorScheme='orange'
            aria-label='Visit /r/moonbudcoin'
            fontSize='20px'
            icon={<FaRedditAlien />}
          />
          <IconButton
            variant='ghost'
            colorScheme='telegram'
            size='lg'
            aria-label='Visit @moonbudcoin on Twitter'
            fontSize='20px'
            icon={<FaTelegramPlane />}
          />
          <IconButton
            variant='ghost'
            colorScheme='gray'
            bg='transparent'
            size='lg'
            aria-label='Find on BSCScan.com!'
            fontSize='20px'
            icon={<BSCLightIcon />}
          />
        </ButtonGroup>
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
