import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-9rvt.onrender.com/'
})

export default instance