import { Divider } from 'antd'
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className='container'>
                <Divider />
                <p className='footer-text'>
                    Easy Homes &copy; {currentYear} - All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default Footer