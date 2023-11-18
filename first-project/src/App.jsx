import React from 'react'
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'

function App() {

  const [todoItems, setTodoItems] = useState([])

  const handleNewItem=(itemName,itemDueDate)=>{
    console.log(`new item added ${itemName} date:${itemDueDate}`)
    const newTodoItem=[
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },

    ]
    setTodoItems(newTodoItem)

  }
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
    <center className='todo-container'>
    <AppName></AppName>
    
    <div className='item-container'>
    <AddTodo onNewItem={handleNewItem}/> 
    {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
    <TodoItems todoItems={todoItems}
      onDeleteClick={handleDeleteItem}

    ></TodoItems>


    </div>
    

    </center>
   
    </>
  )
}

export default App