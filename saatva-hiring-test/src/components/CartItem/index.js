import { useContext } from 'react';
import CartContext from '../../contexts/cartContext';
import './styles.scss';

function CartItem({ mattress, quantity }) {
    const { removeFromCart } = useContext(CartContext);

    const formattedPrice = mattress.price.toLocaleString('en-us', {
        maximumFractionDigits: 2,
    });

    return (
        <div className="cart-item">
            <img
                src={mattress.imageFileName}
                className="cart-item-image"
                alt={`${mattress.name}`}
            />
            <div className="cart-item-info">
                <div className="cart-item-name">
                    {mattress.name} x{quantity}
                </div>
                <div className="cart-item-price">{`$${formattedPrice}`}</div>
                <div
                    className="cart-item-remove"
                    onClick={() => {
                        removeFromCart(mattress, quantity);
                    }}
                >
                    remove
                </div>
            </div>
        </div>
    );
}

export default CartItem;
