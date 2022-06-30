import React from 'react'
import { useAuth } from "../../hooks/use-auth"
import { calcTotalPrice } from '../../utils'
import { Button } from "../button/Button"
import { BasketMenuItem } from '../basket-menu-item/BasketMenuItem'
import { Notice } from "../basket-notice-text/Notice"
import { useDispatch } from 'react-redux'
import { deleteAllItem } from "../../store/slice/basket"
import "./BasketMenu.css"


export const BasketMenu = ({ items, onClick }) => {
    const { isAuth } = useAuth()
    const dispatch = useDispatch()

    const handleClick = (e) => {
        dispatch(deleteAllItem())
    }
    return (
        <div className='basket-menu'>
            <div className="basket-menu_games-list">
                {
                    items.length > 0 ? items.map(game => <BasketMenuItem key={game.title} game={game} />) : "Корзина пуста"
                }
            </div>
            {
                items.length > 0 ?
                    <div className='basket-menu_arrange'>
                        <div className='basket-menu_total-price'>
                            <span>Итого:</span>
                            <span>{calcTotalPrice(items)} tg</span>
                        </div>
                        <div className='basket-menu_delete-all'>
                            <Button type="primary" size='m' onClick={handleClick}>Отчистить корзину</Button>
                        </div>
                        {isAuth ? <Button type="primary" size="m" onClick={onClick}>Оформить заказ</Button> :
                            <Notice />}
                    </div>
                    : null
            }
        </div >
    )
}
