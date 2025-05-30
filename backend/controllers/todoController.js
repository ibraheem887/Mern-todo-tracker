const Todo = require('../models/Todo');

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    console.log('Fetched todos:', todos); // Debug log
    res.status(200).json(todos);
  } catch (err) {
    console.error('Error in getAllTodos:', err); // Debug log
    res.status(500).json({ message: err.message });
  }
};

// Get a single todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    console.log('Received todo data:', req.body); // Debug log
    const { title, desc } = req.body;
    
    // Validation
    if (!title || !desc) {
      return res.status(400).json({ message: 'Title and description are required' });
    }
    
    const newTodo = new Todo({
      title,
      desc,
      completed: false
    });
    
    const savedTodo = await newTodo.save();
    console.log('Saved todo:', savedTodo); // Debug log
    res.status(201).json(savedTodo);
  } catch (err) {
    console.error('Error in createTodo:', err); // Debug log
    res.status(400).json({ message: err.message });
  }
};

// Update a todo
exports.updateTodo = async (req, res) => {
  try {
    console.log('Update todo request:', req.params.id, req.body); // Debug log
    
    // Find and update the todo
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    
    console.log('Updated todo:', updatedTodo); // Debug log
    res.status(200).json(updatedTodo);
  } catch (err) {
    console.error('Error in updateTodo:', err); // Debug log
    res.status(400).json({ message: err.message });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    console.log('Delete todo request:', req.params.id); // Debug log
    const todo = await Todo.findById(req.params.id);
    
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (err) {
    console.error('Error in deleteTodo:', err); // Debug log
    res.status(500).json({ message: err.message });
  }
};
