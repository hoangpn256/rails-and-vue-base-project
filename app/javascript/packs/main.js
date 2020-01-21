import Vue from 'vue';
import VueRouter from 'vue-router';
import MainApp from './MainApp';
import store from './store';
import routes from './routes';
import VueLocalStorage from 'vue-localstorage';

Vue.use(VueRouter);
Vue.use(VueLocalStorage);

const router = new VueRouter({
    // mode: 'history',
    routes
});


new Vue({
    el: '#app',
    store,
    render: h => h(MainApp),
    router,
});