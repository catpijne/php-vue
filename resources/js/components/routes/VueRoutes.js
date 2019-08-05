import ExampleComponent from './components/ExampleComponent.vue';
import Home from './components/Home.vue';
export class VueRoutes{
    function (){
        const routes = [
            {
                path:'/',
                name:'Home',
                component:Home
            },{
                path:'/about',
                name:'About',
                component:ExampleComponent,
            }
        ]
        return routes;
    }
}


