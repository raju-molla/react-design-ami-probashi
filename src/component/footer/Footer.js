import { Facebook, LinkedIn, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='footer'>
            <div className='logo'>
                <img src='https://www.amiprobashi.com/probashi%20horizontal2%20tone_dark-01%20cut%20(2).png' />
            </div>
            <div className='social'>
                <div className='desc'>
                    <span>Copyright 2020. All rights reseverved.</span>
                </div>
                <div className='media'>
                    <Facebook className='icon' />
                    <LinkedIn className='icon' />
                    <Twitter className='icon' />
                    <YouTube className='icon'/>
                </div>
            </div>
            <div className='nitimala'>
                <span>গোপনীয়তার নীতিমালা</span>
            </div>
        </div>
    </div>
  )
}

export default Footer