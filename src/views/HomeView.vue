<template>
  <main class="home-view">
    <h1>Welcome to MonuMap</h1>
    <h3>Find your favorite monuments</h3>

    <MonumentFilter @filterMonuments="filterMonuments" />

    <MonumentList :monuments="filteredMonuments" @viewMonumentDetail="viewMonumentDetail" />
  </main>
</template>

<script>
import MonumentList from '../components/MonumentList.vue';
import MonumentFilter from '../components/MonumentFilter.vue';
import MonumnetService from '../services/MonumentService';

export default {
  name: 'HomeView',
  components: {
    MonumentList,
    MonumentFilter,
  },
  data() {
    return {
      // monuments: [
      //   {
      //     id: 1,
      //     name: 'Eiffel Tower',
      //     images: 'https://www.eiffeltoren.info/wp-content/uploads/sites/12/2022/12/eiffel-tower.jpg',
      //   },
      //   {
      //     id: 2,
      //     name: 'Statue of Liberty',
      //     images: 'https://static.dw.com/image/15861462_605.jpg',
      //   },
      //   {
      //     id: 3,
      //     name: 'Taj Mahal',
      //     images: 'https://www.reisroutes.be/userfiles/fotos/taj-mahal_8991_xl.jpg',
      //   },
      //   {
      //     id: 4,
      //     name: 'Great Wall of China',
      //     images: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/01/31124623/Great-Wall-Of-China.jpg?tr=w-1200,h-900',
      //   },
      // ],
        monuments: [],
        filteredMonuments: [],
      filter: {
        name: '',
        type: '',
        yearOfConstruction: '',
        monumentDesigner: '',
        costToConstruct: '',
      },
      "service": new MonumnetService(), 
    };
  },
  computed: {
    filteredMonuments() {
      if (this.filteredMonuments.length === 0) {
        return this.monuments;
      } else {
        return this.filteredMonuments;
      }
    },
  },
  methods: {
    viewMonumentDetail(monument) {
      this.$router.push({ name: 'MonumentDetail', params: { id: monument.id, monument: monument } });
    },

    async filterMonuments(filterMonument) { //TODO: werkt dit?
      console.log("in filtere Monuments")
      filteredMonuments  = await this.MonumnetService
                                  .getAllMonuments(filterMonument.name, 
                                                  filterMonument.type, 
                                                  filterMonument.yearOfConstruction, 
                                                  filterMonument.monumentDesigner, 
                                                  filterMonument.costToConstruct);
                                                  //TODO: pages hier ook nog toevoegen?
        console.log(filterMonuments)

       // Apply filtering logic or call the API endpoint here
       //console.log('Filter:', this.filter);
      // TODO: Update the filteredMonuments computed property based on the filter values
      this.filteredMonuments = filteredMonuments;
  },
  },
  async created() {
    console.log("in created")
    this.monuments  = await this.service.getAllMonuments();
    console.log("-------")
    console.log(this.monuments)
    console.log("after creazted")
  },
};
</script>

<style>
</style>