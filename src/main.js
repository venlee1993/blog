// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Bootstrapvue from 'bootstrap-vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(Bootstrapvue);

axios.interceptors.request.use(config => {
    let token = window.localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
}, error => {
    return Promise.reject(error.response.data)
})
axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                store.commit('SET_MODAL', {status: true, type: `login`});
                break;
        }
    }
})

Vue.prototype.$http = axios;

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
