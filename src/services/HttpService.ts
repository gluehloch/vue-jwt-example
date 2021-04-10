import axios from 'axios';

const myAxios = axios.create({
    baseURL: process.env.REGISTER,
    headers: {
        'Content-type': 'application/json'
    }
})

export default myAxios;
