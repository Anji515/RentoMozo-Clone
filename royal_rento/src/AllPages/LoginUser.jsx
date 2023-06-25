import {Flex,Box,FormControl,FormLabel,Input,Checkbox,Stack,Link,Button,Heading,Text,useColorModeValue} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import {Link as Goto} from 'react-router-dom'
import { authState } from '../Context/AuthContext';
import { useContext } from 'react';
  
  export default function LoginUser() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {setUser,setShowUser}=useContext(authState);

    const handleLogin=async()=>{
      // console.log(obj)
      axios.get(`https://expenses-app-tsr1.onrender.com/users?email=${email}&password=${password}`)
        .then((res)=>{
      if (res.data.length > 0) {
        setUser(res.data[0].firstName)
        alert('Login SuccessFull')
        setShowUser(true)
      } else {
        alert('Wrong credentials !')
      }}
        )
    
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            If you don't have account please <Link color={'blue.400'}><Goto to='/signup'>Sign Up✌️ </Goto></Link> 
          </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={handleLogin}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }