"use client";

import { createContext, useContext, useState } from "react";

interface CartItem extends Product {
    quantity: number;
}

interface CartContextProps {
    cartItem: CartItem[];
    addToCart: (product: Product) => void
    removeFromCart: (productId: string) => void
    updateQuantity: (productId: string, delta: number) => void
}

export const CartContext = createContext<
    CartContextProps | undefined
>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [cartItem, setCartItem] = useState<CartItem[]>([]);


    const addToCart = (product: Product) => {
        setCartItem((currentCart) => {
            const existingItem = currentCart.find(
                (item) => item._id === product._id
            );
            if (existingItem) {
                return currentCart.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...currentCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCartItem((currentCart) =>
            currentCart.filter((item) => item._id !== productId)
        );
    };

    const updateQuantity = (productId: string, delta: number) => {
        setCartItem((currentCart) =>
            currentCart.map((item) => {
                if (item._id === productId) {
                    const newQuantity = item.quantity + delta;
                    return newQuantity > 0
                        ? { ...item, quantity: newQuantity }
                        : item;
                }
                return item;
            })
        );
    };
    return (
        <CartContext.Provider
            value={{ cartItem, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error(
            "useCart must be used inside a CarProvider"
        );
    }
    return context;
};