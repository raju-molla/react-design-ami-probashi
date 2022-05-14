
import { Menu } from '@material-ui/icons'
import React from 'react'
import './top.css'

const Top = () => {
  return (
    <div className='topContainer'>
        <div className='top'>
            <div className='topLeft'>
                <img src="https://www.amiprobashi.com/probashi%20horizontal2%20tone_dark-01%20(1).png" />
            </div>
            
            <div className='topRight'>
                <ul>
                    <li>এজেন্সি পোর্টাল</li>
                    <li>টিটিসি পোর্টাল</li>
                    <li>আমাদের সম্পর্কে</li>
                    <li>যোগাযোগ</li>
                    <li>ডাউনলোড</li>
                </ul>
            </div>
            <Menu  className='hamburger' />
        </div>
    </div>
  )
}

export default Top