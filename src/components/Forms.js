import React from 'react'
import './Forms.css'

const Forms = () => {
  return (
    <div className='form'>

        <form>
            <label>Your Name</label>
            <input type="text"/>

            <label>Email</label>
            <input type="email"/>

            <label>Subject</label>
            <input type="text"/>

            <label>Your Name</label>
           <textarea rows="6" placeholder="Type Your Messeage Here" />

           <button className='btn'>Submit</button>
        </form>
      
    </div>
  )
}

export default Forms
