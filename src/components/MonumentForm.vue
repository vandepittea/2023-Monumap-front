<template>
    <form @submit.prevent="submitForm">
      <div class="form-field">
        <label for="name">Name:</label>
        <div class="language-field">
          <div class="language-label">English</div>
          <input type="text" name="name" v-model="formData.name.en" required>
          <div class="language-label">Dutch</div>
          <input type="text" name="name" v-model="formData.name.nl" required>
        </div>
      </div>

      <div class="form-field">
        <label for="description">Description:</label>
        <div class="language-field">
          <div class="language-label">English</div>
          <textarea name="description" v-model="formData.description.en" required></textarea>
          <div class="language-label">Dutch</div>
          <textarea name="description" v-model="formData.description.nl" required></textarea>
        </div>
      </div>

      <div class="form-field">
        <label for="historical-significance">Historical significance:</label>
        <div class="language-field">
          <div class="language-label">English</div>
          <textarea name="historical-significance" v-model="formData.historicalSignificance.en"></textarea>
          <div class="language-label">Dutch</div>
          <textarea name="historical-significance" v-model="formData.historicalSignificance.nl"></textarea>
        </div>
      </div>

      <fieldset>
        <legend>Type:</legend>
        <div class="language-field">
          <div class="checkbox-container">
            <input type="checkbox" name="option1" value="option1" v-model="formData.type">
            <label for="option1">Option1</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="option2" value="option2" v-model="formData.type">
            <label for="option2">Option2</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="option3" value="option3" v-model="formData.type">
            <label for="option3">Option3</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="option4" value="option4" v-model="formData.type">
            <label for="option4">Option4</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="option5" value="option5" v-model="formData.type">
            <label for="option5">Option5</label>
          </div>
        </div>
      </fieldset>

      <div class="form-field">
        <label for="year-of-construction">Year of construction:</label>
        <input type="number" name="year-of-construction" v-model="formData.yearOfConstruction" required>
      </div>

      <div class="form-field">
        <label for="monument-designer">Monument designer:</label>
        <div class="language-field">
          <div class="language-label">English</div>
          <input type="text" name="monument-designer" v-model="formData.monumentDesigner.en" required>
          <div class="language-label">Dutch</div>
          <input type="text" name="monument-designer" v-model="formData.monumentDesigner.nl" required>
        </div>
      </div>

      <fieldset>
        <legend>Accessibility:</legend>
        <div class="language-field">
          <div class="checkbox-container">
            <input type="checkbox" name="none" value="none" v-model="formData.accessibility">
            <label for="none">None</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="partial" value="partial" v-model="formData.accessibility">
            <label for="partial">Partial</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="full" value="full" v-model="formData.accessibility">
            <label for="full">Full</label>
          </div>
        </div>
      </fieldset>

      <div class="form-field">
        <label for="materials-used">Materials used:</label>
        <div class="language-field">
          <div class="language-label">English</div>
          <textarea name="materials-used" v-model="formData.materialsUsed.en" required></textarea>
          <div class="language-label">Dutch</div>
          <textarea name="materials-used" v-model="formData.materialsUsed.nl" required></textarea>
        </div>
      </div>

      <div class="form-field">
        <label for="weight">Weight:</label>
        <input type="number" id="weight" name="weight" v-model="formData.weight" required>
      </div>

      <div class="form-field">
        <label for="cost-of-construction">Cost of construction:</label>
        <input type="number" name="const-of-construction" v-model="formData.costOfConstruction" required>
      </div>

      <fieldset>
        <legend>Location:</legend>
        <div class="language-field">
          <div class="language-label">Latitude:</div>
          <input type="number" v-model="formData.location.latitude" required>
          <div class="language-label">Longitude:</div>
          <input type="number" v-model="formData.location.longitude" required>
        </div>
        <div class="language-field">
          <div class="language-label">Street:</div>
          <input type="text" v-model="formData.location.street" required>
          <div class="language-label">Number:</div>
          <input type="number" v-model="formData.location.number" required>
        </div>
        <div class="language-field">
          <div class="language-label">City:</div>
          <input type="text" v-model="formData.location.city" required>
        </div>
      </fieldset>

      <fieldset>
        <legend>Dimensions:</legend>
        <div class="language-field">
          <div class="language-label">Height:</div>
          <input type="number" v-model="formData.dimensions.height" required>
          <div class="language-label">Width:</div>
          <input type="number" v-model="formData.dimensions.width" required>
        </div>
        <div class="language-field">
          <div class="language-label">Depth:</div>
          <input type="text" v-model="formData.dimensions.depth" required>
        </div>
      </fieldset>

      <fieldset>
        <legend>Images:</legend>
        <div class="language-field">
          <div class="language-label">Url:</div>
          <textarea name="url" v-model="formData.images.url" required></textarea>
          <div class="language-label">Caption:</div>
          <textarea name="caption" v-model="formData.images.caption" required></textarea>
        </div>
      </fieldset>

      <fieldset>
        <legend>AudiovisualSource:</legend>
        <div class="language-field">
          <div class="language-label">Title:</div>
          <input type="text" v-model="formData.audiovisualSource.title" required>
          <div class="language-label">Url:</div>
          <input type="text" v-model="formData.audiovisualSource.url" required>
        </div>
        <div class="language-field">
          <label class="language-label" for="audio-video-type">Type:</label>
          <select name="audio-video-type" v-model="formData.audiovisualSource.type" required>
            <option value="">Please choose an option</option>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
          </select>
        </div>
      </fieldset>

      <input type="submit" value="Submit">
    </form>
  </template>
  
  <script>
  export default {
    mounted() {
      this.formData.materialsUsed.en = this.formData.materialsUsed.en.join("\n");
      this.formData.materialsUsed.nl = this.formData.materialsUsed.nl.join("\n");
      this.formData.images.url = this.formData.images.url.join("\n");
      this.formData.images.caption = this.formData.images.caption.join("\n");
    },
    props: {
      formData: {
        type: Object,
        required: true
      }
    },
    computed: {
    updatedMaterialsUsed() {
      const updatedFormData = { ...this.formData };
      updatedFormData.materialsUsed.en = updatedFormData.materialsUsed.en.split("\n");
      updatedFormData.materialsUsed.nl = updatedFormData.materialsUsed.nl.split("\n");
      return updatedFormData;
    },
    updatedImages() {
      const updatedFormData = { ...this.formData };
      updatedFormData.images.url = updatedFormData.images.url.split("\n");
      updatedFormData.images.caption = updatedFormData.images.caption.split("\n");
      return updatedFormData;
    }
  },
    methods: {
      submitForm() {
        // Emit event to notify parent component
        this.$emit("formSubmitted");
      }
    }
  };
  </script>
  
  <style>
  .form-field {
    margin-bottom: 1rem;
  }
  
  .language-field {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  
  .language-label {
    font-weight: bold;
  }
  
  .checkbox-container {
    display: flex;
    align-items: center;
  }
  
  input[type="submit"] {
    margin-top: 1rem;
  }
  </style>  