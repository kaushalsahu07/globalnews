import axios from 'axios';

const API_KEYS = [
  '33a0f5e2e08d4628927703b1e36ec992', 
  '20fce435f1cd485cb4c0c74451b90fa3',
  '3cdb653021094a92a771c28367ee75b1',
  'd48c3ac4d3b54d5998d31107cac33bee',
  '5be256e8479749b3aa25db399f1fa026',
  '9ac9cacba66c4d5480146dd97399839f',
  '86407836d3bd4ee3aa5b3fc9f793fd14'
];

let currentKeyIndex = 0;
let triedKeys = new Set(); // Keep track of keys we've tried

const getNextApiKey = () => {
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
  return API_KEYS[currentKeyIndex];
};

const resetApiKeyTracking = () => {
  triedKeys.clear();
  currentKeyIndex = 0;
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
      triedKeys.add(apiKey); // Mark this key as tried
      const response = await newsApi.get(`${topic}&apiKey=${apiKey}`);
      // If successful, reset our tracking
      resetApiKeyTracking();
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        // Check if we've tried all available keys
        if (triedKeys.size >= API_KEYS.length) {
          resetApiKeyTracking();
          throw new Error('All API keys are currently rate limited. Please try again in a moment.');
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
    if (error.response && error.response.status === 429) {
      console.error('Rate limit error:', error.message);
    } else {
      console.error('Error fetching news:', error.message);
    }
    throw error;
  }
};