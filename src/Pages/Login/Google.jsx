import React from 'react'
import Button2 from '../../Components/Buttons/Button2'
import GoogleText from './GoogleText'
import { useGoogleLogin } from '@react-oauth/google'
import OR from '../../Components/OR'

const Google = () => {
    const login = useGoogleLogin({
        onSuccess: tR => getUserData(tR.access_token),
        onError: error => console.log('Login Failed:', error)
    })

    const getUserData = async (token) => {
        try {
            const response = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error('Failed to fetch user data');
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <Button2 value={<GoogleText />} onClick={login} />
            <OR />
        </div>
    )
}

export default Google