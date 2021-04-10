import axios from 'axios';

const myAxios = axios.create({
    baseURL: 'http://localhost:9090/registrationservice',
    headers: {
        'Content-type': 'application/json'
    }
})

export default myAxios;
