<template>
  <div class="container">
    <h2>Add here your monument</h2>
    <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="description">Description:</label>
    <textarea id="description" name="description" required></textarea>

    <label for="location">Location:</label>
    <input type="text" id="location" name="location" required>

    <label for="historicalSignificance">Description:</label>
    <textarea id="historicalSignificance" name="historicalSignificance" required></textarea>

    <label for="type">Select the type:</label>
    <select id="type" name="type" required>
      <option value="">Please choose an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>

    <label for="yearOfConstructions">Year of construction:</label>
    <input type="number" id="yearOfConstructions" name="yearOfConstructions">
    
    <label for="monumentDesigner">Monument designer:</label>
    <input type="text" id="monumentDesigner" name="monumentDesigner" >
  
    <fieldset>
      <legend>Choose wich accesibility your monument has</legend>
    <div class="checkbox-container">
      <input type="checkbox" id="wheelchairFriendly" name="wheelchairFriendly" value="true">
      <label for="wheelchairFriendly"> Wheelchair-friendly</label>
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
    <input type="number" id="height" name="height" required>

    <label for="width">Width:</label>
    <input type="number" id="width" name="width" required>

    <label for="dept">Dept:</label>
    <input type="number" id="dept" name="dept" required>
  </fieldset>

    <label for="weight">Weight:</label>
    <input type="number" id="weight" name="weight" required>

    <label for="costToConstruct">Cost to construct:</label>
    <input type="text" id="costToConstruct" name="costToConstruct" required>
    
    //TODO: Audiovisual

    <input type="submit" value="Submit">
  </form>
</div>

</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem; 
  background-color: rgb(234, 234, 188);
  border-radius: 2%;
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