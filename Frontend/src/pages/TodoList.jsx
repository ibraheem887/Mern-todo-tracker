import { useState, useEffect } from 'react';
import Todos from '../Components/Todos';
import ToAdd from '../Components/ToAdd';
import axios from 'axios';

export default function TodoList() {
  const [todolist, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/todos');
        setTodos(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching todos:', err);
        setError('Failed to fetch todos: ' + (err.response?.data?.message || err.message));
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (title, desc) => {
    try {
      const res = await axios.post('http://localhost:5000/api/todos', { title, desc });
      setTodos([...todolist, res.data]);
      alert("Task added");
    } catch (err) {
      console.error('Error adding todo:', err);
      alert("Failed to add task: " + (err.response?.data?.message || err.message));
    }
  };

  const toggleComplete = async (todo) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/todos/${todo._id}`, {
        title: todo.title,
        desc: todo.desc,
        completed: !todo.completed
      });
      
      setTodos(todolist.map(item => 
        item._id === todo._id ? res.data : item
      ));
    } catch (err) {
      console.error('Error updating todo:', err);
      alert("Failed to update task: " + (err.response?.data?.message || err.message));
    }
  };

  const del = async (todo) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);
      setTodos(todolist.filter(item => item._id !== todo._id));
      alert(`Task "${todo.title}" deleted`);
    } catch (err) {
      console.error('Error deleting todo:', err);
      alert("Failed to delete task: " + (err.response?.data?.message || err.message));
    }
  };
   
  return (
    <div className="container my-4">
      <ToAdd addTodo={addTodo}/>  
      {loading ? (
        <div className="text-center my-3">Loading...</div>
      ) : error ? (
        <div className="text-center my-3 text-danger">{error}</div>
      ) : (
        <Todos todos={todolist} del={del} toggleComplete={toggleComplete}/>
      )}
    </div>
  );
}