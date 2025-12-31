import axios from 'axios';

// Create a configured instance of axios
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Points to your backend
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;