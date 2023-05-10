<template>
  <div>
  <!-- {{ monument }} -->
    <img :src="monument.images"/>


    <h1 class="green">{{ monument.name }}</h1>
    <table>
      //TODO: namen nog veranderen!
      <tr>
        <td>Name</td> 
        <td>{{ monument.name }}</td>
      </tr>
      <tr>
        <td>Descritpion</td>  
        <td>{{ monument.descritpion }}</td>
      </tr>
      <tr>
        <td>Location</td> 
        <td>{{ monument.location }}</td>
      </tr>
       <tr>
        <td>Historical Significance</td> 
        <td>{{ monument.historicalSignificance }}</td>
      </tr>
      <tr>
        <td>Type</td>
        <td>{{ monument.type }}</td>
      </tr>
      <tr>
        <td>Year of construction</td> 
        <td>{{ monument.yearOfConstruction }}</td>
      </tr>
      <tr>
        <td>Monument Designer</td> 
        <td>{{ monument.designer }}</td>
      </tr>
      <tr>
        <td>Accessibility</td> 
        <td>{{ monument.accessibility }}</td>
      </tr>
      <tr>
        <td>Used Materialas</td> 
        <td>{{ monument.usedMaterials }}</td>
      </tr>
      <tr>
        <td>Dimensions</td> 
        <td>{{ monument.dimension }}</td>
      </tr>
      <tr>
        <td>Weight</td> 
        <td>{{ monument.weight }}</td>
      </tr>
      <tr>
        <td>Cost to construct</td> 
        <td>{{ monument.costToConstruct }}</td>
      </tr>
      <tr>
        <td>Audiovisual</td> 
        <td>{{ monument.audioVisual }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MonumentDetailComponent",
  props:{
    monument:{
      required: true
    }
  },
  data(){
    return {

    }
  }
}
</script>

