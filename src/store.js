import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      loggedIn: true
    };
  },
  mutations: {
    setLoggedIn(state, value) {
      state.loggedIn = value;
    }
  },
  actions: {
    logout({ commit }) {
      commit('setLoggedIn', false);
    }
  }
});

export default store;
