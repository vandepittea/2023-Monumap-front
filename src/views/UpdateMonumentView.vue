<template>
  <div class="container">
    <h2>Update your monument here</h2>
    <div class="error" v-if="hasErrors">
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <MonumentForm :formData="this.monument" @formSubmitted="this.formSubmitted" />
  </div>
</template>

<script>
import MonumentForm from "@/components/MonumentForm.vue";
import MonumentService from "../services/MonumentService";

export default {
  name: "UpdateMonumentView",
  props: {
      // formData: {
      //   type: Object,
      //   required: true
      // },
      monumentId: {
      type: String,
      required: true,
    },
    },
  data() {
    return {
      monument : {},
      errors: [],
      service: new MonumentService(),
    };
  },
  created() {
    this.monument = this.fetchMonument()
},
  computed: {
    hasErrors() {
      return this.errors.length > 0;
    }
  },
  methods: {
    async fetchMonument() {
    try {
      this.monument = await this.service.getMonumentById(this.monumentId);
    } catch (error) {
      console.error('Error fetching monument:', error);
    }
  },
    formSubmitted(formData) { 
      this.errors = [];

      console.log("in formSubmitted update !!!!")

      console.log("formdata in updateMonumentView")
      console.log(formData)
      console.log(formData)
      console.log("formdata in updateMonumentView")

      // Validate form fields
      if (!formData.monument_language[1].name|| !formData.monument_language[0].name) { //TODO: this hier terugzetten
        this.errors.push("Please enter the name in both English and Dutch.");
      }
      if (!formData.monument_language[1].description || !formData.monument_language[0].description) {
        this.errors.push("Please enter the description in both English and Dutch.");
      }
      // if (!formData.type.en || !formData.type.nl) { //TODO: nog implementeren
      //   this.errors.push("Please choose the type in both English and Dutch.");
      // }
      if (!formData.year_of_construction) {
        this.errors.push("Please enter the year of construction.");
      }
      if (!formData.monument_designer) {
        this.errors.push("Please enter the monument designer.");
      }
      /*if (formData.accessibility.en.length === 0 || formData.accessibility.nl.length === 0) { //TODO: terugzetten als beide talen er zijn
        this.errors.push("Please select the accessibility in both English and Dutch.");
      }*/
      if (!formData.monument_language[1].used_materials || !formData.monument_language[0].used_materials) {
        this.errors.push("Please enter the materials used in both English and Dutch.");
      }

      if (this.errors.length === 0) {
        //TODO: hier logica van api 
        console.log(formData)
        this.service.updateMonument(formData).then(response => {
          if (response.ok) {
            this.$router.push("/"); //TODO: moet dit hier / of Home zijn
          } else {
            this.errors.push("Could not update the monument");
          }
       }
        );
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