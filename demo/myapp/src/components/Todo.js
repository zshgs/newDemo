import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  
  useEffect(() => {
    // Fetch todos from the backend
    axios.get('http://localhost:8081/api/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      })
  }, []);
  
  const addTodo = () => {
    axios.post('http://localhost:8081/api/todos', { task: newTask, completed: false })
      .then(response => {
        setTodos([...todos, response.data]);
        setNewTask('');
      })
      .catch(error => {
        console.error("Error adding todo: ", error);
      })
  };
  
  return (
    <div>
      <h1>TODO List</h1>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;