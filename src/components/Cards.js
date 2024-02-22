import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

function Cards({ searchTitle, handleClickAmazon }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchProduct();
  }, []);



  const filteredProducts = searchTitle.trim() === "" ? products : products.filter((product) =>
    product.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          {filteredProducts.map((product, index) => (
            <div key={index} className="col-xs-12 col-md-3">
              <div className="mt-5 cardContainer" style={{ width: '18rem', margin: 'auto' }}>
                <Card className="border-0">
                  <Link to={`/cardSingle/${product.id}`}> <Card.Img variant="top" src={product.image} style={{ height: '350px' }} className="cardImage" />   </Link>
                  <Card.Body>
                    <Card.Title className="cardTitle">{product.title}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Button variant="primary" onClick={() => handleClickAmazon(product)}>Add To Cart</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment >
  )
}

export default Cards
