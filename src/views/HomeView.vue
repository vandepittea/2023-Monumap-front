<template>
  <main class="home-view">
    <h1>Welcome to MonuMap</h1>
    <h3>Find your favorite monuments</h3>

    <MonumentFilter @filterMonuments="filterMonuments" />

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
    async fetchMonuments() {
      try {
        this.monuments = await this.service.getAllMonuments(this.$store.state.currentLanguage);
      } catch (error) {
        console.error('Error fetching monuments:', error);
      }
    },
  },
  async created() {
    this.fetchMonuments();
  },
  watch: {
    '$store.state.currentLanguage': {
      handler() {
        this.fetchMonuments();
      },
      immediate: true,
    },
  }
};
</script>

<style>
</style>