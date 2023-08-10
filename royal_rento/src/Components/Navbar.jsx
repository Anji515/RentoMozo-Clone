import {Box,Flex,Text,Button,Stack,Image,Input,useColorModeValue,useBreakpointValue, FormControl, Select,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Center,
  VStack,
  IconButton,} from '@chakra-ui/react';
import { SearchIcon, ViewIcon, HamburgerIcon } from '@chakra-ui/icons';
import {Link as Goto, useNavigate, useSearchParams} from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { authState } from '../Context/AuthContext';


const getUrl=(url,search)=>{
   
  if(search){
      return (url=`${url}?q=${search}`)
  }
  return url;
}


export default function Navbar() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
    
    const {isAuth,dataInput,SetDataInput,setShowUser,handleLoading,user,userName} = useContext(authState)
    console.log('user',user)
    console.log('userName',userName)
    console.log('dataInput:', dataInput)

    const navigate = useNavigate();
       const [admin,setAdmin] = useState('login')
    const handleChange=(e)=>{
       if(e.target.value==='AsAdmin'){
        // console.log(e.target.value)
            setAdmin('As Admin');
            navigate('/loginadmin');
            setIsDrawerOpen(!isDrawerOpen);
         } else if(e.target.value==='AsUser'){
            setAdmin('As User');
            navigate('/loginuser');
            setIsDrawerOpen(!isDrawerOpen);
         }
    }

    const handleLogout=()=>{
      setShowUser(false);
      alert('Succfully Logout !')
      setIsDrawerOpen(!isDrawerOpen);
    }

    // Search Functionality
    let [searchParam,setSearchParam] = useSearchParams()
    const [searchQuery,setSearchQuery] =useState('')
    console.log('searchQuery:', searchQuery)

    const fetchdata = async(url)=>{
      try {
          handleLoading(true);
          const final = await fetch(url)
          let res = await final.json();
          SetDataInput(res);
          handleLoading(false)            
         } catch (error) {
          console.log('error:', error)
      }
  }

     useEffect(()=>{
      let apiUrl = getUrl(`https://royalrento.onrender.com/AllProducts`,
      searchQuery
    )
     fetchdata(apiUrl)
   },[searchQuery])

    const [s,setS] = useState('')
    console.log('s:', s)

    const handleInput=(e)=>{
        setS(e.target.value)
    }

    const handleSearch=()=>{
        setSearchQuery(s);
        navigate('/results')
        setS('')
    }


    useEffect(()=>{
        let objPar= {}
        if (searchQuery){
            objPar.q=searchQuery
        }
        setSearchParam(objPar);
    },[searchQuery])



    const Cities = ['Banglore','Hyderabad','Delhi','Mumbai','Pune','Noida','Gurgaon','Chennai','Ahmedabada','Jaipur','GhandiNagar','Kolkata','Mysore','Faridabad','Gaziabad']
  
    return (
      <>
      <Box position='sticky' top='0' bottom='0' zIndex={'1'} >
      <Flex 
        direction={['column','column','column','column','row']}
        rowGap={['10px','10px','10px']}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        justify='center'
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
      <Flex border='0px solid blue' gap='90px' flex={{ base: 1 }} align='center' justify={{ base: 'center', md: 'center' }}>
      <Center boxSize='sm' width='120px' border='0px solid red' justify='center' height='80px' textAlign={useBreakpointValue({ base: 'center', md: 'center' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            <Goto to='/' ><Image src='https://i.ibb.co/StxKCFC/fortunate-fog-6612.jpg' alt='Logo' /></Goto>
      </Center>
      <Box display={{ base: 'none', md: 'block' }}>
        <Text as='samp' marginLeft={'-20px'} bg='grey.400' color={'#dc3226'} borderRadius='18px' padding={'10px'} cursor='pointer' boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} marginRight={'30px'}  fontSize='2xl' ><Goto to='/'>ROYALRENTO</Goto></Text>
      </Box>
      <Box >
      <FormControl>
        <Flex>
          {/* <FormLabel width={'200px'}>Select City</FormLabel> */}
          <Select cursor='pointer'  placeholder='Select City'>
            {Cities.map((item)=>(<option>{item}</option>))}
             </Select>
        </Flex>
      </FormControl>
      </Box>
      <Center>
      <IconButton
        display={{ base: 'block', md: 'none' }}
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        justifyContent='center'
        fontSize='25px'
        alignItems='center'
        onClick={toggleDrawer}
        variant="ghost"
        colorScheme="teal"
        border='0px solid red'
        />
        </Center>
      </Flex>
      
      <Box display='flex'
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          gap='10px'
          marginRight ='15px'
          alignItems={'center'}
          >
        <Input variant='filled' value={s} onChange={handleInput} width={'300px'}  placeholder='Search' />
        <SearchIcon onClick={handleSearch} width={'25px'} color={'teal'}/>
      </Box>

      <Stack
          flex={{ base: 1, md: 0 }}
          border='0px solid red'
          display={{ base: 'none', md: 'flex' }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
        {user?<Button
            fontSize={'25px'}
            fontWeight={600}
            color={'green'}
            gap={'5px'}
            bg={'none'}
            // borderRadius={'50%'}
            href={'#'}
            // _hover={{
            //   bg: 'pink.300',
            // }}
            >
            <ViewIcon/> {userName}
          </Button>:<Button display={'none'}></Button> }

        {isAuth ? <Button><Goto to='/admin'>Hello Admin</Goto></Button>:<Select width={'110px'} fontSize={'sm'}
        textAlign='center'
        value={admin}
        fontWeight={400}
        bg={'blue.200'} onChange={handleChange} >
          <option value="login">Login</option>
          <option value="AsAdmin" > As Admin</option>
          <option value="AsUser">As User</option>
          </Select>}
          {user?<Button
            // display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            onClick={handleLogout}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Logout
          </Button>:
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
          }
          
          <Button background={'green.300'} color={'white'}><Goto to='/cart'>Cart</Goto></Button>
          <Button background={'grey'} color={'orange'}><Goto to='/wishlist'>Wish List</Goto></Button>
        </Stack>
      </Flex>
    </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={toggleDrawer}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" display='flex' alignContent='center' justifyContent={'center'} pt={10}>
            <Box mt='15px' display={{ base: 'block', md: 'none' }}>
              <Text as='samp' marginLeft={'-20px'} bg='grey.400' color={'#dc3226'} borderRadius='18px' padding={'10px'} cursor='pointer' boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} marginRight={'30px'}  fontSize='2xl' ><Goto to='/'>ROYALRENTO</Goto></Text>
            </Box>
            <Box boxSize="sm" width="120px" height="80px" textAlign="center">
              <Goto to="/">
                <Image src="https://i.ibb.co/StxKCFC/fortunate-fog-6612.jpg" alt="Logo" />
              </Goto>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            {/* Mobile navigation items */}
            <Stack
          border='0px solid red'
          display={{ base: 'flex', md: 'flex' }}
          flexDirection={{ base: 'column', md: 'flex' }}
          justify={'center'}
          alignItems='center'
          spacing={3}>
        {user?<Button
            width='110px'
            fontSize={'25px'}
            fontWeight={600}
            color={'green'}
            gap={'5px'}
            bg={'none'}
            href={'#'}
            >
            <ViewIcon/> {userName}
          </Button >:<Button display={'none'}></Button> }

        {isAuth ? <Button width='110px'><Goto to='/admin'>Hello Admin</Goto></Button>:<Select width={'110px'} fontSize={'sm'}
        textAlign='center'
        value={admin}
        fontWeight={400}
        bg={'blue.200'} onChange={handleChange} >
          <option value="login">Login</option>
          <option value="AsAdmin" > As Admin</option>
          <option value="AsUser">As User</option>
          </Select>}
          {user?<Button
            // display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            onClick={handleLogout}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            width='110px'
            _hover={{
              bg: 'pink.300',
            }}>
            Logout
          </Button>:
          <Button
          // display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'pink.400'}
          href={'#'}
          width='110px'
          _hover={{
            bg: 'pink.300',
          }}>
          <Goto to='/signup' >Sign Up</Goto>
        </Button>
          }
          
          <Button background={'green.300'} width='110px' color={'white'} onClick={()=>{setIsDrawerOpen(!isDrawerOpen)}}><Goto to='/cart'>Cart</Goto></Button>
          <Button background={'grey'} width='110px' color={'orange'} onClick={()=>{setIsDrawerOpen(!isDrawerOpen)}}><Goto to='/wishlist'>Wish List</Goto></Button>
        </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
    );
  }