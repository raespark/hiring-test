import { useContext, useEffect, useState } from 'react';

import OptionToggle from '../OptionToggle';
import MattressContext from '../../contexts/selectedMattressContext';
import CartContext from '../../contexts/cartContext';

import './styles.scss';
import StarRating from '../StarRating';

function MattressPage() {
    const { currentMattress } = useContext(MattressContext);
    const { cart, addToCart } = useContext(CartContext);

    const formattedPrice = currentMattress.price.toLocaleString('en-us', {
        maximumFractionDigits: 2,
    });

    const [addedToCart, setAddedToCart] = useState(cart.has(currentMattress));

    const handleClick = () => {
        setAddedToCart(true);
        addToCart(currentMattress);
    };

    useEffect(() => {
        setAddedToCart(cart.has(currentMattress));
    }, [cart, currentMattress]);

    console.log(currentMattress);

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
                <div className="add-to-cart" onClick={handleClick}>
                    {addedToCart ? 'Added' : 'Add To Cart'}
                </div>
            </div>
        </div>
    );
}

export default MattressPage;
