import {
  useColorMode,
  IconButton,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Heading,
  Text,
  Switch,
  VStack,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaCog } from 'react-icons/fa';

export const DarkModeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <IconButton
        fontSize='20px'
        color={useColorModeValue('white', 'gray.200')}
        bg={useColorModeValue('orange.400', 'blue.800')}
        icon={<FaCog />}
        onClick={onOpen}
        aria-label='Toggle Dark Mode'
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('orange.600', 'blue.700'),
        }}
      />
      <Modal
        preserveScrollBarGap
        motionPreset='slideInBottom'
        isCentered
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent
                    roundedBottomRight={"34"}
          css={{
            backdropFilter: 'saturate(180%) blur(3px)',
            backgroundColor: useColorModeValue(
              'rgba(255, 255, 255, 0.5)',
              'rgba(103, 113, 137, 0.5)'
            ),
          }}
          mx={2}
          roundedTopLeft='48'>
          <ModalHeader
            roundedTopLeft='48'
            css={{
              backgroundColor: useColorModeValue(
                'rgba(255, 255, 255, 0.5)',
                'rgba(103, 113, 137, 0.5)'
              ),
            }}
            w='full'>
            <Heading
              bgGradient={useColorModeValue(
                'linear(to-tr, yellow.400,orange.500)',
                'linear(to-tr, purple.400,orange.500)'
              )}
              fontWeight={400}
              bgClip='text'>
              Settings
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
            <VStack justify='start' alignItems='start'>
              <HStack>
                <Switch
                  rounded='full'
                  size={'lg'}
                  colorScheme='orange'
                  onChange={toggleColorMode}
                  aria-label='Toggle Dark Mode'
                  defaultChecked={useColorModeValue(true, false)}
                />
                <Text>Toggle Theme</Text>
              </HStack>
            </VStack>
          </ModalBody>
          <ModalFooter
            opacity={0.7}
            bgGradient={useColorModeValue(
              'linear(to-tr, yellow.400,orange.500)',
              'linear(to-tr, purple.400,orange.500)'
            )}
            roundedBottomRight='48'
            justify='center'></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
