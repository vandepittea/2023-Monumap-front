<script setup>
  import { useStore } from 'vuex';
  import { RouterLink, RouterView } from 'vue-router';

  const store = useStore();
  const loggedIn = store.state.loggedIn;
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li v-if="!loggedIn"><router-link to="/login">Login</router-link></li>
        <li v-if="!loggedIn"><router-link to="/register">Register</router-link></li>
        <li v-if="loggedIn"><router-link to="/new-monument">Add Monument</router-link></li>
        <li v-if="loggedIn"><button @click="logout">Logout</button></li>
      </ul>
    </nav>
    <img :src="languageImage" @click="toggleLanguage" id="languageImage" alt="Language switcher" />
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import EnglishFlag from './assets/images/EnglishFlag.png';
import DutchFlag from './assets/images/DutchFlag.png';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      currentLanguage: 'en',
      languageImages: {
        en: EnglishFlag,
        nl: DutchFlag,
      },
      languageImage: EnglishFlag
    };
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'nl' : 'en';
      this.languageImage = this.languageImages[this.currentLanguage];
    },
    logout() {
      this.logout();
    },
    ...mapActions(['logout'])
  }
};
</script>

<style>
    #languageImage {
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    margin-left: 5rem;
    margin-top: 1.5rem;
  }
</style>