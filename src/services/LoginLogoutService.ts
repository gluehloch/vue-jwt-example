import Http from './HttpService';

// import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

class PingService {

    ping(): void {
        Http.get('/ping')
            .then(function(response) {
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
            })
            .finally(function() {
                console.log('ping finished')
            });
    }

    login(): void {
        Http.post('/login')
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            })
            .finally(function() {
                console.log('login finished');
            });
    }

}

export default new PingService();
