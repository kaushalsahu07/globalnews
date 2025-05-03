import axios from 'axios';

const API_KEY = '33a0f5e2e08d4628927703b1e36ec992';

//33a0f5e2e08d4628927703b1e36ec992
//20fce435f1cd485cb4c0c74451b90fa3

export const baseUrl = async (topic) => {
  const response = await axios.get(
    `https://newsapi.org/v2/${topic}&apiKey=${API_KEY}`
  );
  return response.data;
};