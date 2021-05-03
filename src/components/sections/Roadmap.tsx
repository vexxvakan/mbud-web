import React, { useEffect } from 'react';

import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  useColorMode,
  List,
  ListIcon,
  ListItem,
  Icon,
} from '@chakra-ui/react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {
  IoHeart,
  IoRocket,
  IoDocumentLock,
  IoImages,
  IoCheckmarkCircle,
  IoPeople,
  IoBarChart,
} from 'react-icons/io5';
import { FaTrophy, FaUsers, FaVoteYea } from 'react-icons/fa';
import { GoChecklist, GoLaw } from 'react-icons/go';

export default function Roadmap() {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div id='roadmap'>
      <Flex
        id=''
        justifyContent='center'
        alignItems='center'
        direction='column'
        px={4}
        pt={{ base: 16, md: 24 }}
        mx='auto'
        pos='relative'
        bg={useColorModeValue('offwhite.1', 'purple.900')}>
        <motion.div
          ref={ref}
          animate={controls}
          initial='hidden'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -200, opacity: 0 },
          }}>
          <Heading
            mt={{base: 6, lg: 0}}
            color="offwhite"
            textAlign='center'
            fontWeight={400}
            fontSize={{ base: '6xl', lg: '120' }}
            mb={{ base: 4, lg: 8 }}
            px='3'>
            Roadmap
          </Heading>
        </motion.div>

        <Box px={{base: 5, lg: 20}} w="full" overflow="hidden">
        {colorMode === 'light' ? (
          <VerticalTimeline>
              <VerticalTimelineElement
                contentArrowStyle={{
                  borderRight: '7px solid  var(--chakra-colors-orange-400)',
                }}
                contentStyle={{
                  background: 'var(--chakra-colors-white)',
                  color: 'var(--chakra-colors-gray-800)',
                  padding: "0 10 0 10"
                }}
                iconStyle={{
                  background:
                    'linear-gradient(to top right, var(--chakra-colors-orange-200), var(--chakra-colors-orange-500))',
                  color: '#fff',
                }}
                icon={<IoRocket />}>
                <Heading
                  bgGradient='linear(to-r, orange.400, orange.500)'
                  bgClip='text'
                  textAlign='center'
                  fontWeight={400}
                  fontSize='4xl'>
                  Q2 2021
                </Heading>
                <List mt='4' fontSize={{ base: 14, lg: 16 }} spacing={5}>
                  <ListItem>
                    <ListIcon w='6' h='auto' color='gray.800' as={IoRocket} />
                    Presale and Token Launch{' '}
                    <Icon
                      w='auto'
                      h='auto'
                      color='green.500'
                      as={IoCheckmarkCircle}
                    />
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={IoDocumentLock}
                      w='6'
                      h='auto'
                      color='gray.800'
                    />
                    Passed audit by Solidity{' '}
                    <Icon
                      w='auto'
                      h='auto'
                      color='green.500'
                      as={IoCheckmarkCircle}
                    />
                  </ListItem>
                  <ListItem>
                    <ListIcon as={IoHeart} w='6' h='auto' color='gray.800' />
                    First six-figures Donation
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={GoChecklist}
                      w='6'
                      h='auto'
                      color='gray.800'
                    />
                    CoinGecko Listing
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={GoChecklist}
                      w='6'
                      h='auto'
                      color='gray.800'
                    />
                    CoinMarketCap Listing
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaTrophy} w='6' h='auto' color='gray.800' />
                    NFT Contests
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaVoteYea} w='6' h='auto' color='gray.800' />
                    Governance dApp Launch
                  </ListItem>
                </List>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentArrowStyle={{
                  borderRight: '7px solid  var(--chakra-colors-orange-400)',
                }}
                contentStyle={{
                  background: 'var(--chakra-colors-white)',
                  color: 'var(--chakra-colors-gray-800)',
                  padding: "0 10 0 10"
                }}
                iconStyle={{
                  background:
                    'linear-gradient(to top right, var(--chakra-colors-orange-200), var(--chakra-colors-orange-500))',
                  color: '#fff',
                }}
                icon={<IoRocket />}>
                <Heading
                  bgGradient='linear(to-r, orange.400, orange.500)'
                  bgClip='text'
                  textAlign='center'
                  fontWeight={400}
                  fontSize='4xl'>
                  Q3 2021
                </Heading>
                <List mt='4' fontSize={{ base: 14, lg: 16 }} spacing={5}>
                  <ListItem>
                    <ListIcon w='6' h='auto' color='gray.800' as={IoPeople} />
                    Marketing Phase 2{' '}
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={IoDocumentLock}
                      w='6'
                      h='auto'
                      color='gray.800'
                    />
                    Online Flash Mobs
                  </ListItem>
                  <ListItem>
                    <ListIcon as={IoImages} w='6' h='auto' color='gray.800' />
                    NFT Ecosystem
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={IoBarChart}
                      w='6'
                      h='auto'
                      color='gray.800'
                    />
                    First Exchange Listings
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaUsers}
                      w='6'
                      h='auto'
                      color='gray.800'
                    />
                    Marketing Phase 3
                  </ListItem>
                </List>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentArrowStyle={{
                  borderRight: '7px solid  var(--chakra-colors-orange-400)',
                }}
                contentStyle={{
                  background: 'var(--chakra-colors-white)',
                  color: 'var(--chakra-colors-gray-800)',
                  padding: "0 10 0 10"
                }}
                iconStyle={{
                  background:
                    'linear-gradient(to top right, var(--chakra-colors-orange-200), var(--chakra-colors-orange-500))',
                  color: '#fff',
                }}
                icon={<IoRocket />}>
                <Heading
                  bgGradient='linear(to-r, orange.400, orange.500)'
                  bgClip='text'
                  textAlign='center'
                  fontWeight={400}
                  fontSize='4xl'>
                  Beyond Q3 2021
                </Heading>
                <List mt='4' fontSize={{ base: 14, lg: 16 }} spacing={5}>
                  <ListItem>
                    <ListIcon w='6' h='auto' color='gray.800' as={IoRocket} />
                    More Exchange Listings
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={IoDocumentLock}
                      w='6'
                      h='auto'
                      color='gray.800'
                    />
                    Staking Functionality
                  </ListItem>
                  <ListItem>
                    <ListIcon as={IoHeart} w='6' h='auto' color='gray.800' />
                    Direct Charity Integrations
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={GoLaw}
                      w='6'
                      h='auto'
                      color='gray.800'
                    />
                    Full Community Governance
                  </ListItem>
                </List>
              </VerticalTimelineElement>
            </VerticalTimeline>
            ) : (
            <VerticalTimeline>
              <VerticalTimelineElement
                contentArrowStyle={{
                  borderRight: '7px solid  var(--chakra-colors-orange-400)',
                }}
                contentStyle={{
                  background: 'var(--chakra-colors-blue-800)',
                  color: 'var(--chakra-colors-offwhite-1)',
                }}
                iconStyle={{
                  background:
                    'linear-gradient(to top right, var(--chakra-colors-purple-500), var(--chakra-colors-orange-500))',
                  color: '#fff',
                }}
                icon={<IoRocket />}>
                <Heading
                  bgGradient='linear(to-r, purple.400, orange.500)'
                  bgClip='text'
                  textAlign='center'
                  fontWeight={400}
                  fontSize='4xl'>
                  Q2 2021
                </Heading>
                <List mt='4' fontSize={{ base: 14, lg: 16 }} spacing={5}>
                  <ListItem>
                    <ListIcon w='6' h='auto' color='offwhite.1' as={IoRocket} />
                    Presale and Token Launch{' '}
                    <Icon
                      w='auto'
                      h='auto'
                      color='green.300'
                      as={IoCheckmarkCircle}
                    />
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={IoDocumentLock}
                      w='6'
                      h='auto'
                      color='offwhite.1'
                    />
                    Passed audit by Solidity{' '}
                    <Icon
                      w='auto'
                      h='auto'
                      color='green.300'
                      as={IoCheckmarkCircle}
                    />
                  </ListItem>
                  <ListItem>
                    <ListIcon as={IoHeart} w='6' h='auto' color='offwhite.1' />
                    First six-figures Donation
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={GoChecklist}
                      w='6'
                      h='auto'
                      color='offwhite.1'
                    />
                    CoinGecko Listing
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={GoChecklist}
                      w='6'
                      h='auto'
                      color='offwhite.1'
                    />
                    CoinMarketCap Listing
                  </ListItem>
                  <ListItem>
                    <ListIcon as={IoImages} w='6' h='auto' color='offwhite.1' />
                    NFT Contests
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaVoteYea}
                      w='6'
                      h='auto'
                      color='offwhite.1'
                    />
                    Governance dApp Launch
                  </ListItem>
                </List>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentArrowStyle={{
                  borderRight: '7px solid  var(--chakra-colors-orange-400)',
                }}
                contentStyle={{
                  background: 'var(--chakra-colors-blue-800)',
                  color: 'var(--chakra-colors-offwhite-1)',
                }}
                iconStyle={{
                  background:
                    'linear-gradient(to top right, var(--chakra-colors-purple-500), var(--chakra-colors-orange-500))',
                  color: '#fff',
                }}
                icon={<IoRocket />}>
                <Heading
                  bgGradient='linear(to-r, purple.400, orange.500)'
                  bgClip='text'
                  textAlign='center'
                  fontWeight={400}
                  fontSize='4xl'>
                  Q3 2021
                </Heading>
                <List mt='4' fontSize={{ base: 14, lg: 16 }} spacing={5}>
                <ListItem>
                    <ListIcon w='6' h='auto' color='offwhite.1' as={IoPeople} />
                    Marketing Phase 2{' '}
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={IoDocumentLock}
                      w='6'
                      h='auto'
                      color='offwhite.1'
                    />
                    Online Flash Mobs
                  </ListItem>
                  <ListItem>
                    <ListIcon as={IoImages} w='6' h='auto' color='offwhite.1' />
                    NFT Ecosystem
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={IoBarChart}
                      w='6'
                      h='auto'
                      color='offwhite.1'
                    />
                    First Exchange Listings
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaUsers}
                      w='6'
                      h='auto'
                      color='offwhite.1'
                    />
                    Marketing Phase 3
                  </ListItem>
                </List>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentArrowStyle={{
                  borderRight: '7px solid  var(--chakra-colors-orange-400)',
                }}
                contentStyle={{
                  background: 'var(--chakra-colors-blue-800)',
                  color: 'var(--chakra-colors-offwhite-1)',
                }}
                iconStyle={{
                  background:
                    'linear-gradient(to top right, var(--chakra-colors-purple-500), var(--chakra-colors-orange-500))',
                  color: '#fff',
                }}
                icon={<IoRocket />}>
                <Heading
                  bgGradient='linear(to-r, purple.400, orange.500)'
                  bgClip='text'
                  textAlign='center'
                  fontWeight={400}
                  fontSize='4xl'>
                  Beyond Q3 2021
                </Heading>
                <List mt='4' fontSize={{ base: 14, lg: 16 }} spacing={5}>
                  <ListItem>
                    <ListIcon w='6' h='auto' color='offwhite.1' as={IoRocket} />
                    Presale and Token Launch{' '}
                    <Icon
                      w='auto'
                      h='auto'
                      color='green.300'
                      as={IoCheckmarkCircle}
                    />
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={IoDocumentLock}
                      w='6'
                      h='auto'
                      color='offwhite.1'
                    />
                    Passed audit by Solidity{' '}
                    <Icon
                      w='auto'
                      h='auto'
                      color='green.300'
                      as={IoCheckmarkCircle}
                    />
                  </ListItem>
                  <ListItem>
                    <ListIcon as={IoHeart} w='6' h='auto' color='offwhite.1' />
                    First six-figures Donation
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={GoChecklist}
                      w='6'
                      h='auto'
                      color='offwhite.1'
                    />
                    CoinGecko Listing
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={GoChecklist}
                      w='6'
                      h='auto'
                      color='offwhite.1'
                    />
                    CoinMarketCap Listing
                  </ListItem>
                  <ListItem>
                    <ListIcon as={IoImages} w='6' h='auto' color='offwhite.1' />
                    NFT Contests
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaVoteYea}
                      w='6'
                      h='auto'
                      color='offwhite.1'
                    />
                    Governance dApp Launch
                  </ListItem>
                </List>
              </VerticalTimelineElement>
              </VerticalTimeline>
            )}
        </Box>
      </Flex>
    </div>
  );
}
