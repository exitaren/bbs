import Vue from 'vue';
import VueRouter from 'vue-router';
import BoardList from '@/views/BoardList.vue';
import ListView from '@/views/ListView.vue';
import PostWrite from '@/views/PostWrite.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { name: 'jsonboard', path: '/', component: BoardList },
    { name: 'jsonboard', path: '/jsonboard', component: BoardList },
    { name: 'write', path: '/write', component: PostWrite },
    { name: 'openboard', path: '/openboard', component: BoardList },
    { path: '/bbs/:id', component: ListView }
  ]
});
