import React from 'react'
import { useSelector } from 'react-redux'
import { OrderItem } from "../../components/order-item/OrderItem"
import { calcTotalPrice, enumerate } from '../../utils'
import "./OrderPage.css"

export const OrderPage = () => {
    const items = useSelector(state => state.basket.itemsInBasket)
    if (items.length < 1) {
        return <h1 className="order-page-title">Ваша корзина пуста...</h1>
    }
    return (
        <div className='order-page'>
            <div className="order-page_total-price">
                <span className="order-page-title">
                    {items.length} {enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму   {calcTotalPrice(items)} tg
                </span>
            </div>
            <div className="order-page_left">
                {items.map(game => <OrderItem game={game} key={game.title} />)}
            </div>

        </div>
    )
}
