import { createContext } from 'react';

export const cart = new Map();

const cartContextDefault = {
    cart,
    cartSize: 0,
    addToCart: (mattress) => {},
    removeFromCart: (mattress, quantity) => {},
};

const CartContext = createContext(cartContextDefault);

export default CartContext;
