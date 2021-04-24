import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react';
import { GiMoonOrbit, GiSun } from 'react-icons/gi';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
    fontSize="26px"
      color={useColorModeValue('white', 'gray.200')}
      bg={useColorModeValue('orange.400', 'blue.800')}
      icon={colorMode === 'dark' ? <GiMoonOrbit /> : <GiSun />}
      onClick={toggleColorMode}
      aria-label='Toggle Dark Mode'
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('orange.600', 'blue.700'),
      }}
    />
  );
};
