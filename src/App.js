import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import CardSingle from './components/CardSingle';
import Cart from './components/Cart';


function App() {

  const [show, setShow] = useState(true);
  const [searchTitle, setSearchTitle] = useState("");
  const [cart, setCart] = useState([]);

  const handleClick = (value) => {
    setShow(value)
  }

  const handleSearch = (items) => {
    setSearchTitle(items)
  }

  const handleClickAmazon = (item) => {
    // Check if the item is already in the cart
    const itemIndexInCart = cart.findIndex((cartItem) => cartItem.id === item.id);
    console.log(itemIndexInCart)
    if (itemIndexInCart !== -1) {
      // If the item is already in the cart, display alert and do not add it again
      alert('Item is already in the cart');
    } else {
      // If the item is not in the cart, add it to the cart with an initial amount of 1
      setCart([...cart, { ...item, amount: 1 }]);
      alert('Item added to cart');
    }
  };

  return (
    <BrowserRouter>

      <NavBar handleClick={handleClick} handleSearch={handleSearch} size={cart.length} />
      <Routes>
        <Route
          path='/'
          element={
            show ? (
              <Cards searchTitle={searchTitle} handleClickAmazon={handleClickAmazon} />
            ) : (
              <Cart cart={cart} setCart={setCart} />
            )
          }
        />
        <Route path='/cardSingle/:id' element={<CardSingle cart={cart} setCart={setCart}></CardSingle>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
