import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/CardSingle.css';
import { TfiLocationPin } from "react-icons/tfi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import StarRatings from 'react-star-ratings';




function CardSingle() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-4'>
            <div className='cardImgSingle'>
              <img className='container-fluid itemIimg' src={item.image} alt={item.title}></img>
            </div>
          </div>
          <div className='col-4'>
            <div className='rightCardSingle mx-5 mt-5'>
              <div className='rightCardSingle-bottom'>
                <p style={{ fontSize: '30px', fontWeight: '700', color: '#007185' }}>Brand : US Polo</p>
                <p className='itemTitle'>{item.title}</p>
                <div style={{ display: "flex" }}>
                  <StarRatings
                    rating={item.rating?.rate}
                    starRatedColor='orange'
                    numberOfStars={5}
                    starDimension='40px'
                    name='rating'
                  />
                </div>
                <p className='itemDesc'>{item.description}</p>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='cardSingleBox mx-3 mt-5'>
              <div>
                <p className='itemPrice'><sup><LiaRupeeSignSolid /></sup>{item.price}</p>
                <p className='itemDelivery'><span style={{ color: "#007185" }}>FREE delivery </span><span>22-27 February</span></p>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: '20px' }}>
                  <TfiLocationPin style={{ fontSize: "20px" }} />
                  <p style={{ margin: "0", marginLeft: "5px" }}>
                    Delivering to Bhopal 462001
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <p>Ships from</p>
                  <p>Amazon</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <p>Sold by</p>
                  <p>Heart Beat Gallery</p>
                </div>
                <div className='singleCardBtn'>
                  <button className='btn btn-warning'>Add to Cart</button>
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default CardSingle
