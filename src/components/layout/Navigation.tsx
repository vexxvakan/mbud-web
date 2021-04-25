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
} from '@chakra-ui/react';

import {Link} from 'react-scroll'

const ChakraLink = chakra(Link)

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaRedditAlien, FaTelegramPlane } from 'react-icons/fa';
import BSCLightIcon from '../icons/BscLight';
import PancakeIcon from '../icons/PancakeIcon';

import { Logo } from '../Logo';
import { DarkModeSwitch } from '../ui/DarkModeSwitch';

import React, { Fragment } from 'react';


export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w='full'>
      <Flex
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
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }}>
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
          <Logo />
        </Flex>
        <Flex
          flex={{ base: 0, md: 'auto' }}
          justify={{ base: 'center', md: 'space-between' }}>
          <Flex
            align='center'
            h={'full'}
            display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>
          <Flex
            align='flex-end'
            justify={'flex-end'}
            direction={'row'}
            spacing={2}>
            <DarkModeSwitch />
          </Flex>
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
          variant="ghost"
          colorScheme="orange"
          color={useColorModeValue('orange.500', 'gray.200')}>
          {navItem.label}
        </Button>
      ))}
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
            display={{ base: 'block', md: 'none' }}
            size='lg'
            px={3}
            textAlign='center'
            fontWeight={900}
            color={'white'}
            fontSize={'1xl'}
            textDecoration={'none'}
            bgGradient='linear(to-r, orange.500,yellow.500)'
            href={'#'}
            leftIcon={<PancakeIcon />}
            _hover={{
              bgGradient: 'linear(to-r, orange.400,yellow.400)',
              textDecoration: 'none',
            }}>
            <Center>Buy MoonBuds</Center>
          </Button>
          <IconButton
            variant={useColorModeValue('solid', 'outline')}
            size='lg'
            colorScheme='orange'
            aria-label='Visit /r/moonbudcoin'
            fontSize='20px'
            icon={<FaRedditAlien />}
          />
          <IconButton
            variant={useColorModeValue('solid', 'outline')}
            colorScheme='telegram'
            size='lg'
            aria-label='Visit @moonbudcoin on Twitter'
            fontSize='20px'
            icon={<FaTelegramPlane />}
          />
          <IconButton
            variant={useColorModeValue('solid', 'outline')}
            colorScheme='green'
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

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={ChakraLink}
        to={href}
        smooth={true}
        duration={1000}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Features',
    href: 'features',
  },
  {
    label: 'Tokenomics',
    href: 'tokenomics',
  },
  {
    label: 'How To Buy',
    href: 'howto',
  },
];
