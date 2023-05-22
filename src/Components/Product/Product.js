import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price, img, ratings, seller } = props.product;
    console.log(props.product);
    return (
        <div className='product'>
            <img src={img} alt="Sorry for Unavailable." />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <p>Manufacture: {seller}</p>
                <p>Ratings: {ratings} Starts</p>
            </div>
            <button className='add-cart-btn'>Add to cart</button>
        </div>
    );
};

export default Product;