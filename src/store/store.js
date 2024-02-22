// import { create } from "zustand";

// export const useStore = create(function (set) {
//   return ({
//     handleClickAmazon: (item) => {
//       return set(function (state) {
//         return {
//           const itemIndexInCart = cart.findIndex((cartItem) => cartItem.id === item.id);

//           if(itemIndexInCart !== -1) {
//         // If the item is already in the cart, display alert and do not add it again
//         alert('Item is already in the cart');
//       } else {
//         // If the item is not in the cart, add it to the cart with an initial amount of 1
//         setCart([...cart, { ...item, amount: 1 }]);
//       alert('Item added to cart');
//       }
//   }
//       })
//     }
//   })
// });