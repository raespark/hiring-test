import CartHeader from './components/CartHeader';
import MattressPage from './components/MattressPage';

import MattressContext from './contexts/selectedMattressContext';
import mattressData from './mattresses.json';

import './App.scss';
import { useState } from 'react';
import CartContext, { cart } from './contexts/cartContext';

function App() {
    const mattressList = Object.values(mattressData.mattresses);
    const [currentMattressIndex, setCurrentMattressIndex] = useState(0);
    const [currentMattress, setCurrentMattress] = useState(mattressList[0]);
    const [cartSize, setCartSize] = useState(cart.size);

    const setSelectedMattress = (index) => {
        setCurrentMattressIndex(index);
        setCurrentMattress(mattressList[index]);
    };

    const addToCart = (mattress) => {
        setCartSize(cartSize + 1);
        if (cart.has(mattress)) {
            cart.set(mattress, cart.get(mattress) + 1);
        } else {
            cart.set(mattress, 1);
        }
    };

    const removeFromCart = (mattress, quantity) => {
        setCartSize(cartSize - quantity);
        cart.delete(mattress);
    };

    return (
        <div className="App">
            <CartContext.Provider
                value={{ cartSize, cart, addToCart, removeFromCart }}
            >
                <CartHeader />
                <MattressContext.Provider
                    value={{
                        mattressList,
                        currentMattressIndex,
                        currentMattress,
                        setSelectedMattress,
                    }}
                >
                    <MattressPage />
                </MattressContext.Provider>
            </CartContext.Provider>
        </div>
    );
}

export default App;
