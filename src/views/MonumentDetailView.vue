<script>
import Slideshow from "../components/Slideshow.vue";
import MonumentService from "../services/MonumentService";

export default {
  name: "MonumentDetail",
  components: {
    Slideshow,
  },
  props: {
  monumentId: {
    type: String,
    required: true,
  },
},
  data() {
    return {
      monument: {},
      service: new MonumentService(), 
    };
  },
  created() {
    this.monument = this.fetchMonument()
},
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    currentLanguage() {
      return this.$store.state.currentLanguage; 
    },
  },
  watch: {
    '$store.state.currentLanguage': 'fetchMonument',
  },
  methods: {
    async fetchMonument() {
    try {
      this.monument = await this.service.getMonumentById(this.monumentId, this.$store.state.currentLanguage);
    } catch (error) {
      console.error('Error fetching monument:', error);
    }
  },
    getLanguageValue(key) {
      return this.languageValue?.[key] || '';
    },

    getSourceLanguageValue(key) {
      return this.languageSourceValue?.[key] || '';
    },
    getLocationString(location) {
      const { latitude, longitude, street, number, city } = location;
      const addressParts = [street, number, city].filter((part) => part !== null && part !== 0 && part !== 'null');
      const address = addressParts.filter(Boolean).join(" ");
      return `${latitude}, ${longitude}${address ? ", " + address : ""}`;
    },
    getDimensionsString(dimensions) {
      if (!dimensions) {
        return '';
      }
      const { height, width, depth } = dimensions;
      return `${height} x ${width} x ${depth}`;
    },

    deleteMonument() {
      this.service.deleteMonument(this.monument.id) 
        .then(() => {
        this.$router.push({ name: 'Home' }); 
      })
      .catch(error => {
        console.error('Error deleting monument:', error);
      });
        
    },
    updateMonument() {
      this.$router.push({ name: 'UpdateMonument', params: { id: this.monument.id } });
    },

  getSlideshowImages() {
    const images = this.monument.images;
    return images.map((image) => {
      const captions = image.image_language.reduce((acc, lang) => {
        acc[lang.language.toLowerCase()] = lang.caption;
        return acc;
      }, {});
      return {
        url: image.url,
        captions: captions,
      };
    });
  },
},
};
</script>

<template>
  <div class="monument-detail">
    <h1>{{ monument.monument_language[0].name }}</h1>
    <slideshow :images="getSlideshowImages()" />
    <div class="details-container">
      <div class="detail-row">
        <div class="label">Name</div>
        <div>{{ monument.monument_language[0].name }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Description</div>
        <div>{{ monument.monument_language[0].description }}</div>
      </div>
      <div class="detail-row" v-if="monument.monument_language[0].historical_significance">
        <div class="label">Historical Significance</div>
        <div>{{ monument.monument_language[0].historical_significance }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Type</div>
        <div>{{ monument.monument_language[0].type }}</div>
      </div>
      <div class="detail-row" v-if="monument.year_of_construction">
        <div class="label">Year of Construction</div>
        <div>{{ monument.year_of_construction }}</div>
      </div>
      <div class="detail-row" v-if="monument.monument_designer">
        <div class="label">Monument Designer</div>
        <div>{{ monument.monument_designer }}</div>
      </div>
      <div class="detail-row" v-if="monument.monument_language[0].accessibility.length > 0">
        <div class="label">Accessibility</div>
        <div>{{ monument.monument_language[0].accessibility.join(", ") }}</div>
      </div>
      <div class="detail-row" v-if="monument.monument_language[0].used_materials.length > 0">
        <div class="label">Used Materials</div>
        <div>{{ monument.monument_language[0].used_materials.join(", ") }}</div>
      </div>
      <div class="detail-row" v-if="monument.weight">
        <div class="label">Weight</div>
        <div>{{ monument.weight }} kg</div>
      </div>
      <div class="detail-row" v-if="monument.cost_to_construct">
        <div class="label">Cost to Construct</div>
        <div>€ {{ monument.cost_to_construct }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Location</div>
        <div>{{ getLocationString(monument.location) }}</div>
      </div>
      <div class="detail-row" v-if="monument.dimensions">
        <div class="label">Dimensions</div>
        <div>{{ getDimensionsString(monument.dimensions) }}</div>
      </div>
      <div class="audiovisual-row" v-if="monument.audiovisual_source">
        <div class="audiovisual-container">
          <div v-if="monument.audiovisual_source.type === 'audio'">
            <audio :src="monument.audiovisual_source.url" controls></audio>
            <div class="audiovisual" v-if="monument.audiovisual_source.audiovisual_source_language[0].title">
              {{ monument.audiovisual_source.audiovisual_source_language[0].title }}
            </div>
          </div>
          <div v-else-if="monument.audiovisual_source.type === 'video'">
            <video :src="monument.audiovisual_source.url" controls></video>
            <div class="audiovisual" v-if="monument.audiovisual_source.audiovisual_source_language[0].title">
              {{ monument.audiovisual_source.audiovisual_source_language[0].title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="button-container" v-if="loggedIn">
    <input type="submit" @click="deleteMonument" value="Delete">
    <input type="submit" @click="updateMonument" value="Update">
  </div>
</template>

<style>
.monument-detail {
  text-align: center;
  padding: 2rem;
}

.slideshow {
  margin-bottom: 2rem;
}

.details-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.detail-row {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.label {
  flex: 0 0 200px;
  font-weight: bold;
  color: #555;
}

.value {
  flex: 1;
}

.audiovisual-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.audiovisual-container {
  text-align: left;
}

.audiovisual-item {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.audiovisual-caption {
  margin-top: 0.5rem;
  text-align: center;
}

video,
audio {
  width: 600px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.button {
  margin: 0 0.5rem;
}

.audiovisual {
  text-align: center;
}
</style>