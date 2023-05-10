<template>
  <div class="container">
    <h2>Add here your monument</h2>
    <div class="errors" v-show="hasErrors">
        <ul>
            <li v-for="error in errors">
                {{ error }}
            </li>
        </ul>
    </div>
    <form @submit.prevent="addMonument">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" v-model="name" required>
      
      <label for="description">Description:</label>
      <textarea id="description" name="description" v-model="description" required></textarea>

      <fieldset>
        <legend>Fill in the location</legend>
          <label for="latitude">Latitude:</label>
          <input type="number" id="latitude" name="latitude" v-model="location.latitude" required>
          <label for="longitude">Longitude:</label>
          <input type="number" id="longitude" name="longitude" v-model="location.longitude"  required>
          <label for="street">Street:</label>
          <input type="text" id="street" name="street" v-model="location.street" >
          <label for="number">Number:</label>
          <input type="number" id="number" name="number" v-model="location.number" >
          <label for="city">City:</label>
          <input type="text" id="city" name="city" v-model="location.city"  required>
      </fieldset>

      <label for="historicalSignificance">Historical significance:</label>
      <textarea id="historicalSignificance" name="historicalSignificance" v-model="historicalSignificance" ></textarea>

      <label for="type">Select the type:</label>
      <select id="type" name="type" v-model="type" required>
        <option value="">Please choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <label for="yearOfConstructions">Year of construction:</label>
      <input type="number" id="yearOfConstructions" name="yearOfConstructions" v-model="yearOfConstruction">
      
      <label for="monumentDesigner">Monument designer:</label>
      <input type="text" id="monumentDesigner" name="monumentDesigner" v-model="monumentDesigner">
    
      <fieldset>
        <legend>Choose wich accesibility your monument has</legend>
        <div class="checkbox-container">
        <input type="checkbox" id="none" name="none" value="true">
        <label for="none">None</label>
        </div>

      <div class="checkbox-container">
        <input type="checkbox" id="wheelchairFriendly" name="wheelchairFriendly" value="true">
        <label for="wheelchairFriendly">Wheelchair-friendly</label>
      </div>

      <div class="checkbox-container">
        <input type="checkbox" id="nearParkingAreas" name="nearParkingAreas" value="true">
        <label for="nearParkingAreas">Near parking areas</label>
      </div>

      <div class="checkbox-container">
        <input type="checkbox" id="lowSlopeRamps" name="lowSlopeRamps" value="true">
        <label for="lowSlopeRamps">Low-slope ramps</label>
      </div>

      <div class="checkbox-container">
        <input type="checkbox" id="powerAssistedDoors" name="powerAssistedDoors" value="true">
        <label for="powerAssistedDoors">Power-assisted doors</label>
      </div>
      
      <div class="checkbox-container">
        <input type="checkbox" id="elevators" name="elevators" value="true">
        <label for="elevators">Elevators</label>
      </div>

      <div class="checkbox-container">
        <input type="checkbox" id="accessibleWashrooms" name="accessibleWashrooms" value="true">
        <label for="accessibleWashrooms">Accessible washrooms</label>
      </div>
    </fieldset>
  
    //TODO: usedMaterials

    <fieldset>
      <legend>Fill in the dimensions</legend>

      <label for="height">Height:</label>
      <input type="number" id="height" name="height" v-model="height" required>

      <label for="width">Width:</label>
      <input type="number" id="width" name="width" v-model="width">

      <label for="depth">Depth:</label>
      <input type="number" id="depth" name="depth" v-model="dept">
    </fieldset>

      <label for="weight">Weight:</label>
      <input type="number" id="weight" name="weight" v-model="weight">

      <label for="costToConstruct">Cost to construct:</label>
      <input type="text" id="costToConstruct" name="costToConstruct" v-model="costToConstruct">
      
      //TODO: Audiovisual

      <input type="submit" value="Submit">
  </form>
</div>
</template>
<script>
  export default {
    name: "AddMonumentView",
    data(){
      return {
        name: "",
        description: "",
        location: {
          latitude: "",
          longitude: "",
          street: "",
          number: "",
          city: ""
        }, 
        historicalSignificance: "",
        type: "",
        yearOfConstruction: "",
        monumentDesigner: "",
        accessibility: [],
        usedMaterials: [],
        dimensions: {
          height: "",
          width: "",
          dept: ""
        },
        weight: "",
        costToConstruct: "",
        //TODO: audiovisual
        errors: []
      };
    },
    watch: {
        number(newValue, oldValue) {
            this.errors = [];
            if (newValue) {
                this.validate();
            }
        }
        
    },
      methods: {
        addMonument(){
          console.log("addMonument");
          this.validate();
          console.log(this.errors)
          if (this.hasErrors) return;

          //TODO: monument toevoegen via js naar LarvelServer
        },

        validate() {
          this.errors = [];

          if (this.name === "") {
            this.errors.push("Name is required.");
            return
          }

          if (this.description === "") {
            this.errors.push("Description is required.");
            return
          }

          if (this.location.latitude === "") {
            this.errors.push("Latitude is required.");
            return
          }

          if (this.location.longitude === "") {
            this.errors.push("Longitude is required.");
            return
          }

          if (this.location.city === "") {
            this.errors.push("City is required.");
            return
          }

          if (this.type === "") {
            this.errors.push("Type is required.");
            return
          }

           //TODO: is dit wel oke? 
          if (this.yearOfConstruction === "") { 
            this.errors.push("Year of construction is required.");
            return
          }

           //TODO: is dit wel oke?  
          if (this.monumentDesigner === "") {
            this.errors.push("Monument designer is required.");
            return
          }

          if (this.accesibility === "") {
            this.errors.push("Accesibility is required.");
            return
          }

          if (this.dimensions.height === "") {
            this.errors.push("Height is required.");
            return
          }
        }
      }
    }
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem; 
  background-color: rgb(234, 234, 188);
  border-radius: 2%;
}

errors {
    color: red;
}

.error{
    border: 1px solid red;
    background-color: rgb(255,182,182);
}

h2 {
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 2rem;
}

  form label,
  form input,
  form select,
  form textarea,
  fieldset {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }

  .checkbox-container {
    text-align: start;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

</style>