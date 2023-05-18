<template>
  <main class="home-view">
    <h1>Welcome to MonuMap</h1>
    <h3>Find your favorite Monuments</h3>

    <MonumentFilter @filterMonuments="filterMonuments" />

    <MonumentList :monuments="filteredMonuments" @viewMonumentDetail="viewMonumentDetail" />
  </main>
</template>

<script>
import MonumentDetailComponent from '../components/MonumentDetailComponent.vue';
import MonumentList from '../components/MonumentList.vue';
import MonumentFilter from '../components/MonumentFilter.vue';
import EnglishFlag from '../assets/images/EnglishFlag.png';
import DutchFlag from '../assets/images/DutchFlag.png';

export default {
  name: 'HomeView',
  components: {
    MonumentDetailComponent,
    MonumentList,
    MonumentFilter,
  },
  data() {
    return {
      monuments: [
        {
          id: 1,
          name: 'Eiffel Tower',
          images: 'https://www.eiffeltoren.info/wp-content/uploads/sites/12/2022/12/eiffel-tower.jpg',
        },
        {
          id: 2,
          name: 'Statue of Liberty',
          images: 'https://static.dw.com/image/15861462_605.jpg',
        },
        {
          id: 3,
          name: 'Taj Mahal',
          images: 'https://www.reisroutes.be/userfiles/fotos/taj-mahal_8991_xl.jpg',
        },
        {
          id: 4,
          name: 'Great Wall of China',
          images: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/01/31124623/Great-Wall-Of-China.jpg?tr=w-1200,h-900',
        },
      ],
      currentLanguage: 'en',
      languageImages: {
        en: EnglishFlag,
        nl: DutchFlag,
      },
      languageImage: EnglishFlag,
      filter: {
        name: '',
        type: '',
        yearOfConstruction: '',
        monumentDesigner: '',
        costToConstruct: '',
      },
    };
  },
  computed: {
    filteredMonuments() {
      // Apply filtering logic based on the filter object
      return this.monuments.filter((monument) => {
        // Example filtering condition: filter by name
        return monument.name.toLowerCase().includes(this.filter.name.toLowerCase());
      });
    },
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'nl' : 'en';
      this.languageImage = this.languageImages[this.currentLanguage];
    },
    viewMonumentDetail(monument) {
      this.$router.push({ name: 'MonumentDetail', params: { id: monument.id, monument: monument } });
    },
    filterMonuments() {
      // Apply filtering logic or call the API endpoint here
      console.log('Filter:', this.filter);
      // TODO: Update the filteredMonuments computed property based on the filter values
    },
  },
  created() {
    // Fetch the list of monuments from the server and assign it to the `monuments` data property.
    // TODO: Replace with the actual API endpoint URL
    // fetch('/api/monuments')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.monuments = data;
    //   })
    //   .catch(error => console.error(error));
  },
};
</script>

<style>
</style>