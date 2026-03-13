import React, { useEffect, useState } from 'react'
import Button2 from '../../Components/Buttons/Button2'
import GoogleText from './GoogleText'
import { useGoogleLogin } from '@react-oauth/google'
import { jwtDecode } from "jwt-decode";

const Google = () => {
    const [tokenResponse, setTokenResponse] = useState({})

    const login = useGoogleLogin({
        onSuccess: tR => setTokenResponse(tR),
        onError: error => console.log('Login Failed:', error)
    })

    const handleSuccess = (credentialResponse) => {
        const user = jwtDecode(credentialResponse.credential);
        console.log(user);
    };

    useEffect(() => {
        handleSuccess(tokenResponse)
    }, [tokenResponse])

    return (
        <div>
            <Button2 value={<GoogleText />} onClick={login} />
            <div className='or'>
                <hr />
                <div className='text'>OR</div>
            </div>
        </div>
    )
}

export default Google