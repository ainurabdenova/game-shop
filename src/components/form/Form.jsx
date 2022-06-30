import React, { useState } from 'react'
import "./Form.css"

export const Form = ({ title, handleClick }) => {

    const [email, SetEmail] = useState('')
    const [pass, setPass] = useState('')
    console.log(email, pass);
    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
                placeholder="email"
            />
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password" />
            <button
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>
        </div>
    )
}
