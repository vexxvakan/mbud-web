import { useColorModeValue, Icon, Heading, HStack } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <HStack>
      <Icon
        h='full'
        w={12}
        viewBox='0 0 28 28'
        color={useColorModeValue('orange.400', 'purple.600')}
        xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <path id="a" d="M222 68A406 406 0 0065 610c38 27 81 49 130 63 172 51 346-11 416-139l-3-2c-36-23-52-63-35-90 13-20 41-26 70-18 9-145-104-289-275-339-49-15-99-20-146-17"/>
  </defs>
  <path d="M420 237s-74 10-101 9c-26-2-32-3-63 40s-72 73-148 88-41 55-29 61c0 0-5 65 47 81 0 0-3 34 46 34s94-6 112 3c0 0-12 19-6 62 0 0-25 6-56 130-6 24 512 6 481-70-17-42-34-100-44-181-31-227-171-254-239-257z" clip-path="url(#b)" fill="none" stroke="#864f9a" stroke-width="19.8" stroke-miterlimit="10"/>
  <path d="M172 550c49 0 94-6 112 3 0 0 32 0 72 10M274 483c-60 58-148 33-148 33-52-16-47-81-47-81-12-6-48-46 29-61s117-44 148-88 37-42 63-40c27 1 101-9 101-9" clip-path="url(#b)" fill="none" stroke="#864f9a" stroke-width="19.8" stroke-miterlimit="10"/>
  <path d="M288 318s-25 4-14 29 50 0 50 0 12-18-36-29z" clip-path="url(#b)" fill="#864f9a" stroke="#864f9a" stroke-miterlimit="10"/>
  <path d="M492 352s-104 107-96 200 92 76 108 39 44-69 39-96c-4-27-3-49 5-75 8-27 16-37 16-37" clip-path="url(#b)" fill="none" stroke="#864f9a" stroke-width="19.8" stroke-miterlimit="10"/>
  <path d="M108 374c-77 15-41 55-29 61 0 0 16 9 29-3 14-12 50-68 0-58z" clip-path="url(#b)" fill="#864f9a" stroke="#864f9a" stroke-miterlimit="10"/>
  <path d="M260 468s30 18 30 37" clip-path="url(#b)" fill="none" stroke="#864f9a" stroke-width="19.8" stroke-miterlimit="10"/>
  <circle cx="168.1" cy="410" r="4" clip-path="url(#b)" fill="#864f9a" stroke="#864f9a" stroke-miterlimit="10"/>
  <circle cx="185.3" cy="400.5" r="2.5" clip-path="url(#b)" fill="#864f9a" stroke="#864f9a" stroke-miterlimit="10"/>
  <circle cx="163.8" cy="395.3" r="2.7" clip-path="url(#b)" fill="#864f9a" stroke="#864f9a" stroke-miterlimit="10"/>
  <circle cx="147.1" cy="417" r="1.9" clip-path="url(#b)" fill="#864f9a" stroke="#864f9a" stroke-miterlimit="10"/>
  <circle cx="197.4" cy="418.1" r="3.1" clip-path="url(#b)" fill="#864f9a" stroke="#864f9a" stroke-miterlimit="10"/>
  <g>
    <path d="M222 68c-32 18-61 41-87 67 127 3 294 68 438 307 13-20 41-26 70-18 9-145-104-289-275-339-49-15-99-20-146-17" fill="#79458e"/>
  </g>
  <g stroke-width="19.8" stroke-miterlimit="10">
    <path d="M65 610c38 27 81 49 130 63 172 51 346-11 416-139" fill="none" stroke="#010202"/>
    <path d="M643 424c9-145-104-289-275-339-49-15-99-20-146-17h0" fill="#79458e" stroke="#010202"/>
    <ellipse transform="rotate(-57 639 484)" cx="639" cy="484.4" rx="56.8" ry="77.9" fill="none" stroke="#864f9a"/>
    <circle cx="423.6" cy="420.1" r="405.8" fill="none" stroke="#010202"/>
  </g>
      </Icon>
      <Heading fontSize={{base: "2xl", lg: "4xl"}} letterSpacing="wider" color={useColorModeValue('orange.400', 'offwhite.1')}>
        MoonBud
      </Heading>
    </HStack>
  );
};