<template>
    <div class="flexcontainer">
      <MonumentComponent v-for="(monument, index) in monuments" :key="index" :monument="monument" @click="viewMonumentDetail(monument)" />
    </div>
  </template>
  
  <script>
  import MonumentComponent from './MonumentComponent.vue';
  
  export default {
    props: {
      monuments: {
        type: Array,
        required: true,
      },
    },
    components: {
      MonumentComponent,
    },
    methods: {
      viewMonumentDetail(monument) {
        this.$emit('viewMonumentDetail', monument);
      },
    },
  };
  </script>
  
  <style scoped>
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
  </style>  