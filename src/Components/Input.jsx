import React, { useRef } from 'react'

const Input = ({ icon, iconClick = () => { }, label, onChange, type = "text", value }) => {
    const ref = useRef(null)
    const handleLabelClick = () => {
        if (ref.current) ref.current.focus()
    }

    return (
        <div className='input-container'>
            <input
                className='input'
                id="name"
                onChange={onChange}
                placeholder=''
                ref={ref}
                type={type}
                value={value} />
            <label className='placeholder' onClick={handleLabelClick}>{label}</label>
            <div className='input-icon' onClick={iconClick}>{icon}</div>
        </div>
    )
}

export default Input