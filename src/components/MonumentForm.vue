<template>
  <form @submit.prevent="submitForm">
    <div class="form-field">
      <div class="language-label">Name:</div>
      <div class="language-field">
        <label for="name-eng" class="language-label">English</label>
        <input type="text" id="name-eng" v-model="formData.monument_language.find(lang => lang.language === 'English').name">
        <label for="name-nl" class="language-label">Dutch</label>
        <input type="text" id="name-nl" v-model="formData.monument_language.find(lang => lang.language === 'Dutch').name" required>
      </div>
    </div>

    <div class="form-field">
      <div class="language-label">Description:</div>
      <div class="language-field">
        <label for="description-eng" class="language-label">English</label>
        <textarea id="description-eng" v-model="formData.monument_language.find(lang => lang.language === 'English').description" required></textarea>
        <label for="description-nl" class="language-label">Dutch</label>
        <textarea id="description-nl" v-model="formData.monument_language.find(lang => lang.language === 'Dutch').description" required></textarea>
      </div>
    </div>

    <div class="form-field">
      <div class="language-label">Historical significance:</div>
      <div class="language-field">
        <label for="historical-significance-eng" class="language-label">English</label>
        <textarea id="historical-significance-eng" v-model="formData.monument_language.find(lang => lang.language === 'English').historical_significance"></textarea>
        <label for="historical-significance-nl" class="language-label">Dutch</label>
        <textarea id="historical-significance-nl" v-model="formData.monument_language.find(lang => lang.language === 'Dutch').historical_significance"></textarea>
      </div>
    </div>

    <div class="form-field">
      <div class="language-label">Type:</div>
      <div class="language-field">
        <label for="type-eng" class="language-label">English</label>
        <select id="type-eng" v-model="formData.monument_language.find(lang => lang.language === 'English').type" required>
          <option value="">Please choose an option</option>
          <option v-for="type in typesEn" :key="type" :value="type">{{ type }}</option>
        </select>

        <label for="type-nl" class="language-label">Dutch</label>
        <select id="type-nl" v-model="formData.monument_language.find(lang => lang.language === 'Dutch').type" required>
          <option value="">Please choose an option</option>
          <option v-for="type in typesNl" :key="type" :value="type">{{ type }}</option>
        </select>
      </div>
    </div>

    <div class="form-field">
      <label for="year-of-construction">Year of construction:</label>
      <input type="number" id="year-of-construction" v-model="formData.year_of_construction" required>
    </div>

    <div class="form-field">
      <label for="monument-designer">Monument designer:</label>
      <input type="text" id="monument-designer" v-model="formData.monument_designer" required>
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
        <div class="language-label">Materials used:</div>
        <div class="language-field">
          <label for="materials-used-eng" class="language-label">English</label>
          <textarea id="materials-used-eng" v-model="englishUsedMaterials"></textarea>

          <label for="materials-used-nl" class="language-label">Dutch</label>
          <textarea id="materials-used-nl" v-model="dutchUsedMaterials"></textarea>
        </div>
      </div>

      <div class="form-field">
        <label for="weight">Weight:</label>
        <input type="number" id="weight" v-model="formData.weight">
      </div>

      <div class="form-field">
        <label for="cost-of-construction">Cost of construction:</label>
        <input type="number" id="const-of-construction" v-model="formData.cost_to_construct">
      </div>

      <fieldset>
        <legend>Location:</legend>
          <label class="language-label">Latitude:</label>
          <input type="number" v-model="formData.location.latitude" step="any" required>

          <label class="language-label">Longitude:</label>
          <input type="number" v-model="formData.location.longitude" step="any" required>

          <label class="language-label">Street:</label>
          <input type="text" v-model="formData.location.street">

          <label class="language-label">Number:</label>
          <input type="number" v-model="formData.location.number">

          <label class="language-label">City:</label>
          <input type="text" v-model="formData.location.city" required>
      </fieldset>

      <fieldset>
        <legend>Dimensions:</legend>
          <label for="height" class="language-label">Height:</label>
          <input id="height" type="number" v-model="formData.dimensions.height">

          <label for="width" class="language-label">Width:</label>
          <input id="width" type="number" v-model="formData.dimensions.width">

          <label for="depth" class="language-label">Depth:</label>
          <input id="depth" type="number" v-model="formData.dimensions.depth">
      </fieldset>

      <fieldset>
      <legend>Images:</legend>
          <label for="image-url">URLs:</label>
          <textarea id="image-url" v-model="urlInput" required></textarea>

          <label for="caption-en">Captions English:</label>
          <textarea id="caption-en" v-model="captionEnInput" required></textarea>

          <label for="caption-nl">Captions Dutch:</label>
          <textarea id="caption-nl" v-model="captionNlInput" required></textarea>
    </fieldset>

    <fieldset>
      <legend>AudiovisualSource:</legend>
        <label for="audio-video-url" class="language-label">Url:</label>
        <input type="text" id="audio-video-url" v-model="formData.audiovisual_source.url">

        <label for="audio-video-title-eng" class="language-label">Title English:</label>
        <input id="audio-video-title-eng" type="text" v-model="formData.audiovisual_source.audiovisual_source_language.find(lang => lang.language === 'English').title">        

        <label for="audio-video-title-nl" class="language-label">Title Dutch:</label>
        <input id="audio-video-title-nl" type="text" v-model="formData.audiovisual_source.audiovisual_source_language.find(lang => lang.language === 'Dutch').title">     

        <label class="language-label" for="audio-video-type">Type:</label>
        <select id="audio-video-type" v-model="formData.audiovisual_source.type">
          <option value="">Please choose an option</option>
          <option value="video">Video</option>
          <option value="audio">Audio</option>
        </select>
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
    created(){
      this.createDefaultDimensions();
      this.createDefaultAudiovisualSource();
      this.populateImageData();
    },
    async mounted() {
    this.typesNl = await getTypes("nl");
    this.typesEn = await getTypes("en");
    },
    props: {
      formData: {
        type: Object,
        required: true,
      },
    },
    computed: {
      englishUsedMaterials: {
        get() {
          return this.formData.monument_language.find(lang => lang.language === 'English').used_materials.join(", ");
        },
        set(value) {
          this.formData.monument_language.find(lang => lang.language === 'English').used_materials = value.split(",").map(item => item.trim());
        }
      },
      dutchUsedMaterials: {
        get() {
          return this.formData.monument_language.find(lang => lang.language === 'Dutch').used_materials.join(", ");
        },
        set(value) {
          this.formData.monument_language.find(lang => lang.language === 'Dutch').used_materials = value.split(",").map(item => item.trim());
        }
      }
    },
    methods: {
      populateImageData() {
      if (this.formData.images && this.formData.images.length > 0) {
        const urls = this.formData.images.map((image) => image.url).join(", ");
        const captionsEn = this.formData.images
          .map(
            (image) =>
              image.image_language.find((lang) => lang.language === "English")
                .caption
          )
          .join(", ");
        const captionsNl = this.formData.images
          .map(
            (image) =>
              image.image_language.find((lang) => lang.language === "Dutch")
                .caption
          )
          .join(", ");

        this.urlInput = urls;
        this.captionEnInput = captionsEn;
        this.captionNlInput = captionsNl;
      }
    },
      createDefaultDimensions() {
      if (this.formData.dimensions === null) {
        this.formData.dimensions = {
          height: null,
          depth: null,
          width: null
        };
      }
    },
    createDefaultAudiovisualSource() {
      if (this.formData.audiovisual_source === null) {
        this.formData.audiovisual_source = {
          url: null,
          audiovisual_source_language: [
            {
              title: null,
              language: 'English'
            },
            {
              title: null,
              language: 'Dutch'
            }
          ],
          type: null
        };
      }
    },
      addImage() {
        const imagesLength = this.urlInput.split(",").length;
        const captionEnLength = this.captionEnInput.split(",").length;
        const captionNlLength = this.captionNlInput.split(",").length;

        if (imagesLength !== captionEnLength || imagesLength !== captionNlLength) {
          const error = "The number of URLs and captions in English and Dutch aren't the same";
          this.$emit("formError", error);
          throw Error("The number of URLs and captions in English and Dutch aren't the same");
        }

        this.formData.images = [];

        const urls = this.urlInput.split(",");
        const captionsEn = this.captionEnInput.split(",");
        const captionsNl = this.captionNlInput.split(",");

        for (let i = 0; i < urls.length; i++) {
          const image = {
            url: urls[i].trim(),
            image_language: [
              {
                caption: captionsEn[i].trim(),
                language: "English",
              },
              {
                caption: captionsNl[i].trim(),
                language: "Dutch",
              },
            ],
          };

          this.formData.images.push(image);
        }

        this.urlInput = "";
        this.captionEnInput = "";
        this.captionNlInput = "";
      },
      addUsedMaterials() {
        const usedMaterialsEn = this.formData.monument_language.find(lang => lang.language === 'English');
        const usedMaterialsNl = this.formData.monument_language.find(lang => lang.language === 'Dutch');

        usedMaterialsEn.used_materials = this.englishUsedMaterials.split(',').map(item => item.trim());
        usedMaterialsNl.used_materials = this.dutchUsedMaterials.split(',').map(item => item.trim());
      },
      deleteDimension(){
        const dimensions = this.formData.dimensions;
        if ((dimensions.height === "" || dimensions.height === null) && (dimensions.width === "" || dimensions.width === null) && (dimensions.depth === "" || dimensions.depth === null)) {
          delete this.formData.dimensions;
        }
      },
      deleteAudiovisualSource(){
        const audiovisualSource = this.formData.audiovisual_source;
        if ((audiovisualSource.url === "" || audiovisualSource.url === null) && audiovisualSource.audiovisual_source_language.every(lang => (lang.title === "" || lang.title === null)) && (audiovisualSource.type === "" || audiovisualSource.type === null)) {
          delete this.formData.audiovisual_source;
        }
      },
      submitForm() {
        this.addImage();
        this.addUsedMaterials();
        this.deleteDimension();
        this.deleteAudiovisualSource();
        this.$emit("formSubmitted", JSON.parse(JSON.stringify(this.formData)));
      }
    }
  };

  </script>
  
  <style scoped>
  .form-field {
    margin-bottom: 1rem;
  }
  
  .language-field {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 1rem;
  }
  
  .language-label {
    font-weight: bold;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .checkbox-container {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  input[type="submit"] {
    margin-top: 1rem;
    width: 100% !important;
  }

  .form-field input {
    margin-left: 2rem;
  }

  .form-field .language-field input {
    margin-left: 0;
  }
  </style>  