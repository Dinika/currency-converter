import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://currency-converter-9701e.firebaseio.com/'
});

export default instance;