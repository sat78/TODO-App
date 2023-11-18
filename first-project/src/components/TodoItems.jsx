import React from 'react'
import TodoItem from './TodoItem'
const TodoItems=({todoItems,onDeleteClick})=> {
  

  return (
    <>
      {todoItems.map((item)=>(
      
        <TodoItem
        todoDate={item.dueDate}
        todoName={item.name}
        onDeleteClick={onDeleteClick}         
        /> 

      ))}

   
        


      

      

    </>
  );
}

export default TodoItems