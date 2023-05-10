<template>
  <main>
    <h1>Welcome to MonuMap</h1>
    <h3>Find here your favourtie Monuments</h3>

    <div class="flexcontainer">
      <MonumentComponent :monument="monument"/>
    </div>
    <a src="/newMonument">Add your monument</a> //TODO: Wrm werkt dit niet?
    <img src="..\assets\images\English Flag.png" id="languageImage"/>
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

  #languageImage {
    width: 50px;
    height: 50px;
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
    margin-bottom: 3rem;
  }

  .flexcontainer > * {
    width: 30%;
  }

  a {
    background-color: var(--color-background) ;
    padding: 1rem;
    border-radius: 10px;
    display: block;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }
</style>


