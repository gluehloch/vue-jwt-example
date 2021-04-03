import Vue from 'vue';
import axios, { AxiosStatic } from 'axios';

axios.defaults.baseURL = 'http://localhost:9090';
Vue.prototype.$axios = axios;
declare module 'vue/types/vue' {
    interface Vue {
        $axios: AxiosStatic;
    }
}

export class PingService {

    ping(): void {
        axios.get('/ping')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }

}
