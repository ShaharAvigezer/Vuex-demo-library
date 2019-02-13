import Vue from 'vue';
import App from './App.vue';
import store from './store/books';

Vue.config.productionTip = false;
App.store = store;

new Vue(App).$mount('#app');

