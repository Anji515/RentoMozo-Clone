import {Flex,FormControl,FormLabel,Input,Checkbox,Stack,Link,Button,Heading,Image} from '@chakra-ui/react';
import { useContext } from 'react';
import { useRef } from 'react';
import { Navigate } from "react-router-dom";
import { authState } from '../Context/AuthContext';


export default function LoginAdmin() {
  const {isAuth,handleToken,loginUser}=useContext(authState);
  const refVal = useRef({'email':'','password':''})

  const hanldeChange=(e)=>{
  refVal.current[e.target.type] = e.target.value;
}

const handleSubmit=(e)=>{
   e.preventDefault();
   fetchUser(refVal.current);
}

  const fetchUser= async(obj)=>{
      try {
        let res = await fetch(`https://reqres.in/api/login`,{
          method:'POST',
          body:JSON.stringify(obj),
          headers:{
            'Content-Type' : 'application/json'
          }
        });
        let data = await res.json();
          loginUser(true);
          handleToken('Admin');
      } catch (error) {
        console.log('error:', error)
      }
  }

  if(isAuth){
    return <Navigate to='/'/>
  }



  return (
    <div className="login-page">
     <Stack minH={'10vh'} marginTop='30px' direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'} flexDirection={['columns','columns','columns',null]}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <form onSubmit={handleSubmit} >
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="email" onChange={hanldeChange} />
          </FormControl>
          <FormControl id="password" >
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="password" onChange={hanldeChange} />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button type="submit" colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image width={'90%'} height='450px'
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
    </div>
  );
}