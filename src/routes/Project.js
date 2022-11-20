import React from 'react'

import Navbar from '../components/Navbar';
import HeroImgPro from '../components/HeroImgPro';
import Footer from '../components/Footer';
import Work from '../components/Work';


const Project = () => {
  return (
    <div>

      <Navbar/>
      <HeroImgPro heading="PROJECTS" text="Some of my most recents Works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
