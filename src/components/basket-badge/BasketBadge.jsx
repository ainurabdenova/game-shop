import React from 'react'
import "./BasketBadge.css"

export const BasketBadge = ({ quantity = 0 }) => {
    return (
        <>
            {quantity > 0 ?
                <div className='badge'>
                    {quantity}
                </div> : null
            }
        </>

    )
}
