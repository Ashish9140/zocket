import axios from 'axios';

const api = axios.create({
    baseURL: '',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

// List of all the end point 
export const postCompaigns = (data) => api.post('/api/campaigns', data);
export const deleteCompaigns = (data) => api.post('/api/delete', data);
export const getCompaigns = () => api.get('/api/campaigns');

export default api;