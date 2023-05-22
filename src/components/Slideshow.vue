  <template>
    <div class="slideshow">
      <div v-for="(image, index) in images" :key="index" :class="['slide', { 'active-slide': index === currentSlide }]">
        <img :src="image.url" />
        <div class="caption">   {{ image.captions.english || image.captions.dutch }} </div>
      </div>
      <div class="slideshow-navigation">
        <button @click="prevSlide" :disabled="currentSlide === 0">
          &lt;
        </button>
        <button @click="nextSlide" :disabled="currentSlide === images.length - 1">
          &gt;
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Slideshow",
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        currentSlide: 0,
      };
    },
    mounted() {
    setInterval(this.nextSlide, 3000);
    },
    methods: {
      prevSlide() {
        if (this.currentSlide > 0) {
          this.currentSlide--;
        }
      },
      nextSlide() {
        if (this.currentSlide < this.images.length - 1) {
          this.currentSlide++;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .slideshow {
    position: relative;
    height: 25rem;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  
  .active-slide {
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 1.2rem;
  }
  
  .slideshow-navigation {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  
  button {
    margin: 0 0.5rem;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  button:hover {
    transform: scale(1.2);
  }
  </style>   
  