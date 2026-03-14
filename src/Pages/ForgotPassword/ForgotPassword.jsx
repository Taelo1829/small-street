import React from 'react'
import Back from '../../Components/Back'
import Input from '../../Components/Input'
import Button from '../../Components/Buttons/Button'
import OR from '../../Components/OR'
import Google from '../Login/Google'

const ForgotPassword = () => {
    return (
        <div className='forgot-password'>
            <Back />
            <div className='px-2'>
                <div>
                    <h2>Find your account</h2>
                    <p>Enter your email or username.</p>
                </div>
                <div className='email'>
                    <Input label="Email or username" />
                    <Button value="Continue" />
                </div>
                <Google reverse />
            </div>
        </div>
    )
}

export default ForgotPassword