import axios from 'axios';

const API_KEYS = [
  '33a0f5e2e08d4628927703b1e36ec992', //nodac97034@idoidraw.com
  '20fce435f1cd485cb4c0c74451b90fa3',
  '3cdb653021094a92a771c28367ee75b1', //rinok27070@harinv.com
  'd48c3ac4d3b54d5998d31107cac33bee',
  '5be256e8479749b3aa25db399f1fa026'

];

let currentKeyIndex = 0;

const getNextApiKey = () => {
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
  return API_KEYS[currentKeyIndex];
};

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const baseUrl = async (topic) => {
  const makeRequest = async (apiKey) => {
    try {
      const response = await newsApi.get(`${topic}&apiKey=${apiKey}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        // If we've tried all API keys, throw an error
        if (currentKeyIndex === API_KEYS.length - 1) {
          throw new Error('All API keys have reached their rate limit. Please try again later.');
        }
        // Try with next API key
        const nextKey = getNextApiKey();
        console.log('Rate limit reached, switching to next API key...');
        return makeRequest(nextKey);
      }
      throw error;
    }
  };

  try {
    return await makeRequest(API_KEYS[currentKeyIndex]);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    throw error;
  }
};