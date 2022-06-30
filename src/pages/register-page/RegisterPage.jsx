import React from 'react'
import { Link } from 'react-router-dom'
import { SignUp } from '../../components/sing-up/SignUp'
import "./RegisterPage.css"

export const RegisterPage = () => {
    return (
        <div className='sign-up-wrapper'>

            <SignUp />

            <p>
                У Вас уже есть аккаунт? <Link to="/login" className='text-sign-up-link'>Sign in</Link>

            </p>
        </div>
    )
}
