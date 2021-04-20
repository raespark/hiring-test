import React, { useContext, useEffect, useState } from 'react';
import { ShoppingCart } from 'react-feather';
import { ReactSVG } from 'react-svg';

import CartContext from '../../contexts/cartContext';
import CartItem from '../CartItem';

import './styles.scss';

// svg and favicon taken from saatva website
function CartHeader() {
    const [showCart, setShowCart] = useState(false);
    const { cartSize, cart } = useContext(CartContext);

    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        let newTotal = 0;

        cart.forEach((quantity, mattress) => {
            newTotal += mattress.price * quantity;
        });

        setCartTotal(newTotal);
    }, [cart, cartSize]);

    return (
        <header className="cart-header">
            <ReactSVG src="logo.svg" className="logo" alt="logo" />
            <div className="cart-container">
                {cartSize > 0 && (
                    <div className="cart-bubble">
                        <div className="cart-number">{cartSize}</div>
                    </div>
                )}
                <ShoppingCart
                    className="cart-icon"
                    height={30}
                    width={30}
                    onClick={() => {
                        console.log('why');
                        setShowCart(true);
                    }}
                />
                {showCart && (
                    <>
                        <div className="cart-menu">
                            <h3 className="cart-title">Your Cart</h3>
                            {cartSize > 0 ? (
                                <>
                                    {Array.from(cart.keys()).map(
                                        (cartItem, index) => (
                                            <div key={index}>
                                                <hr />
                                                <CartItem
                                                    mattress={cartItem}
                                                    quantity={cart.get(
                                                        cartItem
                                                    )}
                                                />
                                            </div>
                                        )
                                    )}
                                </>
                            ) : (
                                <>
                                    <hr />
                                    <div className="empty-cart">
                                        Your cart is empty :(
                                    </div>
                                </>
                            )}
                            <hr />
                            <h3 className="cart-total">
                                Total:{' '}
                                <span className="cart-total-amount">
                                    $
                                    {cartTotal.toLocaleString('en-us', {
                                        maximumFractionDigits: 2,
                                    })}
                                </span>
                            </h3>
                        </div>
                        <div
                            className="page-overlay"
                            onClick={() => {
                                setShowCart(false);
                            }}
                        />
                    </>
                )}
            </div>
        </header>
    );
}

export default CartHeader;
