import React from 'react';
import './BestSellers.css';
import { Link } from 'react-router-dom'
import { getProducts } from "../../services/products"
import { useEffect, useState } from "react"

const BestSellers = (props) => {

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()
      setAllProducts(products)
    }
    fetchProducts()
  }, [])

  const [allProducts, setAllProducts] = useState([])
  
  const topFour = allProducts.slice(0, 4)
  
  const bestSellersJSX = topFour.map((product, index) => {
    return (
      <Link className="product-cards" to={`/products/${product._id}`} key={index}>
        <img className="product-image" src={product.imgURL} alt={product.name} />
        <div className="product-name">{product.name}</div>
      </Link>
    )
  })

  return (
    <div className="best-sellers">
      <h1>Favorites</h1>
      <div className="best-images">{bestSellersJSX}</div>
    </div>
  )
}

export default BestSellers;