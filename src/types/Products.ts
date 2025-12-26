import Products from '../data/products.json';

export type ProductsQuantity = typeof Products[number] & {quantity : number};