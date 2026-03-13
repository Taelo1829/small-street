import React from 'react'
import Button from '../../Components/Buttons/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='not-found'>
            <div className='back' onClick={() => navigate(-1)}>
                <i className='fa fa-arrow-left'></i>
            </div>
            <div>
                <i className='fa fa-exclamation-circle fa-3x'></i>
            </div>
            <div className='text-center'>
                <h3>Page  isn't available right now</h3>
                <p>Oops! We can’t seem to find the page you’re looking for. It might have been moved or deleted. Try heading back to the homepage.</p>
            </div>
            <div className='bottom'>
                <Button value={"Go Home"} onClick={() => navigate("/")} />
            </div>
        </div>
    )
}

export default NotFound