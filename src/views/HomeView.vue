<template>
  <main class="home-view">
    <h1>Welcome to MonuMap</h1>
    <h3>Find your favorite monuments</h3>

    <MonumentFilter @filterMonuments="filterMonuments" />

    <MonumentList :monuments="filteredMonuments" :currentPage="currentPage" :totalPages="lastPage" @viewMonumentDetail="viewMonumentDetail" />
  </main>
</template>

<script>
import MonumentList from '../components/MonumentList.vue';
import MonumentFilter from '../components/MonumentFilter.vue';
import MonumentService from '../services/MonumentService';

export default {
  name: 'HomeView',
  components: {
    MonumentList,
    MonumentFilter,
  },
  data() {
    return {
        monuments: [],
        filteredMonuments: [],
      filter: {
        name: '',
        type: '',
        yearOfConstruction: '',
        monumentDesigner: '',
        costToConstruct: '',
      },
      "service": new MonumentService(), 
      currentPage: 0,       // Variable to store the current page
    lastPage: 0
    };
  },
  computed: {
    //TODO: controler doen !
    // filteredMonuments() {
    //   if (this.filteredMonuments.length === 0) {
    //     return this.monuments;
    //   } else {
    //     return this.filteredMonuments;
    //   }
    // },
  },
  methods: {
    viewMonumentDetail(monument) {
      this.$router.push({ name: 'MonumentDetail', params: { id: monument.id } });
    },

    filterMonuments(filteredMonuments) {
      //TODO: controleren als filterMonuments leeg is dan moet je de monuments tonen
      this.filteredMonuments = filteredMonuments;
    },
  },
  async created() {
    this.monuments  = await this.service.getAllMonuments();
  },
};
</script>

<style>
</style>