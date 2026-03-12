import React from 'react'
import Logo from './Logo'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Google from './Google'

const Login = () => {
    return (
        <div className="login">
            <div>
                <Logo />
            </div>
            <div>
                <Google />
                <Input label="Username, email or mobile number" />
                <Input label="Password" />
                <Button value="Log in" />
                <div className='forgot-password'>
                    <text >Forgot password?</text>
                </div>
            </div>
        </div>
    )
}

export default Login