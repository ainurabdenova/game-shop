import React from 'react'
import { Link } from 'react-router-dom'
import { Signin } from '../../components/sign-in/Signin'
import "./LoginPage.css"

export const LoginPage = () => {
    return (
        <div className='sign-in-wrapper'>
            <Signin />
            <p>
                Регистрация <Link to="/register" className='text-sign-in-link'>SIGN UP</Link>
            </p>

        </div>
    )
}
