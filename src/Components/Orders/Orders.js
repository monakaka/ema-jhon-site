import React, { useState } from 'react';
import './Orders.css';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCardAlt } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {

    // useLoaderData fucntion works for getting data from loader in main 
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const removeHandler = id => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCartHandler = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='reviewItem-container'>
                {
                    cart.map(item => <ReviewItem
                        key={item.id}
                        item={item}
                        removeHandler={removeHandler}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    clearCartHandler={clearCartHandler}
                >
                    <Link className='review-checkout-btn-underline' to={'/checkout'}>
                        <button className='review-checkout-btn'>Proceed Checkout
                            <FontAwesomeIcon className='review-checkout-btn-icon' icon={faCreditCardAlt} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;