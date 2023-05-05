<template>
  <div class="greetings">
  {{ monument }}
    <img src=""/>
    <h1 class="green">{{ msg }}</h1>
    <table>
      <tr>
        <td>Name</td> //TODO: namen nog veranderen!
        <td></td>
      </tr>
      <tr>
        <td>Descritpion</td>  //TODO: namen nog veranderen!
        <td></td>
      </tr>
      <tr>
        <td>Location</td>  //TODO: namen nog veranderen!
        <td></td>
      </tr>
       <tr>
        <td>Historical Significance</td> //TODO: namen nog veranderen!
        <td></td>
      </tr>
      <tr>
        <td>Type</td>
        <td></td>
      </tr>
      <tr>
        <td>Year of construction</td>  //TODO: namen nog veranderen!
        <td></td>
      </tr>
      <tr>
        <td>Monument Designer</td> //TODO: namen nog veranderen!
        <td></td>
      </tr>
      <tr>
        <td>Accessibility</td>  //TODO: namen nog veranderen!
        <td></td>
      </tr>
      <tr>
        <td>Used Materialas</td>  //TODO: namen nog veranderen!
        <td></td>
      </tr>
      <tr>
        <td>Dimensions</td>  //TODO: namen nog veranderen!
        <td></td>
      </tr>
      <tr>
        <td>Weight</td>  //TODO: namen nog veranderen!
        <td></td>
      </tr>
      <tr>
        <td>Cost to construct</td>  //TODO: namen nog veranderen!
        <td></td>
      </tr>
      <tr>
        <td>Audiovisual</td>  //TODO: namen nog veranderen!
        <td></td>
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

