import React, { useState } from 'react'
import "../styles/NavBar.css"
import amazon from '../assests/amazon.png'
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';



function NavBar({ handleClick, handleSearch, size }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeSearch = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearch1 = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  }

  const handleChangeAmazon = () => {
    handleClick(true)
  }

  const handleChangeCart = () => {
    handleClick(false);
    // alert('hi')
  }
  return (
    <>
      <nav className="navbar navbar-light bglight">
        <div className="container">
          <Link to='/' className="navbar-brand" onClick={handleChangeAmazon}>
            <img className='img-fluid loginImgDesktop' src={amazon} alt='computer' />
          </Link>
          <form className="d-flex">
            <input className="form-control me-2"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleChangeSearch} />
            <button className="btn btn-outline-success" type="submit" onClick={handleSearch1}>Search</button>
          </form>
          <div className='cart' onClick={handleChangeCart}>
            <span>
              <BsCart3 />
            </span>
            <span>{size}</span>
          </div>
        </div>
      </nav >
    </>
  )
}

export default NavBar
