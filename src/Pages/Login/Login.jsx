import React, { useState } from 'react'
import Logo from './Logo'
import Input from '../../Components/Input'
import Button from '../../Components/Buttons/Button'
import Google from './Google'
import Button3 from '../../Components/Buttons/Button3'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVisible, setPasswordVisible] = useState(false)

    const changePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    const clearUsername = () => {
        setUsername("")
    }

    return (
        <div className="login">
            <div>
                <Logo />
            </div>
            <div>
                <Google />
                <Input
                    icon={"X"}
                    iconClick={clearUsername}
                    label="Username, email or mobile number"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} />
                <Input
                    icon={<i className={'fa fa-eye' + (!passwordVisible ? "-slash" : "")}></i>}
                    iconClick={changePasswordVisibility}
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    type={!passwordVisible ? "password" : ""}
                    value={password} />
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