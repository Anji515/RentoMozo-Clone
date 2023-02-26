import { Image, Text, HStack, Button, Center, Box, Heading, Stack, Skeleton } from '@chakra-ui/react';
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link as Goto} from 'react-router-dom'

const getSingleData=(url)=>{
    return fetch(url).then((res)=>res.json());
}

function SingleProductFitness(){
    const [singleUser,setSingleUser] = useState({}) ;
    const [loading,setLoading] = useState(false)

    const {id} = useParams()
    console.log('val:', id)


    const fetchData=async()=>{
        setLoading(true)
        let data = await getSingleData(`https://royalrento.onrender.com/fitness/${id}`)
        console.log('data:', data)
        setSingleUser(data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchData();
    },[])

    return loading ? <Stack width={'35%'} margin='auto' style={{ padding:'1%', marginTop:'20px'}}>
    <Skeleton height='300px' />
    <Skeleton height='50px' />
    <Skeleton height='50px' />
  </Stack> : (
        <>
        {/* <h1>Single User Page</h1> */}
        <br />
        <Heading fontSize={'18px'} color='teal' >{singleUser.brandName}</Heading>
        {<Box style={{border:'1px solid teal' , width:'35%', margin:'auto', borderRadius:'18px', padding:'1%', marginTop:'20px', alignItems:'center'}}>
            <Center><Image width={'70%'}  src={singleUser.imageUrl} alt={singleUser.brandName} /></Center>
            <br />
            <HStack justify={'space-between'}>
            <Button>Tenure : {singleUser.tenure}</Button>
            <Button>Refundable Deposit : ₹ {Math.floor(singleUser.price * 1.5)}</Button>
            <Button>Price : {singleUser.price}</Button>
            </HStack>
            <br />
            <hr />
            <Text _hover={{textDecoration:'underline', textDecorationColor:'teal'}}><Goto to={'/productMob'}>Go Back</Goto></Text>
        </Box>}
        </>
    )

}

export default SingleProductFitness ;