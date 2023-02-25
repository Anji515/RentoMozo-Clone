import axios from 'axios';
import { React, useEffect, useState, useContext } from 'react';
import { Grid,GridItem,Text,Image,Heading,Button,Input,Spinner,Select } from '@chakra-ui/react';
import { Link , useNavigate , useSearchParams } from 'react-router-dom';
import { authState } from './../../Context/AuthContext';
import { FaCartPlus, FaHeart } from 'react-icons/fa';

function getVal(val){
    let pages=+val
     if(typeof(pages)!=='number'){
       pages=1
    } if(pages<=0){
       pages=1
    } if(!pages){
       pages=1
    }
  return pages 
}

const getUrl=(url,sort,orderBy,search)=>{
      
    if(sort && orderBy){
        return (url=`${url}&_sort=${sort}&_order=${orderBy}`)
    }
    if(search){
        return (url=`${url}&_q=${search}`)
    }
    return url;
}

function ProductFurn(){
    const {setCartItemCont,setWishData} = useContext(authState);
    const [data,setData] = useState([]) ;
    // console.log('dataAfter:', data)
    const [loading,setLoading]=useState(false) ;
    let [searchParam,setSearchParam] = useSearchParams()
    const pageNum=getVal(searchParam.get('page')) ;
    const [page,setPage] = useState(pageNum) ;
    const [orderBy,setOrderBy] = useState('') ;
    const sort="price" ;
    const [cart,setCart] = useState([]) ;
    const [cartItem,setCartItem] = useState([]) ;

    // For Wish List
    setWishData(cart)

    // For Cart
    setCartItemCont(cartItem);

    const [searchQuery,setSearchQuery] =useState('')

// Fetching data from Json Server
   const fetchdata = async(url)=>{
        try {
            setLoading(true);
            const final = await fetch(url)
            let res = await final.json();
            setData(res);
            console.log('res.data:', res)
            setLoading(false)            
           } catch (error) {
            console.log('error:', error)
        }
    }

    const handleAddCart=(item)=>{
        let exist = false;
        const updatedCart = cartItem.map((cart)=>{
           if(cart.id === item.id){
               exist = true;
               return {...cart, count:cart.count+1}
           }
           return cart
        });
       
        if(!exist){
        setCartItem([...updatedCart,{...item, count:1}]);
        } else {
        setCartItem(updatedCart)
        }
    }

const handleWish=(item)=>{
 let exist = false;
 const updatedWish = cart.map((wish)=>{
    if(wish.id === item.id){
        exist = true;
        return {...wish, count:wish.count+1}
    }
    return wish
     });

   if(!exist){
    setCart([...updatedWish,{...item,count:1}]);
    } else {
    setCart(updatedWish)
    }
}

    useEffect(()=>{
        let apiUrl = getUrl(`http://localhost:8080/furnitures?_page=${page}&_limit=8`,
        sort,
        orderBy,
        searchQuery
        )
     fetchdata(apiUrl)
    },[page,orderBy,searchQuery])

    const handelTenure=(num,id)=>{

        let exist=false
        const updatedTenure = data.map((ten)=>{
        if(ten.id === id){
              exist=true 
              return {...ten, tenure:((ten.tenure)+num) }
           }
          return ten
       })
        setData(updatedTenure)
    }
    

    const handlePageChange=(val)=>{
        const final= page+val
        setPage(final)
    }

    useEffect(()=>{
        let objPar= {page}
        if(orderBy){
            objPar.orderBy=orderBy
        }
        setSearchParam(objPar);
    },[page,orderBy])

    return loading ? (<Spinner thickness='5px' speed='0.75s' emptyColor='gray.200' color='blue.500' width={'250px'}
        height='250px' />) : (<div gap='10px'>

        <GridItem  >
            <br />
        <Heading>Welcome To Products Page</Heading>   
        <br />
        <Input width={'20%'} variant='outline' placeholder='Search' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
        <Button onClick={()=>{setOrderBy('asc') ; setPage(1)}} marginLeft={'700px'} marginRight={'10px'} >Sorting Low to High</Button>
        <Button onClick={()=>{setOrderBy('desc') ; setPage(1)}} marginRight={'10px'} >Sorting High to Low</Button>
        <Button onClick={()=>{setOrderBy('') ; setPage(1)}}>Reset</Button>
        </GridItem>


        <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={6} padding='3% 10% 3% 10%'>
        {data?.map((el)=>( 
           <GridItem boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius={'25px'} key={el.id}>
            <Image src={el.imageUrl} borderTopRadius={'25px'} height={'290px'} width='100%' />
            <Heading noOfLines={1} fontSize={'18px'}>{el.brandName}</Heading> 
            <Text>Tenure</Text>
            <Button isDisabled={el.tenure==6} onClick={()=>{handelTenure(-6,el.id)}}>-</Button>
            <Button isDisabled={true} padding='5%'>{el.tenure}</Button>
            <Button isDisabled={el.tenure==12} onClick={()=>{handelTenure(6,el.id)}}>+</Button>
            <Text>Price : ₹ {el.tenure==6 ? (1*(el.price)) : Math.floor(1*(el.price)*0.90)}/mo </Text> 
            <Grid templateColumns='repeat(2, 1fr)' gap={'100px'} padding='5%'>
            <Button onClick={()=>handleAddCart(el)} color='black' bg='red.400' fontSize={20}><FaCartPlus/></Button>
            <Button onClick={()=>handleWish(el)} color='black' bg='red.400' fontSize={20}><FaHeart/></Button>
            </Grid>
           </GridItem>
        ))}
        </Grid >
        <Button isDisabled={page===1} onClick={()=>handlePageChange(-1)}>Prev</Button>
        <Button isDisabled={true} border='2px' borderColor='green.500'>{page}</Button>
        <Button onClick={()=>handlePageChange(1)}>Next</Button>
        </div>)
}

export default ProductFurn