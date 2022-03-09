import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vSelect from 'vue-select';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.component('v-select', vSelect);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
