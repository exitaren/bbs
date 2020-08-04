import Vue from 'vue';
import Vuex from 'vuex';
import { getPostUrl } from '@/api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POST(state, list) {
      state.posts = list;
    }
  },
  actions: {
    FETCH_POST({ commit }) {
      getPostUrl()
        .then(({ data }) => {
          commit('SET_POST', data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  getters: {}
});
