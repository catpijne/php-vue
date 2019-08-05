import "./bootstrap";
import Vue from "vue";
window.Vue = require('vue');
import VueChartist from "vue-chartist";
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import ExampleComponent from './components/ExampleComponent.vue';
import Dashboard from './components/Dashboard/Dashboard.vue'
import Home from './components/Home.vue';
import App from './components/App.vue';

Vue.use(VueRouter);
Vue.use(VueChartist);
Vue.use(Vuetify);

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/index',
        name:'Home',
        component:Home
    },
    {
      path:'/dashboard',
      name:'Dashboard',
      component:Dashboard
    },
    {
        path:'/about',
        name:'About',
        component:ExampleComponent,
    }
    ]

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    template:'<app/>',
    components:{App},
    router,
});
