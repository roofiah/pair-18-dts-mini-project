import axios from 'axios';

const API_KEY = '5a73a5b14c585839efed404c46d663fc'
const baseUrl = 'https://api.themoviedb.org/3/';

const apiUrl = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: API_KEY,
    },
});

export default apiUrl;