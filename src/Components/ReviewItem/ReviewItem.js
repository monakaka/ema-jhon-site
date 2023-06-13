import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const ReviewItem = ({ item, removeHandler }) => {
    const { id, img, name, quantity, price } = item;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-info'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span> </p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button className='delete-btn'>
                <FontAwesomeIcon onClick={() => removeHandler(id)} className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;