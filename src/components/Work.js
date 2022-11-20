import React from 'react'
import './WorkCards.css'
import WorkCards from './WorkCards'
import projectCardData from './WorkCardData'

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'> My Projects</h1>
        <div className='project-container'>

            {projectCardData.map((val, index) => {
                return(
                    <WorkCards
                    key = {index}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    text = {val.text}
                    view = {val.view}
                    source = {val.source}
                    />
                )
            })}
            
        </div>
    </div>
  )
}

export default Work;