interface CardProps {
    imgSrc: string;
    altText: string;
    category: string;
    title: string;
    cardId?: string;
    increaseQuantity?: (cardId: string) => void;
    decreaseQuantity?: (cardId: string) => void;
}

export default function Card({imgSrc, altText, category, title, cardId, increaseQuantity, decreaseQuantity}: CardProps) {
    return (
        <div className="card" id={cardId}>
            <div className="card-image">
                <img src={`assets/${imgSrc}`} alt={altText} />
            </div>
            <div className="card-container">
                <h4 className="header-4">{category}</h4>
                <h3 className="header-3">{title}</h3>
                <div className="buttons">
                    <button onClick={() => increaseQuantity && cardId && increaseQuantity(cardId)}>+</button>
                    <button onClick={() => decreaseQuantity && cardId && decreaseQuantity(cardId)}>-</button>
                </div>
            </div>
        </div>
    )
}