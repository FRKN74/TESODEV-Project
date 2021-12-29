//components
import Home from './assets/components/homePage.vue';
import List from './assets/components/listPage.vue';
import State from './assets/components/statePage.vue';


export const routes =[

    { path : '/' , component: Home  },
    { path : '/list' ,component :List },
    { path : '/detail' ,component :State },

];