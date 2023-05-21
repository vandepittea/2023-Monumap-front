<template>
  <main class="home-view">
    <h1>Welcome to MonuMap</h1>
    <h3>Find your favorite monuments</h3>

    <MonumentFilter @filterMonuments="monuments" />

    <MonumentList :monuments="monuments"  @viewMonumentDetail="viewMonumentDetail" />
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
      filter: {
        name: '',
        type: '',
        yearOfConstruction: '',
        monumentDesigner: '',
        costToConstruct: '',
      },
      "service": new MonumentService(), 
    };
  },
  methods: {
    viewMonumentDetail(monument) {
      this.$router.push({ name: 'MonumentDetail', params: { id: monument.id } });
    },

    filterMonuments(filteredMonuments) {
      this.monuments = filteredMonuments;
    },
  },
  async created() {
    this.monuments  = await this.service.getAllMonuments();
  },
};
</script>

<style>
</style>