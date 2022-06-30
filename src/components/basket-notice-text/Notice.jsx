import React from 'react'
import { Link } from 'react-router-dom'
import "./Notice.css"

export const Notice = () => {
    return (
        <div className='notice-wrapper'>
            <span className='notice-text'>
                Чтобы оформить зарегистрируйтесь
                <span className='notice-text-link'><Link to="/login" className='notice-text-in'>SIGN IN</Link>\
                    <Link to="/register" className='notice-text-out'>SIGN UP</Link></span>

            </span>
        </div>
    )
}
