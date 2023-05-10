<template>
  <main>
    <h1>Welcome to MonuMap</h1>
    <h3>Find here your favourtie Monuments</h3>

    TODO: serachbar + filter bar toevoegen!

    <div class="flexcontainer">
      <!-- <MonumentComponent :monument="monument"/> -->
      <MonumentComponent v-for="(monument, index) in monuments" :key="index" :monument="monument"/>

    </div>
    <router-link to="/newMonument">Add your monument</router-link>
    <img :src="languageImage" @click="toggleLanguage" id="languageImage" alt="Language switcher"/>
    <!-- <MonumentDetailComponent :monument="monument"/> -->
  </main>
</template>

<script>

import MonumentDetailComponent from '../components/MonumentDetailComponent.vue'
import MonumentComponent from '../components/MonumentComponent.vue';
import EnglishFlag from '../assets/images/EnglishFlag.png';
import DutchFlag from '../assets/images/DutchFlag.png';
export default{
  "name": "HomeView",
  components: { MonumentDetailComponent, MonumentComponent },
  data(){
    return {
      monuments: [],
      currentLanguage: "en",
      languageImages: {
        en: EnglishFlag,
        nl: DutchFlag,
      },
      languageImage: EnglishFlag,
      // monument: {
      //   name: "monument 1",
      //   images: "een url"
      // }
    }
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'nl' : 'en';
      this.languageImage = this.languageImages[this.currentLanguage];
    },
  },
  created() {
    // Fetch the list of monuments from the server and assign it to the `monuments` data property.
    //TODO: nog juiste url toevoegen
    fetch('/api/monuments')
      .then(response => response.json())
      .then(data => {
        this.monuments = data;
      })
      .catch(error => console.error(error));
  }
}
</script>

<style>
  h1 {
    margin-bottom: 1rem;
  }

  #languageImage {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.75rem;
  }

  .flexcontainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .flexcontainer > * {
    width: 30%;
  }

  a {
    background-color: var(--color-background) ;
    padding: 1rem;
    border-radius: 10px;
    display: block;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }
</style>


