<template>
  <div class="container">
    <h2>Add your monument here</h2>
    <div class="error" v-if="hasErrors">
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <MonumentForm :formData="formData" :urlInput="urlInput" :captionEnInput="captionEnInput" :captionNlInput="captionNlInput" @formError="handleFormError" @formSubmitted="formSubmitted" />
  </div>
</template>

<script lang="js">
import MonumentForm from "@/components/MonumentForm.vue";
import MonumentService from "../services/MonumentService";

export default {
  name: "AddMonumentView",
  data() {
    return {
  formData: {
          year_of_construction: null,
          monument_designer: '',
          weight: null,
          cost_to_construct: null,
          location: {
            latitude: null,
            longitude: null,
            street: '',
            number: null,
            city: '',
          },
          dimensions: {
            height: null,
            width: null,
            depth: null,
          },
          images: [],
          audiovisual_source: {
            url: '',
            type: '',
            audiovisual_source_language: [
              {
                title: '',
                language: 'English',
              },
              {
                title: '',
                language: 'Dutch',
              },
            ],
          },
          monument_language: [
            {
              language: 'English',
              name: '',
              description: '',
              historical_significance: '',
              type: '',
              accessibility: [],
              used_materials: [],
            },
            {
              language: 'Dutch',
              name: '',
              description: '',
              historical_significance: '',
              type: '',
              accessibility: [],
              used_materials: [],
            },
          ],
        
      },
      errors: [],
      service: new MonumentService(),
      token: document.cookie,
      urlInput: "",
      captionEnInput: "",
      captionNlInput: "",
    };
  },
  computed: {
    hasErrors() {
      return this.errors.length > 0;
    }
  },
  methods: {
    formSubmitted(formData) {
      this.errors = [];

      this.service.addMonument(formData, this.$router, this.token)
      .then(response => {
        if (response.errors) {
          Object.keys(response.errors).forEach(field => {
            this.errors.push(...response.errors[field]);
          });
        } else {
          this.$router.push("/");
        }
      })
      .catch (error => {
        this.errors.push(error.message);
      });
    },
    handleFormError(error) {
      this.errors.push(error);
    },
  },
  components: {
    MonumentForm
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}
</style>