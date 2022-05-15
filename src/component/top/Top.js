
import { Menu } from '@material-ui/icons'
import React, { useState } from 'react'
import {NavLink } from 'react-router-dom';
import {Link} from 'react-scroll'
import './top.css'

const Top = () => {
    const [isManu, setMenu] = useState(false);
  return (
    <div className='topContainer'>
        <div className='top'>
            <div className='topLeft'>
                <img src="https://www.amiprobashi.com/probashi%20horizontal2%20tone_dark-01%20(1).png" />
            </div>
            
            <div className={isManu?'topRight active':'topRight inactive'}>
                <ul>
                   <NavLink className='link'  to="/"><li>এজেন্সি পোর্টাল</li></NavLink> 
                   <NavLink className='link' to="/"><li>টিটিসি পোর্টাল</li></NavLink> 
                   <NavLink className='link' to="/about"><li>আমাদের সম্পর্কে</li></NavLink> 
                   <Link className='link' to="aboutus" smooth={true} duration={1000} ><li>যোগাযোগ</li></Link> 
                   <NavLink className='link' to="/"><li>ডাউনলোড</li></NavLink> 
                    
                </ul>
            </div>
            
            <div className='menu'>
                <Menu style={{fontSize: "50px"}}  className='hamburger' onClick={()=>setMenu(!isManu)} />
            </div>
        </div>
    </div>
  )
}

export default Top