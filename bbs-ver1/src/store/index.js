import Vue from 'vue';
import Vuex from 'vuex';
import { getPostUrl } from '@/api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [],
    pageNum: 1
  },
  mutations: {
    SET_POST(state, list) {
      state.posts = list;
    }
  },
  actions: {
    FETCH_POST({ state, commit }) {
      getPostUrl(state.pageNum)
        .then(({ data }) => {
          commit('SET_POST', data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    changePage({ state, commit }, number) {
      state.pageNum = number;
      getPostUrl(number)
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
