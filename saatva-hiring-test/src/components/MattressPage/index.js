import { useContext, useEffect, useState } from 'react';

import OptionToggle from '../OptionToggle';
import StarRating from '../StarRating';
import MattressContext from '../../contexts/selectedMattressContext';
import CartContext from '../../contexts/cartContext';

import './styles.scss';

function MattressPage() {
    const { currentMattress } = useContext(MattressContext);
    const { cart, addToCart } = useContext(CartContext);

    // adds commas and converts to a string
    const formattedPrice = currentMattress.price.toLocaleString('en-us', {
        maximumFractionDigits: 2,
    });

    const [addedToCart, setAddedToCart] = useState(cart.has(currentMattress));

    const handleAddToCart = () => {
        setAddedToCart(true);
        addToCart(currentMattress);
    };

    // Check if item is in cart when cart/mattress updates
    useEffect(() => {
        setAddedToCart(cart.has(currentMattress));
    }, [cart, currentMattress]);

    return (
        <div className="mattress-page">
            <img
                src={currentMattress.imageFileName}
                className="mattress-image"
                alt={`${currentMattress.name}`}
            />
            <div className="mattress-info">
                <h1 className="mattress-page-header">Choose Your Mattress</h1>
                <OptionToggle />
                <div className="mattress-name-and-price">
                    <div className="mattress-name">{currentMattress.name}</div>
                    <div className="mattress-price">{`$${formattedPrice}`}</div>
                </div>
                <div className="mattress-review-rating">
                    <StarRating
                        stars={currentMattress.reviewRating}
                        maxStars={5}
                        className="review-star-rating"
                        size={20}
                    />
                </div>
                <div className="add-to-cart" onClick={handleAddToCart}>
                    {addedToCart ? 'Added' : 'Add To Cart'}
                </div>
            </div>
        </div>
    );
}

export default MattressPage;
