<template>
    <form @submit.prevent="submitForm">
      <!-- {{ formData }} -->
      <div class="form-field">
      <label for="name">Name:</label>
      <div class="language-field">
        <div class="language-label">English</div>
        <input type="text" name="name" v-model="formData.monument_language.find(lang => lang.language === 'English').name" required>
        <div class="language-label">Dutch</div>
        <input type="text" name="name" v-model="formData.monument_language.find(lang => lang.language === 'Dutch').name" required>
      </div>
    </div>

    <div class="form-field">
      <label for="description">Description:</label>
      <div class="language-field">
        <div class="language-label">English</div>
        <textarea name="description" v-model="formData.monument_language.find(lang => lang.language === 'English').description" required></textarea>
        <div class="language-label">Dutch</div>
        <textarea name="description" v-model="formData.monument_language.find(lang => lang.language === 'Dutch').description" required></textarea>
      </div>
    </div>

      <div class="form-field">
        <label for="historical-significance">Historical significance:</label>
        <div class="language-field">
          <div class="language-label">English</div>
          <textarea name="historical-significance" v-model="formData.monument_language.find(lang => lang.language === 'English').historical_significance"></textarea>
          <div class="language-label">Dutch</div>
          <textarea name="historical-significance" v-model="formData.monument_language.find(lang => lang.language === 'Dutch').historical_significance"></textarea>
        </div>
      </div>


      <fieldset>
        <legend>Type:</legend>
        <div class="language-field">
          <div class="language-label">English</div>
          <div class="radio-container" v-for="(type, index) in typesEn" :key="index">
            <input
              type="radio"
              :id="`optionEn${index+1}`"
              :value="type"
              v-model="formData.monument_language.find(lang => lang.language === 'English').type"
              required
            >
            <label :for="`optionEn${index+1}`">{{ type }}</label>
          </div>
        </div>

        <div class="language-field">
          <div class="language-label">Dutch</div>
          <div class="radio-container" v-for="(type, index) in typesNl" :key="index">
            <input
              type="radio"
              :id="`optionNl${index+1}`"
              :value="type"
              v-model="formData.monument_language.find(lang => lang.language === 'Dutch').type"
              required
            >
            <label :for="`optionNl${index+1}`">{{ type }}</label>
          </div>
        </div>
      </fieldset>


      <div class="form-field">
        <label for="year-of-construction">Year of construction:</label>
        <input type="number" name="year-of-construction" v-model="formData.year_of_construction" required>
      </div>

      <div class="form-field">
        <label for="monument-designer">Monument designer:</label>
        <div class="language-field">
          <div class="language-label">Designer</div>
          <input type="text" name="monument-designer" v-model="formData.monument_designer" required>
        </div>
      </div>

      <fieldset>
        <legend>Accessibility:</legend>
        <div class="language-label">English</div>
        <div class="checkbox-container" v-for="option in accessibilityEn" :key="option">
          <input
            type="checkbox"
            :name="option"
            :value="option"
            v-model="formData.monument_language.find(lang => lang.language === 'English').accessibility"
            :true-value="option"
            :false-value="null"
          >
          <label :for="option">{{ option }}</label>
        </div>

        <div class="language-label">Dutch</div>
        <div class="checkbox-container" v-for="option in accessibilityNl" :key="option">
          <input
            type="checkbox"
            :name="option"
            :value="option"
            v-model="formData.monument_language.find(lang => lang.language === 'Dutch').accessibility"
            :true-value="option"
            :false-value="null"
          >
          <label :for="option">{{ option }}</label>
        </div>
      </fieldset>

      <div class="form-field">
        <label for="materials-used">Materials used:</label>
        <div class="language-field">
          <div class="language-label">English</div>
          <textarea name="materials-used" v-model="formData.monument_language.find(lang => lang.language === 'English').used_materials" required></textarea>
          <div class="language-label">Dutch</div>
          <textarea name="materials-used" v-model="formData.monument_language.find(lang => lang.language === 'Dutch').used_materials" required></textarea>
        </div>
      </div>

      <div class="form-field">
        <label for="weight">Weight:</label>
        <input type="number" id="weight" name="weight" v-model="formData.weight" required>
      </div>

      <div class="form-field">
        <label for="cost-of-construction">Cost of construction:</label>
        <input type="number" name="const-of-construction" v-model="formData.cost_to_construct" required>
      </div>

      <fieldset>
        <legend>Location:</legend>
        <div class="language-field">
          <div class="language-label">Latitude:</div>
          <input type="number" v-model="formData.location.latitude" step="any" required>
          <div class="language-label">Longitude:</div>
          <input type="number" v-model="formData.location.longitude" step="any" required>
        </div>
        <div class="language-field">
          <div class="language-label">Street:</div>
          <input type="text" v-model="formData.location.street">
          <div class="language-label">Number:</div>
          <input type="number" v-model="formData.location.number">
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
      <!-- <fieldset>
      <legend>Images:</legend>
      <div v-for="(image, index) in formData.images" :key="index" class="language-field">
        <div class="language-label">Url:</div>
        <textarea name="url" v-model="image.url" required></textarea>
        <div class="language-label">Caption English:</div>
        <textarea name="caption" v-model="formdata.images[0].caption"></textarea>
        <div class="language-label">Caption Dutch:</div>
        <textarea name="caption" v-model="formdata.images[1].caption"></textarea>
      </div>
    </fieldset> -->
    <!-- <fieldset>
  <legend>Images:</legend>
  <div v-for="(image, index) in formData.images" :key="index" class="language-field">
    <div class="language-label">Url:</div>
    <textarea name="url" v-model="image.url" required></textarea>
    <div class="language-label">Caption English:</div>
    <textarea name="caption" v-model="image.image_language.find(lang => lang.language === 'English').caption" required></textarea>
    <div class="language-label">Caption Dutch:</div>
    <textarea name="caption" v-model="image.image_language.find(lang => lang.language === 'Dutch').caption" required></textarea>
  </div>
</fieldset> -->





    <fieldset>
      <legend>AudiovisualSource:</legend>
      <div class="language-field">
        <div class="language-label">Title English:</div>
        <input type="text" v-model="formData.audiovisual_source.audiovisual_source_language.find(lang => lang.language === 'English').title" required>        

        <div class="language-label">Title Dutch:</div>
        <input type="text" v-model="formData.audiovisual_source.audiovisual_source_language.find(lang => lang.language === 'Dutch').title" required>     
      
        <div class="language-label">Url:</div>
        <input type="text" v-model="formData.audiovisual_source.url" required>
      </div>
      <div class="language-field">
        <label class="language-label" for="audio-video-type">Type:</label>
        <select name="audio-video-type" v-model="formData.audiovisual_source.type" required>
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
  import { typesNl, typesEn, accessibilityEn, accessibilityNl } from "../utils/arraysValues.js";

  export default {
    data (){
      return {
        typesNl,
        typesEn,
        accessibilityEn,
        accessibilityNl,
      }
    },
    // mounted() {
    //    formData.monument_language.find(lang => lang.language === 'English').used_materials = formData.monument_language.find(lang => lang.language === 'English').used_materials.join("\n"); //TODO
    //    formData.monument_language.find(lang => lang.language === 'Dutch').used_materials = formData.monument_language.find(lang => lang.language === 'Dutch').used_materials.join("\n"); //TODO
    //   formData.images.url = formData.images.url.join("\n"); //TODO: werkt dit? 
    //   formData.images.caption = formData.images.caption.join("\n"); //TODO: werkt dit? 
    // },
    props: {
      formData: {
        type: Object,
        required: true,
      },
    },


  //   computed: {
  //   // updatedMaterialsUsed() { //TODO: dit nog gebruiken? 
  //   //   const updatedFormData = { ...formData };
  //   //   updatedFormData.materialsUsed.en = updatedFormData.materialsUsed.en.split("\n");
  //   //   updatedFormData.materialsUsed.nl = updatedFormData.materialsUsed.nl.split("\n");
  //   //   return updatedFormData;
  //   // },
  //   // updatedImages() {
  //   //   const updatedFormData = { ...formData };
  //   //   updatedFormData.images.url = updatedFormData.images.url.split("\n");
  //   //   updatedFormData.images.caption = updatedFormData.images.caption.split("\n");
  //   //   return updatedFormData;
  //   // }
  // },
    methods: {
      submitForm() {
        // Emit event to notify parent component
        console.log("emit formSubmitted")
        console.log(JSON.parse(JSON.stringify(this.formData)));
        this.$emit("formSubmitted", JSON.parse(JSON.stringify(this.formData))); //todo: hier de formdata meegeven?

        // this.$emit("formSubmitted", this.formData); //todo: hier de formdata meegeven?
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
    margin-bottom: 2rem;
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