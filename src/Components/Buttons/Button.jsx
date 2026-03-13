import React from 'react'

const Button = ({ onClick, value }) => {
    return (
        <div className='button-container'>
            <button className='button' onClick={onClick}>{value}</button>
        </div>
    )
}

export default Button