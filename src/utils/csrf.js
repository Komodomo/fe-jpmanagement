import axios from './axios';

const getCsrfToken = async () => {
  await axios.get('/sanctum/csrf-cookie');
};

export default getCsrfToken;
