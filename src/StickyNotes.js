import React from 'react'
import { useState } from 'react'
import './StickyNotes.css'
import TextArea from './TextArea'
const StickyNotes = () => {
     const [textinput,setTextInput] = useState([])

    const displayTextArea = (event) =>{
       setTextInput(textinput.concat(<TextArea key={textinput.length} />))
    }


  return (
    <div className='container'>
         <div className='note-container'>
        <h3 >Sticky Notes<i class="fa-solid fa-file-pen" onClick={displayTextArea}></i></h3>
        {textinput}
      
         </div>

    </div>
  )
}

export default StickyNotes