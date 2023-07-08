import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const url = 'http://localhost:5000'
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState("")

  useEffect(() => {
    getTodos()
  }, [todos])

  const getTodos = async () => {
    const response = await axios.get(`${url}/api/todo`)
    setTodos(response.data.data)
  }

  const addTodo = async (e) => {
    e.preventDefault()
    const response = await axios.post(`${url}/api/todo`, {
      name: todoValue,
      description: "Yapılmalı"
    })
    if (response.status === 200) {
      setTodoValue("")
    }
  }

  const deleteTodo = async (id) => {
    const response = await axios.delete(`${url}/api/todo/${id}`)
  }

  const updateTodo = async (id) => {
    const response = await axios.put(`${url}/api/todo/${id}`, {
      completed: true
    })
  }

  return (
    <div className="flex flex-col pt-24 gap-6 w-10/12 mx-auto items-center justify-center">
      <h1 className="text-5xl font-bold tracking-wide">ToDo List</h1>
      <form onSubmit={addTodo} className="flex items-center mt-4" >
        <input value={todoValue} onChange={(e) => setTodoValue(e.target.value)} className="bg-gray-200 rounded-md p-3 focus:outline-none font-semibold" type="text" />
        <button type='submit' className="p-2 rounded-md font-semibold bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all">Add</button>
      </form>
      <ul className="py-5 w-48">
        {todos.map((todo, index) => {
          return (
            <li key={index} className="py-2 cursor-pointer border-b border-gray-200 flex items-center justify-between w-full"> <p onClick={() => updateTodo(todo._id)} className={`${todo.completed ? "line-through" : ""}`}>{todo.name}</p><button onClick={() => deleteTodo(todo._id)} className="py-1 px-2 rounded-md font-semibold bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all">Clear</button> </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
