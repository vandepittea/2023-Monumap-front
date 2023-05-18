<template>
  <div class="monument-detail">
    <h1>{{ monument.name }}</h1>
    <slideshow :images="monument.images" />
    <div class="details-container">
      <div class="detail-row">
        <div class="label">Name</div>
        <div>{{ monument.name }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Description</div>
        <div>{{ monument.description }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Historical Significance</div>
        <div>{{ monument.historicalSignificance }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Type</div>
        <div>{{ monument.type.join(", ") }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Year of Construction</div>
        <div>{{ monument.yearOfConstruction }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Monument Designer</div>
        <div>{{ monument.designer }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Accessibility</div>
        <div>{{ monument.accessibility.join(", ") }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Used Materials</div>
        <div>{{ monument.usedMaterials.join(", ") }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Weight</div>
        <div>{{ monument.weight }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Cost to Construct</div>
        <div>{{ monument.costToConstruct }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Language</div>
        <div>{{ monument.language }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Location</div>
        <div>{{ getLocationString(monument.location) }}</div>
      </div>
      <div class="detail-row">
        <div class="label">Dimensions</div>
        <div>{{ getDimensionsString(monument.dimensions) }}</div>
      </div>
      <div class="audiovisual-row">
        <div class="audiovisual-container">
          <div v-for="audiovisual in monument.audioVisual" :key="audiovisual.caption">
            <div v-if="audiovisual.type === 'audio'">
              <audio :src="audiovisual.url" controls></audio>
            </div>
            <div v-else>
              <video :src="audiovisual.url" controls></video>
            </div>
            <p class="audiovisual-caption">{{ audiovisual.caption }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slideshow from "./Slideshow.vue";

export default {
  name: "MonumentDetail",
  components: {
    Slideshow,
  },
  props: {
    monument: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getLocationString(location) {
      const { latitude, longitude, street, number, city } = location;
      return `${latitude}, ${longitude}, ${street} ${number}, ${city}`;
    },
    getDimensionsString(dimensions) {
      const { height, width, depth } = dimensions;
      return `${height} x ${width} x ${depth}`;
    },
  },
};
</script>

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
</style>