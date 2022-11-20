import React from 'react'
import './HeroImg.css'
import background from '../assets/background.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>

        <div className='mask'>
            <img src={background} alt="img" className='into-img'/>
        </div>

        <div className='content'>
            <p>Hi ! I'M Sandesh Titarmare</p>
            <h1>SDE Frontend <br/> React Developer </h1>
        

            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>

        </div>
      
    </div>
  )
}

export default HeroImg
