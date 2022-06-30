import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { useNavigate } from "react-router-dom"
import { TiShoppingCart } from "react-icons/ti"
import { BasketMenu } from "../basket-menu/BasketMenu"
import { BasketBadge } from "../basket-badge/BasketBadge"
import { basketOnOff, basketOff, logoOff } from "../../store/slice/openClose"
import { setFilterDataDelete, setInputTextDelete } from "../../store/slice/searchFilter"
import { useAuth } from "../../hooks/use-auth"
import "./Basket.css"

export const Basket = () => {
    const items = useSelector(state => state.basket.itemsInBasket)
    const popover = useSelector(state => state.openClose.basketPopover)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isAuth } = useAuth()

    const handleClick = useCallback((e) => {
        e.stopPropagation()
        dispatch(basketOff())
        dispatch(logoOff())
        dispatch(setFilterDataDelete())
        dispatch(setInputTextDelete())
        if (isAuth) {
            navigate("/order")
        }

    }, [navigate])

    const openClosePopover = (e) => {
        e.stopPropagation()
        dispatch(basketOnOff())
        dispatch(logoOff())
        dispatch(setFilterDataDelete())
        dispatch(setInputTextDelete())
    }

    return (
        <div className='basket'>
            <BasketBadge quantity={items.length} />
            <TiShoppingCart size={25} className="basket-icon" onClick={(e) => openClosePopover(e)} />

            {popover && <BasketMenu items={items} onClick={(e) => handleClick(e)} />}
        </div>
    )
}
