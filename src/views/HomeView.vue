<template>
  <main class="home-view">
    <h1>Welcome to MonuMap</h1>
    <h3>Find your favorite monuments</h3>

    <MonumentFilter @filterMonuments="filterMonuments" />

    <MonumentList :monuments="monuments"  @viewMonumentDetail="viewMonumentDetail" />

    <div class="pagination">
      <button @click="previousPage" :disabled="page === 1">Previous</button>
      <span>{{ page }}</span>
      <button @click="nextPage" :disabled="monuments.length < perPage">Next</button>
    </div>
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
      page: 1,
      perPage: 6,
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
        this.monuments = await this.service
                  .setPage(this.page)
                  .setPerPage(this.perPage)
                  .getAllMonuments(this.$store.state.currentLanguage);
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
        this.fetchMonuments();
      }
    },
    nextPage() {
      this.page++;
      this.fetchMonuments();
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
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #337ab7;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.pagination button:hover {
  background-color: #23527c;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.pagination span {
  font-weight: bold;
  margin: 0 10px;
  color: #337ab7;
}
</style>