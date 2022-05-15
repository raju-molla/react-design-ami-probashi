import React from 'react'
import './card.css'
import {data} from '../data/data'

const Card = () => {
    // console.log(data[0].title);
  return (
    <div className='cardContainer' id='aboutus'>
        <div className='card'>
            {
                data.map(ele=>(
                    <div className='cardItem'>
                        <img src={`${ele.img}`} />
                        <div className='CardDesc'>
                            <h4><b>{`${ele.title}`}</b></h4> 
                            <p>{`${ele.desc}`}</p>
                        </div>
                    </div>

                ))
            }
            
        </div>
        <div className='communication'>
            <h2>যোগাযোগ</h2>
            <span>+88 01709647281, +88 01713652942</span>
            <span className='email'>support@amiprobashi.com</span>
        </div>

    </div>
  )
}

export default Card