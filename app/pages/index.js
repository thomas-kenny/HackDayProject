import {React, useState, useEffect} from 'react'
import {Text} from 'react-native'
import TodoList from '../components/TodoList'
import TodoListForm from '../components/TodoListForm'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    completed: false
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    completed: false
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    completed: true
  },
];

export default function TodoIndex() {
  const [todoList, setTodoList] = useState([])
  useEffect(() => {
    setTodoList(DATA)
  }, [])

  const addTask = (title) => {
    const copy = [...todoList]
    copy.push({title, id: Math.random(), completed: false});
    setTodoList(copy)
  }

  const deleteTask = (item) => {
    const copy = [...todoList]
    // console.log(copy)
    const itemIndex = copy.findIndex(prevItem => prevItem.id === item.id)
    copy.splice(itemIndex, 1)
    setTodoList(copy)
  }

  return (
    <>
    <TodoList 
      todoList={todoList} 
      handleClick={(item) => {
        setTodoList(prevState => {
          const itemToChangeIndex = prevState.findIndex(prevToDoItem => prevToDoItem.id === item.id)
          const newState = [...prevState]
          newState[itemToChangeIndex].completed = !prevState[itemToChangeIndex].completed
          return newState
        })
      }}
      handleDelete={deleteTask}
    />

    <TodoListForm 
      handleSubmit={addTask}
    />
    </>
  )
}