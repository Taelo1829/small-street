import React from 'react'

const Button3 = ({ onClick, value }) => {
    return (
        <div className='button-container' onClick={onClick}>
            <div className='button-3'>
                {value}
            </div>
        </div>
    )
}

export default Button3