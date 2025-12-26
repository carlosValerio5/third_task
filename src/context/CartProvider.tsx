import { useState } from 'react';
import { CartContext } from './GiftsContext';
import type { CartItem } from "../types/Cart";
import type { ProductsQuantity } from "../types/Products";
import Products from '../data/products.json';

export const GiftProvider = ({ children }: { children: React.ReactNode }) => {
    const [gifts, setGifts] = useState<CartItem[]>([]);
    const [products, setProducts] = useState<ProductsQuantity[]>(
        Products.map(product => ({ ...product, quantity: 0 }))
    );

    return (
        <CartContext.Provider value={{ gifts, setGifts, products, setProducts }}>
            {children}
        </CartContext.Provider>
    );
}
