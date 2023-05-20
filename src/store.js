import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      loggedIn: true,
      currentLanguage: 'English'
    };
  },
  mutations: {
    setLoggedIn(state, value) {
      state.loggedIn = value;
    },
    setCurrentLanguage(state, value) {
      state.currentLanguage = value;
    }
  }
});

export default store;
