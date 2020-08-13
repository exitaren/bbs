import Vue from 'vue';
import Vuex from 'vuex';
import { getPostUrl, getOpenUrl, postOpenUrl } from '@/api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [],
    openItems: [],
    pageNum: 1
  },
  mutations: {
    SET_POST(state, list) {
      state.posts = list;
    },
    GET_OPEN_ITEM(state, list) {
      state.openItems = list;
    },
    POST_OPEN_ITEM(state, list) {
      state.openItems = list;
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
    FETCH_OPEN_ITEM({ state, commit }) {
      getOpenUrl()
        .then(({ data }) => {
          commit('GET_OPEN_ITEM', data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    WRITE_OPEN_ITEM({ state, dispatch }, postData) {
      postOpenUrl()
        .then(({ data }) => {
          dispatch('POST_OPEN_ITEM', (data = postData));
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
