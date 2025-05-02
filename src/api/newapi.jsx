import axios from 'axios';

const API_KEY = process.env.api_key;

export const baseUrl = async (topic) => {
  const response = await axios.get(
    `https://newsapi.org/v2/${topic}&apiKey=${API_KEY}`
  );
  return response.data;
};