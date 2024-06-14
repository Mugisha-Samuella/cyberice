import axios from 'axios';


export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};


export const postData = async (message) => {
  try {
    const response = await axios.post('http://localhost:3001/data', { message });
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    return null;
  }
};
