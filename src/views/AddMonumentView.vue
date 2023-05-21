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
  
// formData: {
//           year_of_construction: 1975,
//           monument_designer: 'John Smith',
//           weight: 5000,
//           cost_to_construct: '100000.00',
//           location: {
//             latitude: 51.123456,
//             longitude: -0.987654,
//             street: 'null',
//             number: 0,
//             city: 'null',
//           },
//           dimensions: {
//             height: 10,
//             width: 10,
//             depth: 10,
//           },
//           images: [
//             {
//               url: 'https://www.eiffeltoren.info/wp-content/uploads/sites/12/2022/12/eiffel-tower.jpg',
//               image_language: [
//                 {
//                   caption: 'Caption of image 1',
//                   language: 'English',
//                 },
//                 {
//                   caption: 'Beschrijving van afbeelding 1',
//                   language: 'Dutch',
//                 },
//               ],
//             },
//             {
//               url: 'https://static.dw.com/image/15861462_605.jpg',
//               image_language: [
//                 {
//                   caption: 'Caption of image 2',
//                   language: 'English',
//                 },
//                 {
//                   caption: 'Beschrijving van afbeelding 2',
//                   language: 'Dutch',
//                 },
//               ],
//             },
//           ],
//           audiovisual_source: {
//             url: 'http://example.com/audiovisual_source.mp4',
//             type: 'video',
//             audiovisual_source_language: [
//               {
//                 title: 'English audiovisual source',
//                 language: 'English',
//               },
//               {
//                 title: 'Nederlandse audiovisuele bron',
//                 language: 'Dutch',
//               },
//             ],
//           },
//           monument_language: [
//             {
//               language: 'Dutch',
//               name: 'Voorbeeldmonument',
//               description: 'Beschrijving van het voorbeeldmonument',
//               historical_significance: 'Historische betekenis van het voorbeeldmonument',
//               type: 'Oorlogsmonumenten',
//               accessibility: ['rolstoelvriendelijk', 'in de buurt van parkeerterreinen'],
//               used_materials: ['Steen', ' Metaal'],
//             },
//             {
//               language: 'English',
//               name: 'Example Monument 1',
//               description: 'Description of the example monument 1',
//               historical_significance: 'Historical significance of the example monument 1',
//               type: 'War Memorials',
//               accessibility: ['wheelchair-friendly', 'near parking areas'],
//               used_materials: ['Stone', ' Metal'],
//             },
//           ],
        
//       },
formData: {
          year_of_construction: 0,
          monument_designer: '',
          weight: 0,
          cost_to_construct: '0',
          location: {
            latitude: 0,
            longitude: 0,
            street: '',
            number: 0,
            city: '',
          },
          dimensions: {
            height: 0,
            width: 0,
            depth: 0,
          },
          images: [
            {
              url: 'https://www.eiffeltoren.info/wp-content/uploads/sites/12/2022/12/eiffel-tower.jpg',
              image_language: [
                {
                  caption: 'Caption of image 1',
                  language: 'English',
                },
                {
                  caption: 'Beschrijving van afbeelding 1',
                  language: 'Dutch',
                },
              ],
            },
            {
              url: 'https://static.dw.com/image/15861462_605.jpg',
              image_language: [
                {
                  caption: 'Caption of image 2',
                  language: 'English',
                },
                {
                  caption: 'Beschrijving van afbeelding 2',
                  language: 'Dutch',
                },
              ],
            },
          ],
          audiovisual_source: {
            url: 'http://example.com/audiovisual_source.mp4',
            type: 'video',
            audiovisual_source_language: [
              {
                title: 'English audiovisual source',
                language: 'English',
              },
              {
                title: 'Nederlandse audiovisuele bron',
                language: 'Dutch',
              },
            ],
          },
          monument_language: [
            {
              language: 'Dutch',
              name: 'Voorbeeldmonument',
              description: 'Beschrijving van het voorbeeldmonument',
              historical_significance: 'Historische betekenis van het voorbeeldmonument',
              type: 'Oorlogsmonumenten',
              accessibility: ['rolstoelvriendelijk', 'in de buurt van parkeerterreinen'],
              used_materials: ['Steen', ' Metaal'],
            },
            {
              language: 'English',
              name: 'Example Monument 1',
              description: 'Description of the example monument 1',
              historical_significance: 'Historical significance of the example monument 1',
              type: 'War Memorials',
              accessibility: ['wheelchair-friendly', 'near parking areas'],
              used_materials: ['Stone', ' Metal'],
            },
          ],
        
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
    formSubmitted(formData) {
      this.errors = [];

      // Validate form fields
      if (!formData.monument_language[1].name|| !formData.monument_language[0].name) { 
        this.errors.push("Please enter the name in both English and Dutch.");
      }
      if (!formData.monument_language[1].description || !formData.monument_language[0].description) {
        this.errors.push("Please enter the description in both English and Dutch.");
      }

      if (!formData.year_of_construction) {
        this.errors.push("Please enter the year of construction.");
      }
      if (!formData.monument_designer) {
        this.errors.push("Please enter the monument designer.");
      }

      if (!formData.monument_language[1].used_materials || !formData.monument_language[0].used_materials) {
        this.errors.push("Please enter the materials used in both English and Dutch.");
      }

    if (this.errors.length === 0) {
        this.service.addMonument(formData, this.token).then(response => {
          if (response.message === "Monument already exists") {
            this.errors.push("Could not add the monument");

          } else if (!response.message) { 
            this.$router.push("/"); 
          } else {
            this.errors.push("Could not add the monument");
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