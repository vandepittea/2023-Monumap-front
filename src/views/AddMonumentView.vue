<template>
  <div class="container">
    <h2>Add your monument here</h2>
    <div class="error" v-show="hasErrors">
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <form @submit.prevent="addMonument">
      <div class="form-field">
        <label for="name">Name:</label>
        <div class="language-field">
          <div class="language-label">English</div>
          <input type="text" name="name" v-model="name.en" required>
          <div class="language-label">Dutch</div>
          <input type="text" name="name" v-model="name.nl" required>
        </div>
      </div>

      <div class="form-field">
        <label for="description">Description:</label>
        <div class="language-field">
          <div class="language-label">English</div>
          <textarea name="description" v-model="description.en" required></textarea>
          <div class="language-label">Dutch</div>
          <textarea name="description" v-model="description.nl" required></textarea>
        </div>
      </div>

      <div class="form-field">
        <label for="historical-significance">Historical significance:</label>
        <div class="language-field">
          <div class="language-label">English</div>
          <textarea name="historical-significance" v-model="historicalSignificance.en"></textarea>
          <div class="language-label">Dutch</div>
          <textarea name="historical-significance" v-model="historicalSignificance.nl"></textarea>
        </div>
      </div>

      <fieldset>
        <legend>Type:</legend>
        <div class="language-field">
          <div class="checkbox-container">
            <input type="checkbox" name="option1" value="option1" v-model="accessibility.en">
            <label for="none">Option1</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="option2" value="option2" v-model="accessibility.en">
            <label for="partial">Option2</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="option3" value="option3" v-model="accessibility.en">
            <label for="full">Option3</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="option4" value="option4" v-model="accessibility.en">
            <label for="full">Option4</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="option5" value="option5" v-model="accessibility.en">
            <label for="full">Option5</label>
          </div>
        </div>
      </fieldset>

      <div class="form-field">
        <label for="year-of-construction">Year of construction:</label>
        <input type="number" name="year-of-construction" v-model="yearOfConstruction" required>
      </div>

      <div class="form-field">
        <label for="monument-designer">Monument designer:</label>
        <div class="language-field">
          <div class="language-label">English</div>
          <input type="text" name="monument-designer" v-model="monumentDesigner.en" required>
          <div class="language-label">Dutch</div>
          <input type="text" name="monument-designer" v-model="monumentDesigner.nl" required>
        </div>
      </div>

      <fieldset>
        <legend>Accessibility:</legend>
        <div class="language-field">
          <div class="language-label">English</div>
          <div class="checkbox-container">
            <input type="checkbox" name="none" value="none" v-model="accessibility.en">
            <label for="none">None</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="partial" value="partial" v-model="accessibility.en">
            <label for="partial">Partial</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="full" value="full" v-model="accessibility.en">
            <label for="full">Full</label>
          </div>
        </div>
      </fieldset>

      <div class="form-field">
        <label for="materials-used">Materials used:</label>
        <div class="language-field">
          <div class="language-label">English</div>
          <textarea name="materials-used" v-model="materialsUsed.en" required></textarea>
          <div class="language-label">Dutch</div>
          <textarea name="materials-used" v-model="materialsUsed.nl" required></textarea>
        </div>
      </div>

      <div class="form-field">
        <label for="weight">Weight:</label>
        <input type="number" id="weight" name="weight" v-model="weight" required>
      </div>

      <div class="form-field">
        <label for="cost-of-construction">Cost of construction:</label>
        <input type="number" name="const-of-construction" v-model="costOfConstruction" required>
      </div>

      <fieldset>
        <legend>Location:</legend>
        <div class="language-field">
          <div class="language-label">Latitude:</div>
          <input type="number" v-model="location.latitude" required>
          <div class="language-label">Longitude:</div>
          <input type="number" v-model="location.longitude" required>
        </div>
        <div class="language-field">
          <div class="language-label">Street:</div>
          <input type="text" v-model="location.street" required>
          <div class="language-label">Number:</div>
          <input type="number" v-model="location.number" required>
        </div>
        <div class="language-field">
          <div class="language-label">City:</div>
          <input type="text" v-model="location.city" required>
        </div>
      </fieldset>

      <fieldset>
        <legend>Dimensions:</legend>
        <div class="language-field">
          <div class="language-label">Height:</div>
          <input type="number" v-model="dimensions.height" required>
          <div class="language-label">Width:</div>
          <input type="number" v-model="dimensions.width" required>
        </div>
        <div class="language-field">
          <div class="language-label">Depth:</div>
          <input type="text" v-model="dimensions.depth" required>
        </div>
      </fieldset>

      <fieldset>
        <legend>Images:</legend>
        <div class="language-field">
          <div class="language-label">Url:</div>
          <input type="number" v-model="images.url" required>
          <div class="language-label">Caption:</div>
          <input type="number" v-model="images.caption" required>
        </div>
      </fieldset>

      <fieldset>
        <legend>AudiovisualSource:</legend>
        <div class="language-field">
          <div class="language-label">Title:</div>
          <input type="number" v-model="audiovisualSource.title" required>
          <div class="language-label">Url:</div>
          <input type="number" v-model="audiovisualSource.url" required>
        </div>
        <div class="language-field">
          <label class="language-label" for="audio-video-type">Type:</label>
          <select name="audio-video-type" v-model="audiovisualSource.type" required>
            <option value="">Please choose an option</option>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
          </select>
        </div>
      </fieldset>

      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: "AddMonumentView",
  data() {
    return {
      name: {
        en: "",
        nl: ""
      },
      description: {
        en: "",
        nl: ""
      },
      historicalSignificance: {
        en: "",
        nl: ""
      },
      type: {
        en: "",
        nl: ""
      },
      yearOfConstruction: 0,
      monumentDesigner: {
        en: "",
        nl: ""
      },
      accessibility: {
        en: [],
        nl: []
      },
      materialsUsed: {
        en: "",
        nl: ""
      },
      weight: 0,
      costOfConstruction: 0,
      location: {
        latitude: 0,
        longitude: 0,
        street: "",
        number: 0,
        city: ""
      },
      dimensions: {
        height: 0,
        width: 0,
        depth: 0
      },
      images: {
        url: "",
        caption: ""
      },
      audiovisualSource : {
        title: "",
        url: "",
        type: ""
      },
      errors: []
    };
  },
  computed: {
    hasErrors() {
      return this.errors.length > 0;
    }
  },
  methods: {
    addMonument() {
      this.errors = [];

      // Validate form fields
      if (!this.name.en || !this.name.nl) {
        this.errors.push("Please enter the name in both English and Dutch.");
      }
      if (!this.description.en || !this.description.nl) {
        this.errors.push("Please enter the description in both English and Dutch.");
      }
      if (!this.type.en || !this.type.nl) {
        this.errors.push("Please choose the type in both English and Dutch.");
      }
      if (!this.yearOfConstruction) {
        this.errors.push("Please enter the year of construction.");
      }
      if (!this.monumentDesigner.en || !this.monumentDesigner.nl) {
        this.errors.push("Please enter the monument designer in both English and Dutch.");
      }
      if (this.accessibility.en.length === 0 || this.accessibility.nl.length === 0) {
        this.errors.push("Please select the accessibility in both English and Dutch.");
      }
      if (!this.materialsUsed.en || !this.materialsUsed.nl) {
        this.errors.push("Please enter the materials used in both English and Dutch.");
      }
      if (!this.location.en || !this.location.nl) {
        this.errors.push("Please enter the location in both English and Dutch.");
      }
      if (!this.dimensions.en || !this.dimensions.nl) {
        this.errors.push("Please enter the dimensions in both English and Dutch.");
      }

      if (this.errors.length === 0) {
        // Form is valid, submit data to the server or perform necessary actions
        // Reset form fields
        this.name.en = "";
        this.name.nl = "";
        this.description.en = "";
        this.description.nl = "";
        this.historicalSignificance.en = "";
        this.historicalSignificance.nl = "";
        this.type.en = "";
        this.type.nl = "";
        this.yearOfConstruction = 0;
        this.monumentDesigner.en = "";
        this.monumentDesigner.nl = "";
        this.accessibility.en = [];
        this.accessibility.nl = [];
        this.materialsUsed.en = "";
        this.materialsUsed.nl = "";
        this.location.en = "";
        this.location.nl = "";
        this.dimensions.en = "";
        this.dimensions.nl = "";
        this.images = [];
        this.audiovisualSources = "";
      }
    }
  }
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
}

.error {
  color: red;
  margin-bottom: 10px;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.form-field {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
textarea, 
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

fieldset{
  margin-bottom: 1.5rem;
}

textarea {
  height: 100px;
  resize: vertical;
}

.language-field {
  display: flex;
  align-items: center;
}

.language-label {
  font-weight: bold;
  margin-right: 10px;
  width: 80px;
}

.language-field input,
.language-field textarea {
  flex: 1;
  margin-right: 10px;
}

input[type="checkbox"] {
  margin-right: 3.5rem;
}
</style>