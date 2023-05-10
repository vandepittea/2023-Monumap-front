<template>
  <main>
    <h1>Welcome to MonuMap</h1>
    <h3>Find here your favourtie Monuments</h3>

    TODO: serachbar + filter bar toevoegen!

    <div class="flexcontainer">
      <MonumentComponent v-for="(monument, index) in monuments" :key="index" :monument="monument" @click="viewMonumentDetail(monument)"/>
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
      monuments: [
      {
        id: 1,
        name: 'Eiffel Tower',
        images: 'https://www.eiffeltoren.info/wp-content/uploads/sites/12/2022/12/eiffel-tower.jpg'
      },
      {
        id: 2,
        name: 'Statue of Liberty',
        images: 'https://static.dw.com/image/15861462_605.jpg'
      },
      {
        id: 3,
        name: 'Taj Mahal',
        images: 'https://www.reisroutes.be/userfiles/fotos/taj-mahal_8991_xl.jpg'
      },
      {
        id: 4,
        name: 'Great Wall of China',
        images: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/01/31124623/Great-Wall-Of-China.jpg?tr=w-1200,h-900'
      }
    ],
      currentLanguage: "en",
      languageImages: {
        en: EnglishFlag,
        nl: DutchFlag,
      },
      languageImage: EnglishFlag,
    }
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'nl' : 'en';
      this.languageImage = this.languageImages[this.currentLanguage];
    },
    viewMonumentDetail(monument) {
      console.log("viewMonumentDetail")
      console.log(monument);
    this.$router.push({ name: 'MonumentDetail', params: { id : monument.id} });
    },
  },
  created() {
    // Fetch the list of monuments from the server and assign it to the `monuments` data property.
    //TODO: nog juiste url toevoegen
    // fetch('/api/monuments')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.monuments = data;
    //   })
    //   .catch(error => console.error("error"));
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


