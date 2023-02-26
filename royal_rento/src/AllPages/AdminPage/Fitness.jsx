import React, { useEffect } from 'react'
import { Grid, GridItem, Input, FormLabel, Button, Heading, SimpleGrid } from '@chakra-ui/react';
import { useState, useContext } from 'react';
import axios from 'axios'
import { Navigate } from 'react-router-dom';
// import { authState } from '../Contexts/AuthContext';
import {Link as Goto} from 'react-router-dom'
import { AddingStatus, CompExample, Incorrect } from './Alert';

function FitnessEquip(){

    const [fitData,setData] = useState({'tenure':'','brandName':'', 'price':'', 'imageUrl':''});
    const [fitFinal,setFinal] = useState([]);
    console.log('fitFinal:', fitFinal)
    // console.log('final:', final)
    const [deleteFitId,setId] = useState('');
    const [visibleAdd,setVisbleAdd] = useState(false);
    const [visible,setVisble] = useState(false);

    // console.log('deleteId:', deleteId)
        
    const hanldeFitSubmit=(e)=>{
      e.preventDefault();
      axios.post(`https://royalrento.onrender.com/fitness`,{
        ...fitData
      }).then((res)=>{
        fetchFitData()
        setData({'tenure':'','brandName':'', 'price':'', 'imageUrl':''});
        setVisbleAdd(!visibleAdd);
      })
    }

    useEffect(()=>{
      fetchFitData()
    },[])

    const fetchFitData=()=>{
      axios.get(`https://royalrento.onrender.com/fitness`)
      .then((res)=>setFinal(res.data) );}

    const handleDelete=(e)=>{
      e.preventDefault();
      axios.delete(`https://royalrento.onrender.com/fitness/${deleteFitId}`)
      .then((res)=>{
        fetchFitData()
        if(res.status == 200){
          console.log(res)
        setVisble(!visible);
        setId('')
        } 
          // setincorrectId(!incorrectId)
        }).catch((err)=>alert('Id Not Found , Please check and try Again'));
      }


    return (
        <>
        <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={6} padding='3% 10% 3% 10%' >
        <GridItem  boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding={'15%'} borderRadius={'25px'}>
          <Heading fontSize={'19px'} color={'grey'}>Add Fitness Equipements Here</Heading>
          <hr />
          <br />
        <form onSubmit={hanldeFitSubmit} >
        <FormLabel>Brand Name</FormLabel>
        <Input type='text' placeholder='Enter The Brand Name' onChange={(e)=>setData({...fitData, brandName: e.target.value})} value={fitData.brandName} />
        <FormLabel>Price </FormLabel>
        <Input type='number' placeholder='Enter The Price' onChange={(e)=>setData({...fitData, price: e.target.value})} value={fitData.price} />
        <FormLabel>Image </FormLabel>
        <Input type='text' placeholder='Image Address' onChange={(e)=>setData({...fitData, imageUrl: e.target.value})} value={fitData.imageUrl} />
        <FormLabel>Product Tenure</FormLabel>
        <Input type='number' placeholder='Enter The Product Name' onChange={(e)=>setData({...fitData, tenure: e.target.value})} value={fitData.tenure} />
        <br />
        <br />
        <Button type='submit'>Add Equipements </Button>
        <br /><br />
        {visibleAdd?<AddingStatus visibleAdd={visibleAdd} setVisbleAdd={setVisbleAdd}/>:''}
        </form>
        </GridItem>

        <GridItem boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' padding={'15%'} borderRadius={'25px'}>
         <Heading fontSize={'19px'} color={'grey'}>Delete Fitness Equipements</Heading>
          <hr />
          <br />
          
         <form onSubmit={handleDelete} > 
         <FormLabel>Product ID </FormLabel>
          <Input type='number' placeholder='Enter The Product ID' value={deleteFitId} onChange={(e)=>setId(e.target.value)} />
          {/* <FormLabel>Product Name</FormLabel>
          <Input type='text' placeholder='Enter The Product Name' onChange={(e)=> e.target.value} /> */}
          <br />
          <br />
         <Button type='submit' >Delete Equipement</Button>
         <br />
         {visible?<CompExample setVisble={setVisble} visible={visible}/>:''}
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
           <Button><Goto to='/admin'>Go To Dashboard</Goto></Button>
           <br />
           <br />
           <hr />
           <br />
           <FormLabel>Total No. of Products : <Button>{fitFinal.length}</Button></FormLabel>
        </GridItem>

            </Grid>   
        </>
    )
}


export default FitnessEquip