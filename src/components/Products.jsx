import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { products } from '../products'
import Product from './Product';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;







const Products = (cat, filter, sort) => {

const [pproducts, setPproducts] = useState([]);
const [filteredProducts, setfilteredProducts] = useState([]);

useEffect(() =>{

  const getProducts = async () => {

   
  }


}, [cat])


  return (
    <Container> 
        {products.map(item => (
            <Product item={item} key={item._id} />
        ))}
    </Container>
  )
}

export default Products