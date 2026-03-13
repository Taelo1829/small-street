import React from 'react'

const Button2 = ({ value, onClick }) => {
    return (
        <div className='button-2' onClick={onClick}>
            {value}
        </div>
    )
}

export default Button2