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
     

//   formData: {
//   audiovisual_source: {
//     audiovisual_source_language: [
//       { language: "", title: "" },
//       { language: "", title: "" }
//     ],
//     type: "",
//     url: ""
//   },
//   cost_to_construct: 0,
//   dimensions: { height: 0, width: 0, depth: 0 },
//   images: {},
//   location: {
//     latitude: 0,
//     longitude: 0,
//     street: "",
//     number: 0,
//     city: ""
//   },
//   yearOfConstruction: 0,
//   monumentDesigner: { en: "", nl: "" },
//   weight: 0,
//   monument_language: [
//     {
//       language: "",
//       name: "",
//       description: "",
//       historical_significance: "",
//       type: "",
//       used_materials: [],
//       accessibility: []
//     },
//     {
//       language: "",
//       name: "",
//       description: "",
//       historical_significance: "",
//       type: "",
//       used_materials: [],
//       accessibility: []
//     }
//   ]
// },

formData : {
  year_of_construction: 0,
  monument_designer: "",
  audiovisual_source: {
    audiovisual_source_language: [
      { language: "", title: "" },
      { language: "", title: "" }
    ],
    url: "",
    type: "",
  },
  cost_to_construct: 0,
  dimensions: {
    height: 0,
    width: 0,
    depth: 0,
  },
  images: [
    { /* ... */ },
    { /* ... */ }
  ],
  location: {
    id: 0,
    latitude: 0,
    longitude: 0,
    street: "",
    number: 0,
    city: ""
  },
  monument_designer: "",
  monument_language: [
    {
      accessibility: [""],
      description: "",
      historical_significance: "",
      language: "Dutch",
      name: "",
      type: "",
      used_materials: [""]
    },
    {
      accessibility: [""],
      description: "",
      historical_significance: "",
      language: "English",
      name: "",
      type: "",
      used_materials: [""]
    }
  ],
  weight: 1000,
  year_of_construction: 2016
},

errors: [],
service: new MonumentService(),
token: document.cookie
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