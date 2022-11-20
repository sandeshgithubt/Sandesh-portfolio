import './Footer.css';
import {FaHome, FaMailBulk, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'
import React from 'react'


const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight:"32px"}}/>

                    <div>
                        <p>53, Chitnis Nagar, Umred Road, Nagpur</p>
                        <p>India</p>
                    </div>
                </div>

                    <div className='phone'>
                        <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight:"32px"}}/>
                        8390420561
                        </h4>
                    </div>

                    <div className='email'>
                        <h4>
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" rel="noopener noreferrer" target="_blank">
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"32px"}}/>
                        
                        sandeshtitarmare3@gmail.com
                        </a>
                        </h4>
                    </div>
            </div>

            <div className='right'>
                <h4>About Me</h4>
                <p>I am passionate Developer from India and enthusiastic about Coding and  Web Development.</p>
                
                <div className='social'>
                    <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                  <FaFacebook size={30} style={{color:"#fff", marginRight:"16px"}}/>
                  </a>

                  <a href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                  <FaTwitter size={30} style={{color:"#fff", marginRight:"16px"}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/sandesh-titarmare-178632232/" rel="noopener noreferrer" target="_blank">
                  <FaLinkedin size={30} style={{color:"#fff", marginRight:"16px"}}/>
                  </a>

                  <a href="https://github.com/sandeshgithubt" rel="noopener noreferrer" target="_blank">
                  <FaGithub size={30} style={{color:"#fff", marginRight:"16px"}}/>
                  </a>

                </div> 
            </div>
        </div>
        
    </div>
  )
}

export default Footer
