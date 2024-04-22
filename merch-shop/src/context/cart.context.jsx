import { createContext, useState } from 'react';

export const CartContext = createContext({
    isCartOper: false,
    setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = { isCartOpen, setIsCartOpen };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
