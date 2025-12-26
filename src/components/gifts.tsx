import Card from "./card"
import Products from "../data/products.json"
import { useCartContext } from "../context/GiftsContext";
import { CartItemView } from "../types/Cart";

export default function Gifts() {
    const { setGifts, products } = useCartContext();

    const handleAddToCart = (cardId: string) => {
        // Find the product in the products array and increase its quantity
        const existingProduct = products.find((gift) => gift.cardId === cardId);
        if (existingProduct)
            existingProduct.quantity += 1;

        // Update the gifts state in the parent component
        let newGifts= products.map(gift => new CartItemView(gift.cardId, gift.title, gift.price, gift.quantity));
        newGifts = newGifts.filter(gift => gift.quantity > 0);
        setGifts(newGifts);
    };

    const handleRemoveFromCart = (cardId: string) => {
        // Find the product in the products array and decrease its quantity
        const existingProduct = products.find((gift) => gift.cardId === cardId);
        if (existingProduct && existingProduct.quantity > 0) {
            existingProduct.quantity -= 1;
        }
        // Update the gifts state in the parent component
        let newGifts= products.map(gift => new CartItemView(gift.cardId, gift.title, gift.price, gift.quantity));
        newGifts = newGifts.filter(gift => gift.quantity > 0);
        setGifts(newGifts);
    }

    return (
        <section className="gifts">
            <div className="gifts-content">
                <div className="gifts-text">
                    <p className="caption">Best Gifts</p>
                    <h2 className="header-2">Especially For You</h2>
                </div>
                <div className="gifts-cards">
                    {Products.map((product) => (
                        <Card 
                            key ={product.id}
                            imgSrc={product.imgSrc}
                            altText={product.altText}
                            category={product.category}
                            title={product.title}
                            cardId={product.cardId}
                            increaseQuantity={handleAddToCart}
                            decreaseQuantity={handleRemoveFromCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}