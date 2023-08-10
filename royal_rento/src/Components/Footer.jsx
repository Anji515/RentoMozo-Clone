import { Box, Container, Link, SimpleGrid, Stack, Heading, Image, Text, useColorModeValue, Flex, HStack, VStack, Button, Center } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaMobile, FaTwitter, FaYoutube, FaBold, FaBed, FaBiking, FaThumbtack } from 'react-icons/fa';
import {Link as Goto} from 'react-router-dom'
import ModalComp from './../AllPages/HomePage/Modal';

export default function Footer() {
  return (<div>
    <hr />
    <br />
    <Box borderRadius={'18px'}  boxShadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'>
    <Box textAlign={'left'} width={['20%','35%','50%','75%']} margin={'auto'} color='grey'>
      <br />
      <Heading fontSize={'16px'}>Choose RoyalRento For Massive Savings In Hyderabad</Heading>
      <br />
      <Center fontSize={'13px'}>
      Buying furniture, appliances, and electronics is expensive. RentoMojo makes it affordable for you to rent these essential everyday items in Hyderabad with our subscription-based monthly rental plans. For a small monthly fee, you can rent the best furniture, electronics, and appliances available in the market.
      <br />
      <br />
      We offer both short-term and long-term subscriptions, so you can choose a plan that best suits your needs. The longer you rent from us, the more money you will save! With every item you rent from us, you receive multiple added benefits like free relocation, free maintenance, and damage waiver.
      <br />
      <br />
      We provide fast, free delivery and installation in Hyderabad, including neighbourhoods like Miyapur, Chanda Nagar, Madhapur, Kukatpally, and Manikonda. Our team will deliver any rental item to your home and also install it for you. Ordering from us only takes 5 minutes with your laptop or smartphone.
      <br />
      <br />
      </Center>
      <Text _hover={{textDecoration:'underline' , cursor:'pointer'}}>Read More </Text>
    </Box>
    <Box
      bg={useColorModeValue('white.50', 'white.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr' , lg:"1fr 1fr 1fr 1fr 1fr" }}
          width={'100%'}
          spacing={15}>
          <Stack fontFamily={'ABScript'} align={'flex-start'}>
            <Heading fontSize='25px' color='#691c35'>ROYALRENTO</Heading>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Culture</Link>
            <Link href={'#'}>Investors</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Our Benefits</Link>
            <Link href={'#'}>Sitemap</Link>
          </Stack>
          <Stack fontFamily={'ABScript'} align={'flex-start'}>
            <Heading fontSize='25px' color='#691c35'>INFORMATION</Heading>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>FAQs</Link>
            <Link href={'#'}>Documents Required</Link>
          </Stack>
          <Stack fontFamily={'ABScript'} width={'200px'} align={'flex-start'}>
            <Heading fontSize='25px' color='#691c35'>POLICIES</Heading>
            <Link href={'#'}>Shipping Policy</Link>
            <Link href={'#'}>Cancellation & Return</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Rental Terms & Conditions</Link>
            <Link href={'#'}>Referral Terms & Conditions</Link>
          </Stack>
          <Stack fontFamily={'ABScript'} width={'155px'} align={'flex-start'}>
            <Heading fontSize='25px' color='#691c35'>NEED HELP ?</Heading>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
          <Stack >
              <Image height='150px' marginLeft={'-20px'} src='https://i.ibb.co/StxKCFC/fortunate-fog-6612.jpg' alt='logo'/>
              <ModalComp/>
              <Image width='200px' height={'45px'} src='https://www.davidsbridal.com/media/footer/download-app-store.png'/>
              <Image width='200px' height={'45px'} src='https://www.davidsbridal.com/media/footer/download-google-play.png'/>
          </Stack>
        </SimpleGrid>
      </Container>
      <br />
      <hr />
      <br />
      <Flex gap='25%' justifyContent='space-around' direction={['column','column','row','row','row']} >
            <Flex >
            <Text fontSize={'md'}>
              © 2023 Royal Rento. All rights reserved
            </Text>
            </Flex>

            <HStack spacing='26px'>
            <FaInstagram size={'25px'}/>
            {/* <FaMobile size={'25px'} />
            <FaBed size={'25px'}/>
            <FaBiking size={'25px'}/>
            <FaThumbtack size={'25px'}/> */}
            
            <FaTwitter size={'25px'} />
            <FaGithub size={'25px'} />
            <FaYoutube size={'25px'} />
            <FaLinkedinIn size={'25px'} />
            </HStack>
       </Flex>
       <br />
    </Box>
    </Box>
    {/* <br /> */}
</div>
  );
}

