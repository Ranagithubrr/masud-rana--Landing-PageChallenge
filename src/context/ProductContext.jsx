// ProductCartContext.js
import { createContext, useEffect, useState } from 'react';

const ProductCartContext = createContext();
// eslint-disable-next-line
const ProductCartProvider = ({ children }) => {
    // cart products
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });
    // favorite products
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);   
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // add product to cart
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

    // remove product from cart
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };
    // reduce cart quantity
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

    // favourite product toggler
    const toggleFavorite = (product) => {
        if (favorites.find(item => item.id === product.id)) {
            setFavorites(favorites.filter(item => item.id !== product.id));
        } else {
            setFavorites([...favorites, product]);
        }
    };

    return (
        <ProductCartContext.Provider value={{ cart, addToCart, removeFromCart, reduceQuantity,favorites, toggleFavorite }}>
            {children}
        </ProductCartContext.Provider>
    );
};

export { ProductCartContext, ProductCartProvider };
