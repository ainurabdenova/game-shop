import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { deleteItemFromBasket } from '../../store/slice/basket'
import { setCurrentGame } from '../../store/slice/games'
import { basketOff, logoOff } from "../../store/slice/openClose"
import "./BasketMenuItem.css"

export const BasketMenuItem = ({ game }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleDeleteClick = () => {
        dispatch(deleteItemFromBasket(game.id));
    };
    const handleClick = (e) => {
        e.stopPropagation()
        dispatch(setCurrentGame(game))
        dispatch(basketOff())
        dispatch(logoOff())
        navigate(`/app/${game.title}`)
    }

    return (
        <div className='basket-menu-item' onClick={(e) => handleClick(e)}>
            <span className='basket-menu-item_title'>{game.title}</span>
            <div className='basket-menu-item_price'>
                <span>{game.price} tg</span>
                <MdDeleteForever
                    size={18}
                    className="basket-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div>
    )
}
