import React from 'react';
import './ProductCards.css';
import { Link } from 'react-router-dom'

const ProductCards = (props) => {
    return (
        <>
            <Link className="product-cards" to={`/products/${props._id}`}>
                <img className="product-image" src={props.imgURL} alt={props.name} />
                <div className="product-name">{props.name}</div>
                <div className="product-price">{`${props.price}`}</div>
            </Link>
        </>
    )
}

export default ProductCards