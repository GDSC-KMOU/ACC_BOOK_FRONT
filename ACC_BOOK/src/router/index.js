"use strict";

import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Write from '@/views/Write.vue';
import Login from '@/views/Login.vue';
import Logout from '@/views/Logout.vue';
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
  }, {
    path: '/write',
    name: 'Write',
    component: Write,
  }, {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;