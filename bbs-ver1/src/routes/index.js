import Vue from 'vue';
import VueRouter from 'vue-router';
import BoardList from '@/views/BoardList.vue';
import ListView from '@/views/ListView.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { name: 'jsonboard', path: '/jsonboard', component: BoardList },
    { name: 'crudboard', path: '/crudboard', component: BoardList },
    { path: '/bbs/:id', component: ListView }
  ]
});
