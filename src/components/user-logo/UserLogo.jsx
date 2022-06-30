import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsFillPersonCheckFill } from "react-icons/bs"
import { BsFillPersonDashFill } from 'react-icons/bs'
import { useAuth } from '../../hooks/use-auth'
import { AuthRegButton } from '../auth-reg-button/AuthRegButton'
import { logoOnOff, basketOff } from "../../store/slice/openClose"
import { setFilterDataDelete, setInputTextDelete } from "../../store/slice/searchFilter"
import "./UserLogo.css"

export const UserLogo = ({ size }) => {
    const dispatch = useDispatch()
    const popover = useSelector(state => state.openClose.logoPopover)
    const { isAuth } = useAuth()

    const handleClick = (e) => {
        e.stopPropagation()
        dispatch(logoOnOff())
        dispatch(basketOff())
        dispatch(setFilterDataDelete())
        dispatch(setInputTextDelete())
    }

    return (
        <div onClick={(e) => handleClick(e)} className="user_logo">
            {isAuth ? <BsFillPersonCheckFill size={size} /> : <BsFillPersonDashFill size={size} />}
            {popover ? <AuthRegButton /> : null}
        </div>
    )
}
