import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { name, price, img, ratings, seller } = props.product;

    const addToCart = props.addToCart;
    return (
        <div className='product'>
            <img src={img} alt="Sorry for Unavailable." />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <p>Manufacture: {seller}</p>
                <p>Ratings: {ratings} Starts</p>
            </div>
            <button onClick={() => addToCart(props.product)} className='add-cart-btn'>
                Add to cart  <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;