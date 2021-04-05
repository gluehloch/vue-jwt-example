// import http from './HttpService'

import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

class PingService {

    ping(): void {
        axios.get('http://localhost:9090/registrationservice/ping')
            .then(function(response) {
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
            })
            .then(function() {
                console.log('finished')
            })
    }

}

export default new PingService();
