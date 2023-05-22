<template>
    <form class="filter-form" @submit.prevent="filterMonuments">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="filter.name">
      </div>


    <div class="form-group">
      <label for="monumentType">Monument Type:</label>
      <select id="monumentType" name="monumentType" v-model="filter.type">
        <option value="">{{ getMonumentTypeLabel() }}</option>
        <option v-for="type in monumentTypesOptions" :key="type" :value="type">{{ type }}</option>
      </select>
    </div>

      <div class="form-group">
        <label for="yearOfConstruction">Year of construction:</label>
        <input type="number" id="yearOfConstruction" name="yearOfConstruction" v-model="filter.yearOfConstruction">
      </div>
  
      <div class="form-group">
        <label for="monumentDesigner">Monument designer:</label>
        <input type="text" id="monumentDesigner" name="monumentDesigner" v-model="filter.monumentDesigner">
      </div>
  
      <div class="form-group">
        <label for="costToConstruct">Cost to construct:</label>
        <input type="number" id="costToConstruct" name="costToConstruct" v-model="filter.costToConstruct">
      </div>
  
      <input type="submit" value="Filter">
    </form>
  </template>
  
  <script>
  import MonumentService from '../services/MonumentService';
  import { typesNl, typesEn } from "../utils/arraysValues.js";

  export default {
    name: 'MonumentFilter',
    data() {
      return {
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
    computed: {
      monumentTypesOptions() {
        if (this.$store.state.currentLanguage === 'Dutch') {
          return typesNl;
        } else if (this.$store.state.currentLanguage === 'English') {
          return typesEn;
        } else {
          return [];
        }
      },
    },
    methods: {
      getMonumentTypeLabel() {
        return this.$store.state.currentLanguage === 'Dutch' ? 'Selecteer monument type' : 'Select monument type';
      },
      async filterMonuments() {
        const filteredMonuments  = await this.service.getAllMonuments(
                                                  this.$store.state.currentLanguage,
                                                  this.filter.name, 
                                                  this.filter.type, 
                                                  this.filter.yearOfConstruction, 
                                                  this.filter.monumentDesigner, 
                                                  this.filter.costToConstruct);
        this.$emit('filterMonuments', filteredMonuments);
      },
    },
    watch: {
    '$store.state.currentLanguage': {
      handler() {
        this.$nextTick(() => {
          this.$forceUpdate();
        });
      },
      immediate: true,
    },
  },
  };
  </script>
  <style>
.filter-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  background-color: #fff;
  padding: 4rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  </style>  