import React, { useState } from 'react';
import './Orders.css';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {

    // useLoaderData fucntion works for getting data from loader in main 
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const removeHandler = id => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    console.log(savedCart)
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
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;