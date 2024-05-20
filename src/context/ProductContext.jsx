// ProductCartContext.js
import { createContext, useState } from 'react';

const ProductCartContext = createContext();

const ProductCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };
    const reduceQuantity = (productId) => {
        setCart((prevCart) => {
            return prevCart
                .map(item => {
                    if (item.id === productId) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                })
                .filter(item => item.quantity > 0);
        });
    }

    return (
        <ProductCartContext.Provider value={{ cart, addToCart, removeFromCart,reduceQuantity }}>
            {children}
        </ProductCartContext.Provider>
    );
};

export { ProductCartContext, ProductCartProvider };
