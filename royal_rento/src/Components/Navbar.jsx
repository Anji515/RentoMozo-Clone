import {Box,Flex,Text,Button,Stack,Image,Input,Link,useColorModeValue,useBreakpointValue, FormControl, FormLabel, Select} from '@chakra-ui/react';

import { SearchIcon,CalendarIcon} from '@chakra-ui/icons';
import {Link as Goto} from 'react-router-dom'
// import { authState } from '../Contexts/AuthContext';
// import { useContext } from 'react';
import { FaBold } from 'react-icons/fa';

  export default function Navbar() {

    // const {isAuth} = useContext(authState);

    const Cities = ['Banglore','Hyderabad','Delhi','Mumbai','Pune','Noida','Gurgaon','Chennai','Ahmedabada','Jaipur','GhandiNagar','Kolkata','Mysore','Faridabad','Gaziabad']
  
    return (
      <>
      <Box position='sticky' top='0' bottom='0' zIndex={'1'} >
      <Flex 
        direction={['column','column','column','column','row']}
        rowGap={['10px','10px','10px']}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
      <Box boxSize='sm' width='120px' height='80px' textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            <Goto to='/' ><Image src='https://i.ibb.co/StxKCFC/fortunate-fog-6612.jpg' alt='Logo' /></Goto>
      </Box>
      <Box marginTop={'20px'}>
        <Text as='samp' marginLeft={'-20px'} bg='grey.400' color={'#dc3226'} borderRadius='18px' padding={'10px'} cursor='pointer' boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} marginRight={'30px'}  fontSize='2xl' ><Goto to='/'>ROYALRENTO</Goto></Text>
      </Box>
      <Box marginTop={'20px'}>
      <FormControl>
        <Flex>
          {/* <FormLabel width={'200px'}>Select City</FormLabel> */}
          <Select cursor='pointer' placeholder='Select City'>
            {Cities.map((item)=>(<option>{item}</option>))}
             </Select>
        </Flex>
      </FormControl>
      </Box>
      {/* border={'1px solid red'} */}
      <Stack  marginTop={'25px'} fontSize='19px' fontWeight='490' marginLeft={'20px'}
          direction={'row'}
          spacing={6} >
      {/* <Text><Goto to='/products'>Products</Goto></Text>
      <Text>Planning</Text>
      <Text><CalendarIcon/><Goto to='/appointment'>BookAppointment</Goto> </Text>
      <Text>Hot Deals</Text>
      <Text>About</Text>   */}
      </Stack>
      </Flex>
      
      <Box display='flex'
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          gap='10px'
          marginRight ='15px'
          alignItems={'center'}
          >
        <Input variant='outline' width={['125px','250px','350px','450px','550px']} placeholder='Search' />
        <SearchIcon width={'25px'} color={'teal'}/>
      </Box>

      <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {
        //     <Button
        //     as={'a'}
        //     fontSize={'sm'}
        //     fontWeight={400}
        //     bg={'blue.200'}
        //     paddingLeft='20px'
        //     paddingRight='20px'>
        //   <Goto to='/admin' >Hello Admin</Goto>
        //     </Button> :
            <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            bg={'blue.200'}
            paddingLeft='20px'
            paddingRight='20px'>
          <Goto to='/login' >Sign In</Goto>
          </Button>}
          <Button
            // display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            <Goto to='/signup' >Sign Up</Goto>
          </Button>
          <Button background={'green.300'} color={'white'}><Goto to='/cart'>Cart</Goto></Button>
          <Button background={'grey'} color={'orange'}><Goto to='/wishlist'>Wish List</Goto></Button>
        </Stack>
      </Flex>
    </Box>
    </>
    );
  }