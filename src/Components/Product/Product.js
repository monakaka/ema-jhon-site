import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price, img, ratings, category } = props.product;
    console.log(props.product);
    return (
        <div className='product'>
            <img src={img} alt="Sorry for Unavailable." />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <p>Ratings: {ratings}</p>
            <p>Category: {category}</p>
        </div>
    );
};

export default Product;