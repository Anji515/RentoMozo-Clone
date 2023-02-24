import React, { useEffect } from 'react'
import { Grid, GridItem, Input, FormLabel, Button, Heading, SimpleGrid } from '@chakra-ui/react';
import { useState, useContext } from 'react';
import axios from 'axios'
import { Navigate } from 'react-router-dom';
// import { authState } from '../Contexts/AuthContext';
import {Link as Goto} from 'react-router-dom'
import Mobiles from './Mobiles';
import Furniture from './Furniture';
import FitnessEquip from './Fitness';
// import CompExample from './Alert';


function AdminPage() {

    return (
      <div>
          <Heading color='grey' >Welcome to Admin Page</Heading>
          <Button 
        //   onClick={handleLogout}
          ><Goto to='/login'>Sign Out</Goto></Button>
          <br />
          <br />
          <hr />
          <br />
          <SimpleGrid columns={3} width='75%' borderRadius={18} margin={'auto'} boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset' padding={65}>
            <GridItem>
              <Heading color='grey' fontSize={18}>Manage Mobile Products Here</Heading>
              <br />
              <Button bg={'white'} border='1px solid red'>Go to Mobiles</Button>
            </GridItem>

            <GridItem>
              <Heading color='grey' fontSize={18} >Manage Furniture Products Here</Heading>
           <br />
              <Button border='1px solid red' bg={'white'}>Go to Furniture</Button>
            </GridItem>

            <GridItem>
              <Heading color='grey' fontSize={18}>Manage Fitness Equipements Here</Heading>
              <br />
              <Button border='1px solid red' bg={'white'}>Go to Equipements</Button>
            </GridItem>

          </SimpleGrid>
          <br />
          {/* Mobiles Components */}
          <Mobiles />

          {/* Furnitures Form */}
          <Furniture/>

          {/* Fitness Equipements */}
          <FitnessEquip/>   
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