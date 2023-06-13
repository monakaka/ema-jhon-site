import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoaders = async () => {
    const loaderProducts = await fetch('products.json');
    const products = await loaderProducts.json();
    console.log(products)

    const storeCart = getShoppingCart();

    const savedCart = [];
    console.log(savedCart);

    for (const id in storeCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storeCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    // if you want to send two things 
    // return [proudcts, savedcardt]
    // return {product, savecart}

    return savedCart;
}


export default cartProductLoaders;