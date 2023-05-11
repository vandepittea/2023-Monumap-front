<template>
  <main>
    <h1>Welcome to MonuMap</h1>
    <h3>Find here your favourtie Monuments</h3>

    TODO: serachbar + filter bar toevoegen!
    TODO: order by? 
    TODO: hier apart componentn van maken? 

    <form @submit.prevent="filterMonuments">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" v-model="filter.name">

      <label for="type">Select the type:</label>
      <select id="type" name="type" v-model="filter.type">
        <option value="">Please choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <label for="yearOfConstructions">Year of construction:</label>
      <input type="number" id="yearOfConstructions" name="yearOfConstructions" v-model="filter.yearOfConstruction">

      <label for="monumentDesigner">Monument designer:</label>
      <input type="text" id="monumentDesigner" name="monumentDesigner" v-model="filter.monumentDesigner">

      <label for="costToConstruct">Cost to construct</label>
      <input type="number" id="costToConstruct" name="costToConstruct" v-model="filter.costToConstruct">

      <input type="submit" value="Filter">
    </form>
    
    <div class="flexcontainer">
      <MonumentComponent v-for="(monument, index) in monuments" :key="index" :monument="monument" @click="viewMonumentDetail(monument)"/>
    </div>
    <router-link to="/newMonument" id="addMonumentButton">Add your monument</router-link>
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
      filter : {
        name: '',
        type: '',
        yearOfConstruction: '',
        monumentDesigner: '',
        costToConstruct: '',
      }
    }
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'nl' : 'en';
      this.languageImage = this.languageImages[this.currentLanguage];
    },
    viewMonumentDetail(monument) {
      this.$router.push({ name: 'MonumentDetail', params: { id : monument.id, monument : monument} });
    },
    filterMonuments() {
      //TODO: juiste url meegeven!
      let url = '/api/monuments?';
      if (this.name) {
        url += `name=${this.name}&`;
      }
      if (this.type) {
        url += `type=${this.type}&`;
      }
      if (this.yearOfConstruction) {
        url += `yearOfConstruction=${this.yearOfConstruction}&`;
      }
      if (this.monumentDesigner) {
        url += `monumentDesigner=${this.monumentDesigner}&`;
      }
      if (this.costToConstruct) {
        url += `costToConstruct=${this.costToConstruct}&`;
      }
      // Remove the trailing '&' character
      url = url.slice(0, -1);

      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.monuments = data;
        })
        .catch(error => console.error(error));
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
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 0.05rem gray solid;
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

  #addMonumentButton {
    background-color: var(--color-background) ;
    padding: 1rem;
    border-radius: 10px;
    display: block;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }

  form {
    border: 0.05rem gray solid;
    padding: 2rem;
    margin-bottom: 2rem;
  }
</style>


