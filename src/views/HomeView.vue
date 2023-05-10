<template>
  <main>
    <h1>Welcome to MonuMap</h1>
    <h3>Find here your favourtie Monuments</h3>

    <div class="flexcontainer">
      <MonumentComponent :monument="monument"/>
    </div>

    <!-- <MonumentDetailComponent :monument="monument"/> -->
  </main>
</template>



<script>

import MonumentDetailComponent from '../components/MonumentDetailComponent.vue'
import MonumentComponent from '../components/MonumentComponent.vue';
export default{
  "name": "HomeView",
  components: { MonumentDetailComponent, MonumentComponent },
  data(){
    return {
      monument: {
        name: "monument 1",
        images: "een url"
      }
    }
  }
}
</script>

<style>
  h1 {
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.75rem;
  }

  .flexcontainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .flexcontainer > * {
    width: 30%;
  }
</style>


