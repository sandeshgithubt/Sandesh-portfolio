import React from 'react'
import { Link } from 'react-router-dom'
import React1 from '../assets/react1.jpg'
import React2 from '../assets/react2.webp'
import './AboutContent.css'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I am React Front-end developer. I create
                a responsive secure websites for myself and Orgazination
            </p>

            <Link to="/contact">
                <button class="btn">Contact</button>
            </Link>
        </div>


        <div className='right'>

        <div className='img-container'>
            <div className='img-stack top'>
                <img src={React1} className="img" alt="done"/>
            </div>

            <div className='img-stack bottom'>
                <img src={React2} className="img" alt="done"/>
            </div>
        </div>

        </div>
      
    </div>
  )
}

export default AboutContent
