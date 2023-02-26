import { Button, Heading, HStack, Image, Text, VStack, GridItem, SimpleGrid, Checkbox, Center, Box } from '@chakra-ui/react';
import { React, useContext, useEffect, useState } from 'react';
import { authState } from './../../Context/AuthContext';
import {Link as Goto} from 'react-router-dom'
import { ArrowForwardIcon } from '@chakra-ui/icons'

function Cart(){
    const {cartData,setCartItemCont} = useContext(authState)
    console.log('cartData:', cartData)
    const [price, setPrice] = useState(0);
    const [gst,setGST]= useState(1)

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
        const updatedTenure = cartData.map((count)=>{
            if(count.id === id){
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
        {cartData?.map((item)=><HStack borderRadius={18} justify={'space-around'} key={item.id} height='120px' style={{border:'1px solid teal', marginBottom:'5px', padding:'40px'}}>
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
         <GridItem borderRadius={18} border={'1px solid teal'} padding={'20px'} alignItems='center' height='370px'>
            <Heading fontSize={22}>Order Summary</Heading>
            <hr />
            <br />
            <Box borderRadius={18} padding={5} boxShadow='rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'>
            <Text color={'black'}>Total Cart Count : {cartData.length} No's</Text>
            <Checkbox color={'black'} onChange={()=>setGST(0.18)}>GST : 18%</Checkbox>
            <Text color={'black'}>Total Cart Amount : {price}</Text>
            <br />
            <Button><Goto to='/checkout'>Check Out <ArrowForwardIcon/> </Goto></Button>
            <br />
            <br />
            or <Text color='blue.500' textDecoration={'underline'}><Goto to='/'>Continue Shopping</Goto></Text>
            </Box>
         </GridItem>
        </SimpleGrid>
        :<div> <br /> <Heading color={'blue.500'}>( ◕‿◕ ) ____________ It's ➠ Empty! ____________ ( ◕‿◕ )</Heading> <br />  <br />
        </div> }
    </div> )}

export default Cart ;