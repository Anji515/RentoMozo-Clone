import React, { useEffect } from 'react'
import { Grid, GridItem, Input, FormLabel, Button,Heading } from '@chakra-ui/react';
import { useState, useContext } from 'react';
import axios from 'axios'
import { Navigate } from 'react-router-dom';
// import { authState } from '../Contexts/AuthContext';
import {Link as Goto} from 'react-router-dom'


function AdminPage() {

    // const {logoutUser} = useContext(authState)

    // Mobiles Functionality
    const [fData,setData] = useState({'tenure':'','brandName':'', 'price':'', 'imageUrl':''});
    const [final,setFinal] = useState([]);
    const [deleteId,setId] = useState('');

    // console.log('deleteId:', deleteId)
        
    const hanldeSubmit=(e)=>{
      e.preventDefault();
      axios.post(`http://localhost:8080/mobiles`,{
        ...fData
      }).then((res)=>{
        fetchMobData()
        setData({'tenure':'','brandName':'', 'price':'', 'imageUrl':''})
      })
    }

    useEffect(()=>{
      fetchMobData()
    },[])

    const fetchMobData=()=>{
      axios.get(`http://localhost:8080/mobiles`)
      .then((res)=>setFinal(res.data) );}

    const handleDelete=(e)=>{
      e.preventDefault();
      axios.delete(`http://localhost:8080/mobiles/${deleteId}`)
      .then((res)=>{
        fetchMobData()
        setId('') });
      }
    
    // console.log('finalData',final);


    
    const [furnData,setFurnData] = useState({'tenure':'','brandName':'', 'price':'', 'imageUrl':''});
    const [furnFinal,setFurnFinal] = useState([]);
    const [deleteFurnId,setFurnId] = useState('');

    const hanldeFrunSubmit=(e)=>{
      e.preventDefault();
      axios.post(`http://localhost:8080/furnitures`,{
        ...furnData
      }).then((res)=>{
        fetchFurnData()
        setFurnData({'tenure':'','brandName':'', 'price':'', 'imageUrl':''})
      })
    }

    useEffect(()=>{
      fetchFurnData()
    },[])

    const fetchFurnData=()=>{
      axios.get(`http://localhost:8080/furnitures`)
      .then((res)=>setFurnFinal(res.data) );}

    const handleFurnDelete=(e)=>{
      e.preventDefault();
      axios.delete(`http://localhost:8080/furnitures/${deleteFurnId}`)
      .then((res)=>{
        fetchFurnData()
        // setFurnId('') 
      });
      }

      console.log('deleteId:', deleteFurnId)

    return (
        <div>
          <br />
          <Heading color='grey' >Welcome to Admin Page</Heading>
          <Button 
        //   onClick={handleLogout}
          ><Goto to='/login'>Sign Out</Goto></Button>
          <br />
          <br />
          <hr />
      <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={6} padding='3% 10% 3% 10%' >
        <GridItem  boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding={'15%'} borderRadius={'25px'}>
          <Heading fontSize={'19px'} color={'grey'}>Add Mobile Products Here</Heading>
          <hr />
          <br />
        <form onSubmit={hanldeSubmit} >
        <FormLabel>Brand Name</FormLabel>
        <Input type='text' placeholder='Enter The Brand Name' onChange={(e)=>setData({...fData, brandName: e.target.value})} value={fData.brandName} />
        <FormLabel>Price </FormLabel>
        <Input type='number' placeholder='Enter The Price' onChange={(e)=>setData({...fData, price: e.target.value})} value={fData.price} />
        <FormLabel>Image </FormLabel>
        <Input type='text' placeholder='Image Address' onChange={(e)=>setData({...fData, imageUrl: e.target.value})} value={fData.imageUrl} />
        <FormLabel>Product Tenure</FormLabel>
        <Input type='number' placeholder='Enter The Product Name' onChange={(e)=>setData({...fData, name: e.target.value})} value={fData.name} />
        <br />
        <br />
        <Button type='submit'>Add Mobiles</Button>
        </form>
        </GridItem>

        <GridItem boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding={'15%'} borderRadius={'25px'}>
         <Heading fontSize={'19px'} color={'grey'}>Delete Mobile Products Here</Heading>
          <hr />
          <br />
          {/*  */}
         <form onSubmit={handleDelete}> 
         <FormLabel>Product ID </FormLabel>
          <Input type='number' placeholder='Enter The Product ID' onChange={(e)=>setId(e.target.value)} />
          {/* <FormLabel>Product Name</FormLabel>
        <Input type='text' placeholder='Enter The Product Name' onChange={(e)=> e.target.value} /> */}
          <br />
          <br />
         <Button type='submit' >Delete Mobiles</Button>
        </form>
        </GridItem>

        {/* <GridItem boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding={'15%'} borderRadius={'25px'}>
          <Heading fontSize={'19px'} color={'grey'}>Update Products Here</Heading>
          <hr />
          <br />
        <form onSubmit={hanldeSubmit} >
        <FormLabel>Product Name</FormLabel>
        <Input type='text' placeholder='Update The Product Name'  />
        <FormLabel>Brand Name</FormLabel>
        <Input type='text' placeholder='Update The Brand Name' />
        <FormLabel>Price </FormLabel>
        <Input type='number' placeholder='Update The Price' />
        <FormLabel>Image </FormLabel>
        <Input type='text' placeholder='Update Image Address' />
        <br />
        <br />
        <Button type='submit'>Update Products</Button>
        </form>
        </GridItem> */}


        <GridItem >
           <FormLabel>Total No. of Products : <Button>{final.length}</Button></FormLabel>
        </GridItem>
        {/* {final?.map((el)=>(
          
          <Center py={6}>
         <Box width={'30%'}
           maxW={'300px'}
           w={'full'}
           boxShadow={'2xl'}
           rounded={'md'}
           p={6}
           overflow={'hidden'}>
           <Box
             h={'300px'}
             bg={'gray.100'}
             mt={-6}
             mx={-6}
             mb={6}
             pos={'relative'}>
             <Image height='300px' width='100%'
             src={el.imageUrl}
             />
           </Box>
           <Stack>
           <Text color='gray.700'
               fontSize={'2xl'}
               fontFamily={'body'}>{el.brandName}</Text>
               <Text color={'gray.500'}>{el.name}</Text>
               <Text color={'gray.500'}>₹ {el.price}</Text>
               </Stack>
               </Box>
               </Center>
 ))} */}

            </Grid>

{/* Furnitures Form */}

      <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={6} padding='3% 10% 3% 10%' >
        <GridItem  boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding={'15%'} borderRadius={'25px'}>
          <Heading fontSize={'19px'} color={'grey'}>Add Furniture Products Here</Heading>
          <hr />
          <br />
        <form onSubmit={hanldeFrunSubmit} >
        {/* <FormLabel>Product Name</FormLabel>
        <Input type='text' placeholder='Enter The Product Name' onChange={(e)=>setData({...fData, name: e.target.value})} value={fData.name} /> */}
        <FormLabel>Brand Name</FormLabel>
        <Input type='text' placeholder='Enter The Brand Name' onChange={(e)=>setFurnData({...fData, brandName: e.target.value})} value={fData.brandName} />
        <FormLabel>Price </FormLabel>
        <Input type='number' placeholder='Enter The Price' onChange={(e)=>setFurnData({...fData, price: e.target.value})} value={fData.price} />
        <FormLabel>Image </FormLabel>
        <Input type='text' placeholder='Image Address' onChange={(e)=>setFurnData({...fData, imageUrl: e.target.value})} value={fData.imageUrl} />
        <FormLabel>Product Tenure</FormLabel>
        <Input type='number' placeholder='Enter The Product Name' onChange={(e)=>setFurnData({...fData, name: e.target.value})} value={fData.name} />
        <br />
        <br />
        <Button type='submit'>Add Mobiles</Button>
        </form>
        </GridItem>

        <GridItem boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding={'15%'} borderRadius={'25px'}>
         <Heading fontSize={'19px'} color={'grey'}>Delete Furniture Products</Heading>
          <hr />
          <br />
          
         <form onSubmit={handleFurnDelete} > 
         <FormLabel>Product ID </FormLabel>
          <Input type='number' placeholder='Enter The Product ID' onChange={(e)=>setFurnId(e.target.value)} />
          {/* <FormLabel>Product Name</FormLabel>
          <Input type='text' placeholder='Enter The Product Name' onChange={(e)=> e.target.value} /> */}
          <br />
          <br />
         <Button type='submit' >Delete Furniture</Button>
        </form>
        </GridItem>

        {/* <GridItem boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding={'15%'} borderRadius={'25px'}>
          <Heading fontSize={'19px'} color={'grey'}>Update Furniture Products Here</Heading>
          <hr />
          <br />
        <form onSubmit={hanldeSubmit} >
        <FormLabel>Product Name</FormLabel>
        <Input type='text' placeholder='Update The Product Name'  />
        <FormLabel>Brand Name</FormLabel>
        <Input type='text' placeholder='Update The Brand Name' />
        <FormLabel>Price </FormLabel>
        <Input type='number' placeholder='Update The Price' />
        <FormLabel>Image </FormLabel>
        <Input type='text' placeholder='Update Image Address' />
        <br />
        <br />
        <Button type='submit'>Update Products</Button>
        </form>
        </GridItem> */}


        <GridItem >
           <FormLabel>Total No. of Products : <Button>{furnFinal.length}</Button></FormLabel>
        </GridItem>
        {/* {final?.map((el)=>(
          
          <Center py={6}>
         <Box width={'30%'}
           maxW={'300px'}
           w={'full'}
           boxShadow={'2xl'}
           rounded={'md'}
           p={6}
           overflow={'hidden'}>
           <Box
             h={'300px'}
             bg={'gray.100'}
             mt={-6}
             mx={-6}
             mb={6}
             pos={'relative'}>
             <Image height='300px' width='100%'
             src={el.imageUrl}
             />
           </Box>
           <Stack>
           <Text color='gray.700'
               fontSize={'2xl'}
               fontFamily={'body'}>{el.brandName}</Text>
               <Text color={'gray.500'}>{el.name}</Text>
               <Text color={'gray.500'}>₹ {el.price}</Text>
               </Stack>
               </Box>
               </Center>
 ))} */}

            </Grid>
    </div>
    )
  }
  
export default AdminPage








// async function postProducts(obj){
//   try {
//    let res = await fetch('https://63984905fe03352a94cb30eb.mockapi.io/adpro',{
//        method:'POST',
//        headers:{
//            'Content-Type':'application/json'
//        },
//        body:JSON.stringify(obj)
//       })
//       if(res.ok){
//        showmessage("Product Added Sucessfully","green","fa-check")
//       }else{
       
//        showmessage("Unable to add Product","red","fa-xmark")
//       }
//   } catch (error) {
//    showmessage("Unable to add Product","red","fa-xmark")
//   } 
  
// }