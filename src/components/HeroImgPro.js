import React from 'react'
import './HeroImgPro.css'

const HeroImgPro = ({heading , text}) => {
  return (
    <div className='hero-img'>
        <div className='heading'>

            <h1>{heading}</h1>
            <p>{text}</p>

        </div>
      
    </div>
  )
}

export default HeroImgPro
