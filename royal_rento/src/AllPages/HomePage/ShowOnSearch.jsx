import {Link as Goto} from 'react-router-dom'
import { useContext } from "react";
import { authState } from "../../Context/AuthContext";
import {Box,Flex,Text,Button,Stack,Image,Input,useColorModeValue,useBreakpointValue, FormControl, Select, Grid, GridItem, Spinner, Heading} from '@chakra-ui/react';
import { FaSadCry } from 'react-icons/fa';

function SearchInput(){
    const {isAuth,loading,dataInput} = useContext(authState);

    return( loading ? (<Spinner thickness='5px' speed='0.75s' emptyColor='gray.200' color='blue.500' width={'250px'}
    height='250px' />) :
     <>
     {dataInput.length ? 
     <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={6} padding='3% 10% 3% 10%'>
        {dataInput?.map((el)=>( 
        
            <GridItem boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius={'25px'} key={el.id} padding='10px'>
            <Goto to={`/productMob/${el.id}`} ><Image src={el.imageUrl} borderTopRadius={'25px'} height={'250px'} width='100%' /> </Goto>
            <Heading noOfLines={1} fontSize={'18px'}>{el.brandName}</Heading> 
            <br />
            <hr />
            <Flex justify={'space-between'} borderRadius='18px' border='1px solid teal' padding='5px'>
            <Box >
            <Text>Tenure</Text>
            {/* <Button isDisabled={el.tenure==6} color='teal'>-</Button> */}
            <Button bg={'white'} color='red' padding='5%'>{el.tenure}</Button>
            {/* <Button isDisabled={el.tenure==12} color='teal'>+</Button> */}
               </Box>
               <Box>
               <Text >Price  <br />
                <Button>₹ {el.tenure==6 ? (1*(el.price)) : Math.floor(1*(el.price)*0.90)}/mo</Button> </Text>
               </Box>
            </Flex> 
            {/* <Grid templateColumns='repeat(2, 1fr)' gap={'100px'} padding='5%'>
            <Button onClick={()=>handleAddCart(el)} color='black' bg='red.400' fontSize={20}><FaCartPlus/></Button>
            <Button onClick={()=>handleWish(el)} color='black' bg='red.400' fontSize={20}><FaHeart/></Button>
            </Grid> */}
           </GridItem>
       
        ))}
        </Grid > : <Box padding='10%'>
            <br />
        <Heading fontSize={18} color={'red.500'}>( ◕‿◕ ) _________Sorry data not found related your search ________ ( ◕‿◕ )</Heading>
          <Text>Please Go back and Search Again</Text>
          <br />
          <Button color={'blue.400'}><Goto to='/'>Back To Home</Goto></Button>
           <br />
            </Box>}
       </>
    )
}

export default SearchInput