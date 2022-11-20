import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImgPro from '../components/HeroImgPro';
import Forms from '../components/Forms';

const Contact = () => {
  return (
    <div>

      <Navbar/>
      <HeroImgPro heading="CONTACT" text="Lets have a chat"/>
      <Forms/>
      <Footer/>
      
    </div>
  )
}

export default Contact
