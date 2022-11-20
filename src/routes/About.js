import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImgPro from '../components/HeroImgPro';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>

      <Navbar/>
      <HeroImgPro heading="ABOUT" text="I am friendly Front-End Developer"/>
      <AboutContent/>
      <Footer/>
      
    </div>
  )
} 

export default About
