import React from 'react'
import { useState } from 'react'
import { MdAddComment } from "react-icons/md";


function AddTodo({onNewItem}) {

  const [todoName, setTodoName] = useState("")
  const [dueDate, setDueDate] = useState("")

  let handleNameChange=(e)=>{
    setTodoName(e.target.value)

    
  }
  let handleDateChange=(e)=>{
    setDueDate(e.target.value)
  }
  let handleButtonClick=()=>{
    onNewItem(todoName,dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <>
    <div className='container'>
    < div className='item'>
    <div className="row">
    <div className="col-6"><input type='text' value={todoName} onChange={handleNameChange} placeholder='enter todo here'></input></div>
    <div className="col-4"><input type='date' value={dueDate} onChange={handleDateChange}></input></div>
    <div className="col-2 ">
    < button type="button" className="btn btn-success kg-button" onClick={handleButtonClick}> <MdAddComment />
</button> 
    </div>
</div>





  </div>

    </div>
   
    </>
  )
}

export default AddTodo