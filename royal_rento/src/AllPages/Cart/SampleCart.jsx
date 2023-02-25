// import React, { useState, useEffect, useContext } from "react";
// import { authState } from './../../Context/AuthContext';


// const SampleCart = ({ cart, setCart, handleChange }) => {
//   const {cartData,setCartItemCont} = useContext(authState)  
//   console.log('cartData:', cartData)
//   const [price, setPrice] = useState(0);

  
//   const handlePrice = () => {
//     let ans = 0;
//     cartData.map((item) => (ans += item.count * item.price));
//     setPrice(ans);
//   };
  
//   useEffect(() => {
//       handlePrice();
//     });
    
//     const handleRemove = (id) => {
//       const arr = cart.filter((item) => item.id !== id);
//       setCartItemCont(arr);
//       handlePrice();
//     };
//   console.log(setCartItemCont);

//   return (
//     <article>
//       {cartData.map((item) => (
//         <div className="cart_box" key={item.id}>
//           <div>
//             <button onClick={() => handleChange(item, 1)}>+</button>
//             <button>{item.count}</button>
//             <button onClick={() => handleChange(item, -1)}>-</button>
//           </div>
//           <div>
//             <span>{item.price}</span>
//             <button onClick={() => handleRemove(item.id)}>Remove</button>
//           </div>
//         </div>
//       ))}
//       <div className="total">
//         <span>Total Price of your Cart</span>
//         <span>R - {price}</span>
//       </div>
//     </article>
//   );
// };

// export default SampleCart;