<script setup>
  import { useStore } from 'vuex';
  import { RouterLink, RouterView } from 'vue-router';
  import Home from './views/HomeView.vue';

  const store = useStore();
  const loggedIn = store.state.loggedIn;
  localStorage.setItem('language', "English");

</script>

<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li v-if="!store.state.loggedIn"><router-link to="/login">{{ this.$store.state.currentLanguage === 'Dutch' ? 'Inloggen' : 'Login' }}</router-link></li>
        <li v-if="!store.state.loggedIn"><router-link to="/register">{{ this.$store.state.currentLanguage === 'Dutch' ? 'Registreren' : 'Register' }}</router-link></li>
        <li v-if="store.state.loggedIn"><router-link to="/new-monument">{{ this.$store.state.currentLanguage === 'Dutch' ? 'Monument Toevoegen' : 'Add Monument' }}</router-link></li> 
        <li v-if="store.state.loggedIn"><button @click="logout">{{ this.$store.state.currentLanguage === 'Dutch' ? 'Uitloggen' : 'Logout' }}</button></li> 
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

export default {
  name: 'App',
  data() {
    return {
      currentLanguage: 'English',
      languageImages: {
        English: EnglishFlag,
        Dutch: DutchFlag,
      },
      languageImage: EnglishFlag
    };
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'English' ? 'Dutch' : 'English'; 
      this.languageImage = this.languageImages[this.currentLanguage];
      this.$store.commit('setCurrentLanguage', this.currentLanguage);
      localStorage.setItem('language', this.currentLanguage);
    },
    logout() {
      this.$store.commit('setLoggedIn', false);
      this.$router.push({ name: 'Home' });
   }
  },

};
</script>

<style scoped>
    #languageImage {
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    margin-left: 5rem;
    margin-top: 1.5rem;
  }

  button{
    background-color: transparent;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    transition: color 0.3s;
  }
</style>