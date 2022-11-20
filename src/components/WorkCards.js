import React from 'react'
import './WorkCards.css'

const WorkCards = (props) => {
  return (

            <div className='project-card'>
                <img src={props.imgsrc} alt="imgpro"/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>

                    <div className='pro-btns'>
 
                        <div>
                        <a href={props.view} rel="noopener noreferrer" target="_blank" className="btn">
                        VIEW
                        </a>
                        </div>

                        <div>
                        <a href={props.source} rel="noopener noreferrer" target="_blank" className="btn">
                        SOURCE
                        </a>
                        </div>
                    </div>
                </div>
            </div>
      
  )
}

export default WorkCards
