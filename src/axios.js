import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-app-acf0a-default-rtdb.firebaseio.com/'
});

export default instance;