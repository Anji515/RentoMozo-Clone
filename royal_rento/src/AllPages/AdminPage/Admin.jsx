import React from 'react'
import { GridItem, Button, Heading, SimpleGrid } from '@chakra-ui/react';
import { useState, useContext } from 'react';
import {Link as Goto} from 'react-router-dom'
import { authState } from '../../Context/AuthContext';

function AdminPage() {
 
   const {logoutUser} =useContext(authState)

    return (
      <div>
          <Heading color='grey' >Welcome to Admin Page</Heading>
          <Button onClick={()=>logoutUser(false)} >Logout</Button>
          <br />
          <br />
          <hr />
          <br />
          <SimpleGrid columns={[1,2,3]} width='75%' gap={'10px'} bg={'blue.200'} height={'450px'} alignItems='center' borderRadius={18} margin={'auto'} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' padding={65}>
          {/* Mobiles Components */}
          {/* <Mobiles /> */}

            <GridItem bg={'blue.100'} boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' paddingTop={105} paddingBottom={105} borderRadius={18}>
              <Heading border={'1px solid grey'} width='95%' padding={'5px'} borderRadius='16px' margin={'auto'} color='black' fontSize={18}>Manage Mobile Products Here</Heading>
              <br />
              <Button bg={'pink.100'}  border='1px solid red'><Goto to='/mobiles'>Go to Mobiles</Goto></Button>
            </GridItem>
          {/* Furnitures Form */}
          {/* <Furniture/> */}

            <GridItem bg={'blue.100'} boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' paddingTop={105} paddingBottom={105} borderRadius={18}>
              <Heading border={'1px solid grey'} width='95%' padding={'5px'} borderRadius='16px' margin={'auto'} color='black' fontSize={18} >Manage Furniture Products Here</Heading>
           <br />
              <Button bg={'pink.100'} border='1px solid red' ><Goto to='/furnitures'>Go to Furniture</Goto></Button>
            </GridItem>
          {/* Fitness Equipements */}
          {/* <FitnessEquip/>    */}
    
            <GridItem bg={'blue.100'} boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' paddingTop={105} paddingBottom={105} borderRadius={18}>
              <Heading border={'1px solid grey'} width='95%' padding={'5px'} borderRadius='16px' margin={'auto'} color='black' fontSize={18}>Manage Fitness Equipements Here</Heading>
              <br />
              <Button bg={'pink.100'} border='1px solid red' ><Goto to='/fitness'>Go to Fitness</Goto></Button>
            </GridItem>

          </SimpleGrid>
          <br />
    </div>
    )
  }
  
export default AdminPage