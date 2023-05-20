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
import MonumentService from "../services/MonumentService";

import { computed } from 'vue';

export default {
  name: "AddMonumentView",
  data() {
    return {
      formData: {
        name: { en: "", nl: "" },
        description: { en: "", nl: "" },
        historicalSignificance: { en: "", nl: "" },
        type: [ "", "" ],
        yearOfConstruction: 0,
        monumentDesigner: { en: "", nl: "" },
        accessibility:  { en: "", nl: "" },
        materialsUsed: { en: ["", ""], nl: ["", ""] },
        weight: 0,
        costOfConstruction: 0,
        location: {
          latitude: 0,
          longitude: 0,
          street: "",
          number: 0,
          city: ""
        },
        dimensions: { height: 0, width: 0, depth: 0 },
        images: { url: [ "", "" ], caption: [ "", "" ] },
        audiovisualSource: { title: "", url: "", type: "" }
      },
      errors: [],
      "service": new MonumentService(),
      "token": document.cookie// localStorage.getItem('token'), //TODO: uit cookies halen 
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
      /*if (!this.formData.type.en || !this.formData.type.nl) {  //TODO: terugzetten als beide talen er zijn
        this.errors.push("Please choose the type in both English and Dutch.");
      }*/
      if (!this.formData.yearOfConstruction) {
        this.errors.push("Please enter the year of construction.");
      }
      if (!this.formData.monumentDesigner.en || !this.formData.monumentDesigner.nl) {
        this.errors.push("Please enter the monument designer in both English and Dutch.");
      }
      /*if (!this.formData.accessibility.en || !this.formData.accessibility.nl) { //TODO: terugzetten als beide talen er zijn
        this.errors.push("Please select the accessibility in both English and Dutch.");
      }*/
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
        this.service.addMonument(this.formData, this.token).then(response => {
          if (response.ok) { //TODO: contrroleren of dit werkt
            this.$router.push("/"); 
          } else {
            this.errors.push("Could not update the monument");
          }
        });
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