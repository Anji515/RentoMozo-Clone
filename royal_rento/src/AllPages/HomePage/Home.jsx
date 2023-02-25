import Carousel from "../../Components/HomePageComp/Carousel";
import {Image, Text, SimpleGrid, VStack, Center, GridItem, Heading, Box, Flex, Button} from '@chakra-ui/react';
import GridBlurredBackdrop from "./Reviews";
import {Link as Goto} from 'react-router-dom'

function Home(){

    const logo=[{'img':`https://i.ibb.co/MkjZFDX/Mobile.jpg`,'title':'Electronics','id':2 ,'path':'productMob'},{'img':`https://i.ibb.co/m44NvHv/Bed.jpg`,'title':'Furniture','id':3, 'path':'productFurn'},{'img':`https://i.ibb.co/rHpqNkL/Zym.jpg`,'title':'Fitness','id':6, 'path':'productFitness'},{'img':`https://i.ibb.co/SwgnFR3/bed1.jpg`,'title':'Appliances','id':1,'path':'productApp'},{'img':`https://i.ibb.co/GC1W8DV/Bike.jpg`,'title':'Bikes','id':4 , 'path':'productBike'},{'img':`https://i.ibb.co/gVp9pTh/WFH.jpg`,'title':'WFH Essentials','id':5, 'path':'productEss'}]

    const moreThing=[{'img':'https://i.ibb.co/wBcnxfD/bed1.jpg','title':'Finest-quality products','desc':"Quality matters to you, and us! That's why we do a strict quality-check for every product.",'id':1},
    {'img':'https://i.ibb.co/mXPZPCD/location.jpg','title':'Free relocation','desc':"Changing your house or even your city? We'll relocate your rented products for free.",'id':2},
    {'img':'https://i.ibb.co/y6XqbDp/settings.jpg','title':'Free maintenance','desc':"Keeping your rented products in a spick and span condition is on us, so you can sit back and relax.",'id':3},
    {'img':' https://i.ibb.co/56pJJwJ/Return.jpg','title':'Cancel anytime','desc':"Pay only for the time you use the product and close your subscription without any hassle.",'id':4},
    {'img':'https://i.ibb.co/Px0ZPpL/bed2.jpg','title':'Easy return on delivery','desc':"If you don't like the product on delivery, you can return it right away—no questions asked.",'id':5},
    {'img':'https://i.ibb.co/3kJRTJN/phones.jpg','title':'Keep upgrading','desc':"Bored of the same product? Upgrade to try another, newer design and enjoy the change!",'id':6}]

    let scrollArr = [
        {
            'img':"https://p.rmjo.in/productSquare/lwdmaatj-500x500.jpg",
            'tag':"Hiber Wooden Queen Storage Bed (6x5)",
            'price':929,
            'id':1, 
            'path':'productFurn'
        },
        {
            'img':"https://p.rmjo.in/productSquare/lwdmaatj-500x500.jpg",
            'tag':"Napster Metal Single Bed (6x3)",
            'price':249,
            'id':2, 'path':'productFurn'
        },
        {
            'img':"https://p.rmjo.in/productSquare/sk1pofns-500x500.jpg",
            'tag':"LaneigNapster Metal Queen Bed (6x5)",
            'price':319,
            'id':3, 'path':'productFurn'
        },
        {
            'img':"https://p.rmjo.in/productSquare/durxsu1c-500x500.jpg",
            'tag':"Morris Office Chair",
            'price':199,
            'id':4, 'path':'productFurn'
        },
        {
            'img':"https://p.rmjo.in/productSquare/yxvjrli3-500x500.jpg",
            'tag':"Saddle Shoe Rack Large",
            'price':189,
            'id':5, 'path':'productFurn'
        },
        // {
        //     img:"https://p.rmjo.in/productSquare/c3tutctj-500x500.jpg",
        //     tag:"Microwave Solo 20L "
        // },
        // {
        //     img:"https://p.rmjo.in/productSquare/c3tutctj-500x500.jpg",
        //     tag:"Rex 3-seater Leather Sofa"
        // },
        // {
        //     img:"https://p.rmjo.in/productSquare/akv269ws-500x500.jpg",
        //     tag:"Miller Office Chair"}
    ]


    return(<>
    <Carousel/>
    <Center align='center'>
    <SimpleGrid width={'80%'} margin='auto' padding='20px' columnGap='20px' gridTemplateColumns={['1fr','1fr 1fr','1fr 1fr','1fr 1fr 1fr','1fr 1fr 1fr 1fr','1fr 1fr 1fr 1fr 1fr 1fr']}>
    {logo.map((el)=>(
           <Goto to={el.path} key={el.id}>
        <VStack border='1px solid teal' borderRadius={'16px'} boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' _hover={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px ', width:'152px'}} padding='10px' width={'150px'} height='120px' cursor='pointer'>
           <Image width={'55px'} height={'55px'} src={el.img} alt={el.title}/>
           <Text fontSize={'13px'}>{el.title}</Text>
        </VStack>
           </Goto>
    ))} 
    </SimpleGrid>   
    </Center>

    <Box background='#f5f7fa' paddingLeft={20} paddingRight={20} >
    <Box paddingTop={10}>
    <Heading fontSize={'18px'} marginLeft={'70px'}  textAlign={'left'} >You'll love to
      <br/>
      take these home</Heading>
    <Text color={'red'} fontSize={'24px'} marginLeft={'70px'}  textAlign={'left'} >----------</Text>
    </Box>  
      <div>
      <SimpleGrid columns={[1,2,3,5,5]} gap= '1.2pc' padding='1pc' alignItems= 'center' fontSize='14px' scrollBehavior={'smooth'} overflow='hidden'>
      {/* <button ><ArrowLeftIcon /></button> */}
        {scrollArr.map((el)=>(
            <Box key={el.id} boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' padding={5} borderRadius={18} _hover={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px ', width:'102%'}} >
                <Image src={el.img}/>
                <Text noOfLines={1}>{el.tag}</Text>
                <Flex justifyContent={'space-between'} marginTop={5}>
                <VStack marginLeft={5} >
                <Text color={'grey'}>Rent</Text>
                <Text>{el.price}/mo </Text>
               </VStack>
                  <Goto to={el.path}>
               <Button border={'1px solid red'} bg='white ' marginTop={2} marginRight={3}>See more</Button>
                  </Goto>
           </Flex>
            </Box>
        ))}
      {/* <button><ArrowRightIcon/></button> */}
      </SimpleGrid>
      </div>
    </Box>

    <Box paddingTop={10}>
    <Heading fontSize={'18px'} marginLeft={'225px'}  textAlign={'left'} >There's more 
    <br />
    to renting</Heading>
    <Text color={'red'} fontSize={'24px'} marginLeft={'225px'}  textAlign={'left'} >----------</Text>
    </Box>
    <Center paddingBottom={10}>
        <SimpleGrid columns={[1,2,2,3]} width='70%' textAlign={'left'} spacing={10}>
         {moreThing.map((el)=>(
            <GridItem key={el.id}>
                <Image width={'25%'} src={el.img}/>
                <Heading fontSize={15} >{el.title}</Heading>
                <Text fontSize={14}>{el.desc}</Text>
            </GridItem>
         ))}
        </SimpleGrid>
    </Center>
    <GridBlurredBackdrop/>

    </>)
}

export default Home