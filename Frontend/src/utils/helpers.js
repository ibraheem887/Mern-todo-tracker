// API related helpers
export const API_BASE_URL = 'http://localhost:5000/api';

export const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleString();
};

export const validateTodoInput = (title, desc) => {
  const errors = {};
  
  if (!title.trim()) {
    errors.title = 'Title is required';
  }
  
  if (!desc.trim()) {
    errors.desc = 'Description is required';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const handleApiError = (error) => {
  console.error('API Error:', error);
  return error.response?.data?.message || error.message || 'An unknown error occurred';
};