import React from 'react'
import { useDispatch } from "react-redux"
import { GameCover } from "../game-cover/GameCover"
import { MdDeleteForever } from 'react-icons/md'
import { deleteItemFromBasket } from "../../store/slice/basket"
import "./OrderItem.css"

export const OrderItem = ({ game }) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteItemFromBasket(game.id))
    }

    return (
        <div className='order-item'>
            <div className="order-item_cover">
                <GameCover image={game.image} />
            </div>
            <div className="order-item_title">
                <span>{game.title}</span>
            </div>
            <div className='order-item_price'>
                <span>{game.price} tg</span>
                <MdDeleteForever
                    className='basket-item_delete-icon'
                    size={25}
                    onClick={handleClick} />
            </div>
        </div>
    )
}
