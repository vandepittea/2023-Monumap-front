<template>
    <form class="filter-form" @submit.prevent="filterMonuments">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="filter.name">
      </div>
  
      <div class="form-group">
        <label for="type">Select the type:</label>
        <select id="type" name="type" v-model="filter.type">
          <option value="">Please choose an option</option> //TODO: Hier nog options krijgen via API of zelf toevoegen?
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
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
  import MonumnetService from '../services/MonumentService';

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
        "service": new MonumnetService(), //TODO: is dit oke hier? 
      };
    },
    methods: {
      async filterMonuments() {
          


        // TODO: Implement the filtering logic or call the API endpoint V
        // You can access the filter values using `this.filter` V
        // Example code to log the filter values
        console.log('Filter:', this.filter);
  
        // TODO: Update the parent component's `monuments` data with the filtered results
        // You can emit an event or call a method in the parent component to achieve this
        this.$emit('filteredMonuments', this.filter); //TODO: werkt dit?
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