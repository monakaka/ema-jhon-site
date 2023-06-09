import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const storeCart = getShoppingCart();
        console.log(storeCart);

        const savedCart = [];
        // step one get id 
        for (const id in storeCart) {
            // step two get product by using id 
            const addedProduct = products.find(product => product.id === id);
            // step 3 to get quantity for product
            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                // step 4 to added product in savedCart array 
                savedCart.push(addedProduct);
            }
            setCart(savedCart);
            console.log(addedProduct);
        }
    }, [products])

    const addToCart = (product) => {

        // const newCart = [...cart, product]
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity += 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }


        setCart(newCart);
        addToDb(product.id);
    }
    const clearCartHandler = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    clearCartHandler={clearCartHandler}
                >
                    <Link className='review-checkout-btn-underline' to={"/orders"}>
                        <button className='review-checkout-btn'>Review Order
                            <FontAwesomeIcon className='review-checkout-btn-icon' icon={faArrowAltCircleRight} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;