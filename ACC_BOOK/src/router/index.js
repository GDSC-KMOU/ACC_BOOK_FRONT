import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import AccountToday from '@/views/AccountToday.vue';
import AccountMonth from '@/views/AccountMonth.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
  }, {
    path: '/account/today',
    name: 'AccountToday',
    component: AccountToday,
  }, {
    path: '/account/month',
    name: 'AccountMonth',
    component: AccountMonth,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;