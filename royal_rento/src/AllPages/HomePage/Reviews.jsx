import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'9xl'} py={16} as={Stack} spacing={8}>
        <Stack spacing={0} align={'center'}>
          <Heading>Over 1.5lac 
            <br />
            happy subscribers</Heading>
            <br />
          <Text color={'teal'} textDecoration='underline'>Here's we have some RoyalRento experiences.</Text>
        </Stack>
        <Stack
          direction={['column','column','column','row','row']}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
              When I moved to Bangalore from Chennai, I went to multiple websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late for work :D
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://www.rentomojo.com/public/images/testimonials/navin-kumar.jpg'
              }
              name={'Navin Kumar'}
              title={'Standup Comedian'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText >
              Marriage comes with a lot of unavoidable expenses in India and spending a big chunk of your savings on furniture and white goods could be a big challenge. RentoMojo not just took away all our worries but in fact went to the extent of spoiling us. Where I could have owned just some bare essentials after making a huge hole in my pocket or paid unnecessary EMIs, I could smartly own a lot of stuff which would have come much later on my list. Heartfelt thanks to  the whole Rentomojo team for making our renting experience completely hassle-free. It has been two great years and I am sure there are many more to come.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://www.rentomojo.com/public/images/testimonials/kushal-tiwari.jpg'
              }
              name={'Kushal Tiwari'}
            //   title={'CEO at ABC Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              {/* <TestimonialHeading>Anjali Sharma</TestimonialHeading> */}
              <TestimonialText>
              I got to know about RentoMojo through a friend and looked up for AC on their website and finally rented one. The delivery guys installed the AC in 2 days.With a such a low deposit and rent, I didn't have to spend a whole lot for my comfort. Thank you RentoMojo,for being easy breezy on my pocket.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar 
              src={
                'https://www.rentomojo.com/public/images/testimonials/anjali-sharma.jpg'
              }
              name={'Anjali Sharma'}
            //   title={'CEO at ABC Corporation'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}