import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    // const cart = props.cart; //option one:
    // const { cart } = props; //option two:

    //if i use option one and two i need to use props in Cart function.
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        // alternative solution
        // product.quantity = product.quantity || 1;
        // another alternative and proper way 
        // you get it on Shop.js under the addToCart fucntion

        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping;
        quantity += product.quantity;
    }

    let tax = totalPrice * 7 / 100;
    let grandTotalPrice = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h5 style={{ textAlign: 'center' }}>Order Summary</h5>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${grandTotalPrice}</h6>
        </div>
    );
};

export default Cart;