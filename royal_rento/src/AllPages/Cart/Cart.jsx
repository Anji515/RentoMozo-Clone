import { Button, Heading, HStack, Image, Text, VStack, GridItem, SimpleGrid } from '@chakra-ui/react';
import { React, useContext, useEffect, useState } from 'react';
import { authState } from './../../Context/AuthContext';
import {Link as Goto} from 'react-router-dom'

function Cart(){
    const {cartData,setCartItemCont} = useContext(authState)
    console.log('cartData:', cartData)
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
       let ans = 0;
       cartData.map((item) => (ans += item.count * item.price));
       setPrice(ans);
      };
      useEffect(() => {
      handlePrice();
       });

const removeCart=(id)=>{
        const filteredData=cartData.filter((el)=>{
            return el.id !== id
        })
        setCartItemCont(filteredData)
        handlePrice();
    }

    const handelCount=(num,id)=>{
        let exist=false
        const updatedTenure = cartData.map((count)=>{
        if(count.id === id){
              exist=true 
              return {...count,count:((count.count)+num) }
           }
          return count
       })
       setCartItemCont(updatedTenure)
    }
    

    return (
        <div>
            <br />
        <Heading color={'teal'}>Welcome To Cart Page</Heading>
        <br />
        {cartData.length ? <SimpleGrid columns={[1,1,2,3,3]} gap='30%' padding='10px' style={{display:'grid' , color: 'red',width:'95%', gap:'10px'}}>
        <GridItem colSpan={[1,1,2,2]}  >
        {cartData?.map((item)=><HStack justify={'space-around'} key={item.id} height='120px' style={{border:'1px solid teal', marginBottom:'5px', padding:'40px'}}>
         <VStack align='left' width={'20%'}>
         <Image width={'50px'} src={item.imageUrl} alt={item.brand} />
         <Text noOfLines={1} textDecoration={'underline'} textDecorationColor={'teal'}>{item.brandName}</Text>
         </VStack>
        
         <VStack color='black' width={'20%'} align='right'>
         <Button fontSize={'14px'}>Price : ₹ {item.price*item.count}</Button> 
         <Button fontSize={'14px'}>Tenure : {item.tenure} Months</Button>
         </VStack>
        <VStack>
        <HStack justify={'center'} width={'30%'}>
            <Button color={'teal'} isDisabled={item.count===1} onClick={()=>{handelCount(-1,item.id)}}>-</Button>
            <Button>{item.count}</Button>
            <Button color={'teal'} onClick={()=>{handelCount(1,item.id)}}>+</Button>
            </HStack>
         <Button onClick={()=>{removeCart(item.id)}}>Remove</Button>
                    </VStack> 
         </HStack>)}
         </GridItem>
         <GridItem border={'1px solid teal'} padding={'20px'} height='300px'>
            <Heading>Order Summary</Heading>
            <Text color={'black'}>Total Cart Count : {cartData.length} No's</Text>
            <Text color={'black'}>Total Cart Amount : {price}</Text>
            <Button><Goto to='/checkout'>Check Out</Goto></Button>
         </GridItem>
        </SimpleGrid>
        :<div> <br /> <Heading color={'blue.500'}>( ◕‿◕ ) ____________ It's ➠ Empty! ____________ ( ◕‿◕ )</Heading> <br />  <br />
        </div> }
    </div> )}

export default Cart ;