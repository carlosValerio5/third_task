import { createContext, useContext } from "react";
import type { CartItem } from "../types/Cart";
import type { ProductsQuantity } from "../types/Products";

export interface CartContext {
    gifts: CartItem[];
    setGifts: React.Dispatch<React.SetStateAction<CartItem[]>>;
    products: ProductsQuantity[];
    setProducts: React.Dispatch<React.SetStateAction<ProductsQuantity[]>>;
}

export const CartContext = createContext<CartContext | undefined>(undefined);

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a GiftProvider");
    }
    return context;
}
