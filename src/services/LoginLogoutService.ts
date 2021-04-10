import Http from './HttpService';

// import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

class PingService {

    private logEnv(): void {
        console.log('Register Host Address:', process.env.REGISTER);
    }

    ping(): void {
        Http.get('/ping')
            .then((response) => {
                this.logEnv();
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log('ping finished');
            });
    }

    login(): void {
        this.logEnv();
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
