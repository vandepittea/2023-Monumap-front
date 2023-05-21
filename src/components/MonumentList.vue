<template>
    <div class="flexcontainer">
      <Monument v-for="(monument, index) in monuments" :key="index" :monument="monument" @click="viewMonumentDetail(monument)" />
    </div>
  </template>
  
  <script>
  import Monument from './Monument.vue';
  
  export default {
    props: {
      monuments: {
        type: Array,
        required: true,
      },
    },
    components: {
      Monument,
    },
    methods: {
      viewMonumentDetail(monument) {
        console.log('viewMonumentDetail', monument);
        this.$emit('viewMonumentDetail', monument);
      },
    },

  };
  </script>
  
  <style>
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