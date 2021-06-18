import { useColorModeValue, Icon, Heading, HStack } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <HStack _hover={{
      cursor: 'pointer',
    }}>
      <Icon
        h='full'
        w={12}
        viewBox='0 0 841.9 841.9'
        color={useColorModeValue('orange.400', 'purple.600')}
        xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <clipPath id='a' transform='translate(-8 -4)'>
            <path
              fill='red'
              stroke='red'
              strokeMiterlimit='10'
              d='M222 68h0A406 406 0 0018 420a404 404 0 0047 190 427 427 0 00130 63c172 51 346-11 416-139l-3-2c-36-23-52-63-35-90 13-20 41-26 70-18 9-145-104-289-275-339a427 427 0 00-146-17h0'
            />
          </clipPath>
        </defs>
        <circle
          cx='415.7'
          cy='415.7'
          r='405.8'
          fill='currentcolor'
          stroke='#000'
          strokeMiterlimit='10'
          strokeWidth='19.8'
        />
        <path
          fill='#283C3E'
          stroke='currentcolor'
          strokeMiterlimit='10'
          strokeWidth='19.8'
          d='M214 63h0A406 406 0 0010 416a404 404 0 0047 190 427 427 0 00130 63c172 51 346-11 417-139l-4-2c-36-23-51-64-35-90 13-20 41-27 70-18h0c9-145-104-289-275-340a427 427 0 00-146-17h0'
        />
        <g stroke='currentcolor' strokeMiterlimit='10' data-name='Hund'>
          <g clipPath='url(#a)'>
            <path
              fill='#fff'
              strokeWidth='19.8'
              d='M412 233s-74 10-101 8-32-3-63 41-72 73-148 88-41 54-29 60c0 0-5 65 48 82 0 0-4 33 45 34s94-7 112 2c0 0-12 19-6 63 0 0-25 6-56 130-6 23 512 6 481-71-17-42-34-100-44-180-30-228-170-255-239-257z'
            />
            <path
              fill='none'
              strokeWidth='19.8'
              d='M164 546c49 0 94-7 112 2 0 0 32 0 72 11'
            />
            <path
              fill='#fff'
              strokeWidth='19.8'
              d='M266 479c-60 57-147 33-147 33-53-17-48-82-48-82-12-6-48-46 29-60s117-44 148-88 37-42 63-41 101-8 101-8'
            />
            <path
              fill='currentcolor'
              d='M280 313s-25 4-14 30 50 0 50 0 12-18-36-30z'
            />
            <path
              fill='#fff'
              strokeWidth='19.8'
              d='M485 348s-104 107-97 200 92 76 109 39 43-70 38-97-3-48 5-75 17-37 17-37'
            />
            <path
              fill='currentcolor'
              d='M100 370c-77 14-41 54-29 60 0 0 16 10 29-2 14-12 50-68 0-58z'
            />
            <path fill='none' strokeWidth='19.8' d='M252 464s31 18 30 36' />
            <circle cx='160.2' cy='405.6' r='4' fill='currentcolor' />
            <circle cx='177.4' cy='396.1' r='2.5' fill='currentcolor' />
            <circle cx='155.9' cy='390.9' r='2.7' fill='currentcolor' />
            <circle cx='139.2' cy='412.6' r='1.9' fill='currentcolor' />
            <circle cx='189.5' cy='413.6' r='3.1' fill='currentcolor' />
          </g>
          <path
            fill='none'
            d='M214 63h0A406 406 0 0010 416a404 404 0 0047 190 427 427 0 00130 63c172 51 346-11 417-139l-4-2c-36-23-51-64-35-90 13-20 41-27 70-18 9-145-104-289-275-340a427 427 0 00-146-17h0'
          />
        </g>
        <path
          fill='#3C595D'
          d='M214 63a407 407 0 00-87 67c127 3 295 68 439 308 12-20 41-27 69-18 9-145-104-289-275-340a427 427 0 00-146-17'
        />
        <g
          fill='none'
          strokeMiterlimit='10'
          strokeWidth='19.8'
          data-name='Helm'>
          <path
            stroke='#000'
            d='M57 606a427 427 0 00130 63c172 51 346-11 417-139m31-110c9-145-104-289-275-340a427 427 0 00-146-17h0'
          />
          <ellipse
            cx='639'
            cy='484.4'
            stroke='black'
            rx='56.8'
            ry='78'
            transform='rotate(-57 631 489)'
          />
          <circle cx='415.7' cy='415.7' r='405.8' stroke='black' />
        </g>
      </Icon>
      <Heading
        fontSize={{ base: '2xl', lg: '4xl' }}
        letterSpacing='wider'
        color={useColorModeValue('orange.400', 'offwhite.1')}>
        MoonBud
      </Heading>
    </HStack>
  );
};
