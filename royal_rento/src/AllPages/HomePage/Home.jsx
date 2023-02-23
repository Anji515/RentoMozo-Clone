import Carousel from "../../Components/HomePageComp/Carousel";
import {Image, Text, SimpleGrid, VStack, Center, GridItem, Heading, Box, Flex, Button} from '@chakra-ui/react';
import GridBlurredBackdrop from "./Reviews";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

function Home(){

    const logo=[{'img':`https://i.ibb.co/SwgnFR3/bed1.jpg`,'title':'Appliances'},{'img':`https://i.ibb.co/MkjZFDX/Mobile.jpg`,'title':'Electronics'},{'img':`https://i.ibb.co/m44NvHv/Bed.jpg`,'title':'Furniture'},{'img':`https://i.ibb.co/GC1W8DV/Bike.jpg`,'title':'Bikes'},{'img':`https://i.ibb.co/gVp9pTh/WFH.jpg`,'title':'WFH Essentials'},{'img':`https://i.ibb.co/rHpqNkL/Zym.jpg`,'title':'Fitness'}]

    const moreThing=[{'img':'https://i.ibb.co/wBcnxfD/bed1.jpg','title':'Finest-quality products','desc':"Quality matters to you, and us! That's why we do a strict quality-check for every product."},{'img':'https://i.ibb.co/mXPZPCD/location.jpg','title':'Free relocation','desc':"Changing your house or even your city? We'll relocate your rented products for free."},{'img':'https://i.ibb.co/y6XqbDp/settings.jpg','title':'Free maintenance','desc':"Keeping your rented products in a spick and span condition is on us, so you can sit back and relax."},{'img':' https://i.ibb.co/56pJJwJ/Return.jpg','title':'Cancel anytime','desc':"Pay only for the time you use the product and close your subscription without any hassle."},{'img':'https://i.ibb.co/Px0ZPpL/bed2.jpg','title':'Easy return on delivery','desc':"If you don't like the product on delivery, you can return it right away—no questions asked."},{'img':'https://i.ibb.co/3kJRTJN/phones.jpg','title':'Keep upgrading','desc':"Bored of the same product? Upgrade to try another, newer design and enjoy the change!"}]

    let scrollArr = [
        {
            img:"https://p.rmjo.in/productSquare/lwdmaatj-500x500.jpg",
            tag:"Hiber Wooden Queen Storage Bed (6x5)",
            price:929
        },
        {
            img:"https://p.rmjo.in/productSquare/lwdmaatj-500x500.jpg",
            tag:"Napster Metal Single Bed (6x3)",
            price:249
        },
        {
            img:"https://p.rmjo.in/productSquare/sk1pofns-500x500.jpg",
            tag:"LaneigNapster Metal Queen Bed (6x5)",
            price:319
        },
        {
            img:"https://p.rmjo.in/productSquare/durxsu1c-500x500.jpg",
            tag:"Morris Office Chair",
            price:199
        },
        {
            img:"https://p.rmjo.in/productSquare/yxvjrli3-500x500.jpg",
            tag:"Saddle Shoe Rack Large"
            ,
            price:189
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
        <VStack border='1px solid teal' borderRadius={'16px'} boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' _hover={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px ', width:'152px'}} padding='10px' width={'150px'} cursor='pointer'>
           <Image width={'55px'} height={'55px'} src={el.img} alt={el.title}/>
           <Text fontSize={'13px'}>{el.title}</Text>
           
        </VStack>
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
            <Box boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' padding={5} borderRadius={18} _hover={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px ', width:'102%'}} >
                <Image src={el.img}/>
                <Text noOfLines={1}>{el.tag}</Text>
                <Flex justifyContent={'space-between'} marginTop={5}>
                <VStack marginLeft={5} >
                <Text color={'grey'}>Rent</Text>
                <Text>{el.price}/mo </Text>
               </VStack>
               <Button border={'1px solid red'} bg='white ' marginTop={2} marginRight={3}>See more</Button>
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
            <GridItem>
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