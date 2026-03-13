import React from 'react'
import Logo from './Logo'
import Input from '../../Components/Input'
import Button from '../../Components/Buttons/Button'
import Google from './Google'
import Button3 from '../../Components/Buttons/Button3'

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
                    <p >Forgot password?</p>
                </div>
            </div>
            <div className='bg-primary'>
                <Button3 value="Sign up" />
            </div>
        </div>
    )
}

export default Login