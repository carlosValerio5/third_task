import { useEffect, useEffectEvent, useState } from 'react'
import type { ProductsQuantity } from './gifts'

export interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
}

type Props = {
    items?: CartItem[]
    onChange?: (items: CartItem[]) => void
    setItems: (items: ProductsQuantity[]) => void
    currentGifts?: ProductsQuantity[]
}

export default function Cart({ items = [], onChange, setItems, currentGifts }: Props) {
    const [itemsHash, setItemsHash] = useState<Record<string, CartItem>>({})
    const onHashChange = useEffectEvent((newHash: Record<string, CartItem>) => {
        setItemsHash(newHash);
    })

    useEffect(() => {
        const map: Record<string, CartItem> = {}
        items.forEach((it) => (map[it.id] = { ...it }))
        onHashChange(map)
    }, [items])

    const itemsList = Object.values(itemsHash)

    function removeItem(id: string) {
        if (currentGifts)
            setItems(currentGifts.map(gift => {
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
            onChange?.(arr)
            return next
        })
    }

    function clear() {
        setItems(currentGifts ? currentGifts.map(gift => ({ ...gift, quantity: 0 })) : [])
        setItemsHash({})
        onChange?.([])
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
            <ul className="cart-items">
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