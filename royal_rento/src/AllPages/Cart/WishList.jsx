import { Button, Heading, HStack, Image, Text, VStack, GridItem, SimpleGrid, Box } from '@chakra-ui/react';
import { React, useContext, useEffect, useState } from 'react';
import { authState } from './../../Context/AuthContext';
import {Link as Goto} from 'react-router-dom'

function WishList(){
    const {wishData,setWishData} = useContext(authState)

   const removeWish=(id)=>{
        const filteredData=wishData.filter((el)=>{
            return el.id !== id
        })
        setWishData(filteredData)
    }

    return (
        <Box>
        <br />
        <Heading color={'teal'}>Welcome To WishList Page</Heading>
        <br />
        <br />
        {wishData.length ?
        <div>
            <Text fontSize={'20px'} padding='0px 10px 0px 30px' textAlign='left' color={'black'}>Total Count : {wishData.length} No's</Text>
       <SimpleGrid columns={[1,2,3,3,4]} gap='30%' padding='5px' style={{display:'grid' , color: 'red',width:'95%', gap:'10px'}}>
        {wishData?.map((item)=><GridItem justify={'space-around'}  key={item.id} style={{border:'1px solid teal', marginBottom:'5px', padding:'10px'}} borderRadius='16px'>
         <VStack align='center' >
         <Image width={'70%'} src={item.imageUrl} alt={item.brand} />
         <Text noOfLines={1} textDecoration={'underline'} textDecorationColor={'teal'}>{item.brandName}</Text>
         </VStack>
         <br />
         <VStack color='black' align='right'>
         <Button fontSize={'14px'}>Price : ₹ {item.price}</Button> 
         <Button fontSize={'14px'}>Tenure : {item.tenure} Months</Button>
         </VStack>
       <br />
         <Button onClick={()=>{removeWish(item.id)}}>Remove</Button>
        </GridItem>)}
      
      </SimpleGrid>
        </div>
         :<div> <br /> <Heading color={'blue.500'}>( ◕‿◕ ) ____________ It's ➠ Empty! ____________ ( ◕‿◕ )</Heading> <br />  <br />
        </div>  }
        
        </Box> )
}

export default WishList