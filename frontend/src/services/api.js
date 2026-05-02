import axios from 'axios';

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchSkills = () => api.get('/skills');
export const fetchProjects = () => api.get('/projects');
export const fetchJourney = () => api.get('/journey');
export const fetchCertifications = () => api.get('/certifications');
export const fetchAcademics = () => api.get('/academics');
export const submitContact = (data) => api.post('/contact', data);

export default api;
