export interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
}

export class CartItemView implements CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;

    constructor(id: string, name: string, price: number, quantity: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
