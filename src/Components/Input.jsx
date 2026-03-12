import React from 'react'

const Input = ({ label }) => {
    return (
        <div className='input-container'>
            <input type="text" id="name" placeholder='' className='input' />
            <label className='placeholder'>{label}</label>
        </div>
    )
}

export default Input