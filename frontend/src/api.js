import axios from 'axios';

// Setup base URL for all requests
const API = axios.create({ baseURL: 'http://localhost:5000/api/v1' });

// Interceptor to include token in every request
API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return req;
});

// Authentication APIs
export const login = (formData) => API.post('/auth/login', formData);
export const signup = (formData) => API.post('/auth/signup', formData);

// Task APIs
export const fetchTasks = () => API.get('/tasks');
export const createTask = (newTask) => API.post('/tasks', newTask);
export const updateTask = (id, updatedTask) => API.put(`/tasks/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);

