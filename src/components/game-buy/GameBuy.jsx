import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../button/Button'
import { deleteItemFromBasket, setItemInBasket } from '../../store/slice/basket'
import "./GameBuy.css"

export const GameBuy = ({ game }) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.basket.itemsInBasket)
    const isItemInBasket = items.some(item => item.id === game.id);
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInBasket) {
            dispatch(deleteItemFromBasket(game.id))
        } else {
            dispatch(setItemInBasket(game))
        }

    }
    return (
        <div className='game-buy'>
            <span className='game-buy-price'>{game.price} tg.</span>

            <Button onClick={handleClick} type={isItemInBasket ? "secondary" : "primary"}>

                {isItemInBasket ? "Убрать из корзины" : "В Корзину"}

            </Button>

        </div>
    )
}
