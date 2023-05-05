<template>
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
    <option value="">--Please choose an option--</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
  
  <label for="yearOfConstructions">Year of construction:</label>
  <input type="text" id="yearOfConstructions" name="yearOfConstructions" required>

  <label for="monumentDesigner">Monument designer:</label>
  <input type="text" id="monumentDesigner" name="monumentDesigner" required>

//TODO: accessibility, checkbox
//TODO: usedMaterials
//TODO: dimensions
//TODO: weight

  <label for="costToConstruct">Cost to construct:</label>
  <input type="text" id="costToConstruct" name="costToConstruct" required>
  
  //TODO: Audiovisual

  <input type="submit" value="Submit">
</form>

</template>