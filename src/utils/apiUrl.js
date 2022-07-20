import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const baseUrl = 'https://api.themoviedb.org/3/';

const apiUrl = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: API_KEY,
    },
});

export default apiUrl;