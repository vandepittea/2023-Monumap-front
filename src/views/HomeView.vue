<template>
  <main>
    <MonumentDetailComponent :monument="monument"/>
  </main>
</template>



<script>

import MonumentDetailComponent from '../components/MonumentDetailComponent.vue'

export default{
  "name": "HomeView",
  components: { MonumentDetailComponent },
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


