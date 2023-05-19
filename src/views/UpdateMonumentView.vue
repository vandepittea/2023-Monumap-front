<template>
  <div class="container">
    <h2>Add your monument here</h2>
    <div class="error" v-if="hasErrors">
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <MonumentForm :formData="formData" @formSubmitted="formSubmitted" />
  </div>
</template>

<script lang="js">
import MonumentForm from "@/components/MonumentForm.vue";

export default {
  name: "UpdateMonumentView",
  data() {
    return {
      formData: {
        name: { en: "test", nl: "test" },
        description: { en: "test", nl: "test" },
        historicalSignificance: { en: "test", nl: "test" },
        type: [ "option1", "option2" ],
        yearOfConstruction: 2012,
        monumentDesigner: { en: "test", nl: "test" },
        accessibility: ["none", "partial"],
        materialsUsed: { en: ["test", "test2"], nl: ["test", "test2"] },
        weight: 112,
        costOfConstruction: 34567,
        location: {
          latitude: 90,
          longitude: -90,
          street: "test",
          number: 3,
          city: "test"
        },
        dimensions: { height: 1, width: 2, depth: 3 },
        images: { url: [ "test.com", "test2.com" ], caption: [ "test", "test2" ] },
        audiovisualSource: { title: "test", url: "test.com", type: "audio" }
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
    formSubmitted() {
      this.errors = [];

      // Validate form fields
      if (!this.formData.name.en || !this.formData.name.nl) {
        this.errors.push("Please enter the name in both English and Dutch.");
      }
      if (!this.formData.description.en || !this.formData.description.nl) {
        this.errors.push("Please enter the description in both English and Dutch.");
      }
      if (!this.formData.type.en || !this.formData.type.nl) {
        this.errors.push("Please choose the type in both English and Dutch.");
      }
      if (!this.formData.yearOfConstruction) {
        this.errors.push("Please enter the year of construction.");
      }
      if (!this.formData.monumentDesigner.en || !this.formData.monumentDesigner.nl) {
        this.errors.push("Please enter the monument designer in both English and Dutch.");
      }
      if (this.formData.accessibility.en.length === 0 || this.formData.accessibility.nl.length === 0) {
        this.errors.push("Please select the accessibility in both English and Dutch.");
      }
      if (!this.formData.materialsUsed.en || !this.formData.materialsUsed.nl) {
        this.errors.push("Please enter the materials used in both English and Dutch.");
      }
      if (!this.formData.location.street || !this.formData.location.city) {
        this.errors.push("Please enter the location in both English and Dutch.");
      }
      if (!this.formData.dimensions.height || !this.formData.dimensions.width || !this.formData.dimensions.depth) {
        this.errors.push("Please enter the dimensions in both English and Dutch.");
      }

      if (this.errors.length === 0) {
        // Form is valid, submit data to the server or perform necessary actions
        console.log("Form submitted:", this.formData);
      }
    }
  },
  components: {
    MonumentForm
  }
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.error {
  margin-bottom: 20px;
  color: red;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}
</style>