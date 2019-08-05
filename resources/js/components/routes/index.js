import ExampleComponent from './components/ExampleComponent.vue';
import Dashboard from './components/Dashboard/Dashboard.vue'
import Home from '@/components/Home.vue';

export default new routes({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/index',
            name:'Home',
            component:Home,
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
})
