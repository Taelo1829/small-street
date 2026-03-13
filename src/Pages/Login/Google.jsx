import React from 'react'
import Button2 from '../../Components/Buttons/Button2'
import GoogleText from './GoogleText'

const Google = () => {
    return (
        <div>
            <Button2 value={<GoogleText />} />
            <div className='or'>
                <hr />
                <div className='text'>OR</div>
            </div>
        </div>
    )
}

export default Google