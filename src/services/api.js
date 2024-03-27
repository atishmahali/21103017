import axios from 'axios';
const API_BASE_URL = 'http://localhost:7000';
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
  });
  
  export const fetchProducts = async (params) => {
    try {
      const response = await axiosInstance.get('/products', { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  };