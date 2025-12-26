import { useEffect, useEffectEvent, useState } from 'react'
import { useCartContext } from '../context/GiftsContext'
import type { CartItem } from '../types/Cart'

export default function Cart() {
    const { gifts, setGifts, products, setProducts } = useCartContext();
    const [itemsHash, setItemsHash] = useState<Record<string, CartItem>>({})
    const onHashChange = useEffectEvent((newHash: Record<string, CartItem>) => {
        setItemsHash(newHash);
    })

    useEffect(() => {
        const map: Record<string, CartItem> = {}
        gifts.forEach((it) => (map[it.id] = { ...it }))
        onHashChange(map)
    }, [gifts])

    const itemsList = Object.values(itemsHash)

    function removeItem(id: string) {
        if (products)
            setProducts(products.map(gift => {
                if (gift.cardId === id) {
                    return { ...gift, quantity: 0 }
                }
                else {
                    return gift
                }
            }))
        

        setItemsHash((prev) => {
            if (!prev[id]) return prev
            const next = { ...prev }
            delete next[id]
            const arr = Object.values(next)
            setGifts?.(arr)
            return next
        })
    }

    function clear() {
        setProducts(products ? products.map(gift => ({ ...gift, quantity: 0 })) : [])
        setItemsHash({})
        setGifts?.([])
    }

    const total = itemsList.reduce((s, it) => s + it.price * it.quantity, 0)

    if (itemsList.length === 0) {
        return (
            <div className="cart empty-cart">
                <h2 className="header-2">Your Cart is Empty</h2>
                <p className="paragraph">Add some magical gifts to your cart!</p>
            </div>
        )
    }

    return (
        <div className="cart">
            <h2 className="header-2">Your Cart</h2>
            <ul className="cart-gifts">
                {itemsList.map((item) => (
                    <li key={item.id} className="cart-item">
                        <div className="cart-item-left">
                            <div className="item-name">{item.name}</div>
                            <div className="item-quantity">Quantity: {item.quantity}</div>
                        </div>
                        <div className="cart-item-right">
                            <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>
                            <button className="remove-button" onClick={() => removeItem(item.id)}>
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="cart-total">
                <span className="total-label">Total:</span>
                <span className="total-amount">${total.toFixed(2)}</span>
            </div>

            <div className="cart-actions">
                <button className="clear-button" onClick={clear}>
                    Clear cart
                </button>
            </div>
        </div>
    )
}