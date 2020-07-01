import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';


Vue.use(VueRouter);

const User = { template: '<div>teste</div>' }

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/user',
        component: User,
    }
];

const router = new VueRouter ({
    mode: 'history',
    base: '/',
    routes,
});

export default router;
