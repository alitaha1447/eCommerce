import React, { useEffect, useState } from 'react'
import '../styles/Cart.css'
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";




function Cart({ cart, setCart }) {
  console.log(cart)
  const [totalPrice, setTotalPrice] = useState(null)

  const decrement = (index) => {
    console.log(index);
    const updateCart = [...cart]
    updateCart[index].amount -= 1;
    setCart(updateCart)
  }

  const increment = (index) => {
    const updateCart = [...cart];
    updateCart[index].amount += 1;
    setCart(updateCart);
  }

  const getTotalPriceSingleCart = (product) => {
    let price = product.amount * product.price;
    return price;
  }

  const handleTotalPrice = () => {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.amount * item.price;
    });
    setTotalPrice(ans);
  };

  const removeProduct = (id) => {
    let arr = cart.filter((item, index) => item.id !== id);
    setCart(arr)
  }

  useEffect(() => {
    handleTotalPrice();
  });

  return (
    <>
      <div className='container bgCartColor mt-3'>
        <div className='CartTop'>
          <p>Shopping Cart</p>
          <p>Price</p>
        </div>
        {cart.map((product, index) => (
          <div key={index} className='row mb-5 mt-4'>
            <div className='col-2'>
              <img src={product.image} alt={product.category} className='img-fluid' />
            </div>
            <div className='col-8'>
              <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
              <div>
                <button className={product.amount <= 1 ? 'disabled-button btn' : 'btn'} onClick={() => decrement(index)}><FiMinusCircle /></button>
                <span >{product.amount}</span>
                <button className='btn' onClick={() => increment(index)}><FiPlusCircle /></button>
              </div>
              <div>
                <button className='btn btn-danger' onClick={() => removeProduct(product.id)}>Remove</button>
              </div>
            </div>
            <div className='col-2'>
              <div className='cartPrice'>
                <p style={{ fontSize: '18px' }}>Price - <span>{getTotalPriceSingleCart(product)}</span></p>
              </div>
            </div>
          </div>
        ))}
        <div className='CartBottom'>
          <div className='totalPrice'>
            <span>Total Price of your Cart ({cart.length}) </span>
            <span>Rs - {totalPrice}</span>
          </div>
        </div>
      </div >
    </>
  )
}

export default Cart
