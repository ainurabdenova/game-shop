import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuth } from '../../hooks/use-auth'
import { removeUser } from '../../store/slice/userSlice'
import "./AuthRegButton.css"

export const AuthRegButton = () => {
    const dispatch = useDispatch()
    const { isAuth } = useAuth()
    // console.log("->", isAuth);

    return (
        <div className='auth-reg-wrapper'>
            {
                isAuth == false ?
                    <div>
                        <span ><Link to="/login" className='signin-link-text'>SIGN IN</Link></span>
                        \ <span ><Link to="/register" className='signup-link-text'>SIGN OUT</Link></span>
                    </div>
                    :
                    <div onClick={() => dispatch(removeUser())} className='logout-link-text'>LOGOUT</div>
            }
        </div>
    )
}
