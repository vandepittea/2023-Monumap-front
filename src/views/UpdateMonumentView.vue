<template>
  <div class="container">
    <h2>{{ this.$store.state.currentLanguage === 'Dutch' ? 'Update je monument hier' : 'Update your monument here' }}</h2>
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
      urlInput: "",
      captionEnInput: "",
      captionNlInput: "",
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
      this.monument = await this.service.getMonumentById(this.monumentId);
  },
  formSubmitted(monument) {
      this.errors = [];

      this.service.updateMonument(this.monumentId, monument, this.$router)
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

.error {
  margin-bottom: 20px;
  color: red;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}
</style>