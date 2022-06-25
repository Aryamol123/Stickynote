import React,{useState} from 'react'
import './TextArea.css'
const TextArea = () => {
     const [input,setInput] = useState(" ")
     const [items,setItems] = useState([])
    
       const onSubmitHandler =(event) =>{
        event.preventDefault();
      
         if(input.trim().length === 0){
          return;
         }
         setItems([...items,input])

       }

     const onHandleChange =(event) =>{
           setInput(event.target.value)  
     }
    const deleteNote = (key) =>{
      setItems(items.filter((data,index) => index != key))
    }

     var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var d = new Date();
var dayName = days[d.getDay()];

var month = ['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec'];

var monthName = month[d.getMonth()];
     const date = `Created:  ${dayName} ${monthName} ${d.getDate()} ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  return (
    
    <div className='textarea-container'>
      <div className='alert alert-dismissible ' role="alert" id='alert-btn'>
        <form className='form-input' onSubmit={onSubmitHandler}>
         
          <textarea name="" id="" cols="20" rows="8" placeholder='Enter new note...' onChange={onHandleChange} ></textarea>
        <button className='save'>Save</button>
          <button className='btn-close' data-bs-dismiss="alert" ></button>
          </form>
    
     </div>
     <div>
     <ul>
     {
        items.map((item,index)=>
          {
            return (
              <div className='list-item'>
                <li>{item}<i className="fa-solid fa-trash-can" onClick={()=>deleteNote(index)}></i></li>
                <br />
                <p>{date.toString()}</p>
              </div>
            )
          } 
          )

      }
     </ul>
     </div>
    </div>
  )
}

export default TextArea