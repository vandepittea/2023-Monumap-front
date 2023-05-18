<template>
  <main class="home-view">
    <h1>Welcome to MonuMap</h1>
    <h3>Find your favorite Monuments</h3>

    <form class="filter-form" @submit.prevent="filterMonuments">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="filter.name">
      </div>

      <div class="form-group">
        <label for="type">Select the type:</label>
        <select id="type" name="type" v-model="filter.type">
          <option value="">Please choose an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div class="form-group">
        <label for="yearOfConstruction">Year of construction:</label>
        <input type="number" id="yearOfConstruction" name="yearOfConstruction" v-model="filter.yearOfConstruction">
      </div>

      <div class="form-group">
        <label for="monumentDesigner">Monument designer:</label>
        <input type="text" id="monumentDesigner" name="monumentDesigner" v-model="filter.monumentDesigner">
      </div>

      <div class="form-group">
        <label for="costToConstruct">Cost to construct:</label>
        <input type="number" id="costToConstruct" name="costToConstruct" v-model="filter.costToConstruct">
      </div>

      <button type="submit" class="filter-button">Filter</button>
    </form>

    <MonumentList :monuments="monuments" @viewMonumentDetail="viewMonumentDetail" />

    <img :src="languageImage" @click="toggleLanguage" id="languageImage" alt="Language switcher" />
  </main>
</template>

<script>
import MonumentDetailComponent from '../components/MonumentDetailComponent.vue';
import MonumentList from '../components/MonumentList.vue';
import EnglishFlag from '../assets/images/EnglishFlag.png';
import DutchFlag from '../assets/images/DutchFlag.png';

export default {
  name: 'HomeView',
  components: {
    MonumentDetailComponent,
    MonumentList,
  },
  data() {
    return {
      monuments: [
        {
          id: 1,
          name: 'Eiffel Tower',
          images: 'https://www.eiffeltoren.info/wp-content/uploads/sites/12/2022/12/eiffel-tower.jpg',
        },
        {
          id: 2,
          name: 'Statue of Liberty',
          images: 'https://static.dw.com/image/15861462_605.jpg',
        },
        {
          id: 3,
          name: 'Taj Mahal',
          images: 'https://www.reisroutes.be/userfiles/fotos/taj-mahal_8991_xl.jpg',
        },
        {
          id: 4,
          name: 'Great Wall of China',
          images: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/01/31124623/Great-Wall-Of-China.jpg?tr=w-1200,h-900',
        },
      ],
      currentLanguage: 'en',
      languageImages: {
        en: EnglishFlag,
        nl: DutchFlag,
      },
      languageImage: EnglishFlag,
      filter: {
        name: '',
        type: '',
        yearOfConstruction: '',
        monumentDesigner: '',
        costToConstruct: '',
      },
    };
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'nl' : 'en';
      this.languageImage = this.languageImages[this.currentLanguage];
    },
    viewMonumentDetail(monument) {
      this.$router.push({ name: 'MonumentDetail', params: { id: monument.id, monument: monument } });
    },
    filterMonuments() {
      // TODO: Replace with the actual API endpoint URL
      let url = '/api/monuments?';

      if (this.filter.name) {
        url += `name=${this.filter.name}&`;
      }
      if (this.filter.type) {
        url += `type=${this.filter.type}&`;
      }
      if (this.filter.yearOfConstruction) {
        url += `yearOfConstruction=${this.filter.yearOfConstruction}&`;
      }
      if (this.filter.monumentDesigner) {
        url += `monumentDesigner=${this.filter.monumentDesigner}&`;
      }
      if (this.filter.costToConstruct) {
        url += `costToConstruct=${this.filter.costToConstruct}&`;
      }

      // Remove the trailing '&' character
      url = url.slice(0, -1);

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.monuments = data;
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    // Fetch the list of monuments from the server and assign it to the `monuments` data property.
    // TODO: Replace with the actual API endpoint URL
    // fetch('/api/monuments')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.monuments = data;
    //   })
    //   .catch(error => console.error(error));
  },
};
</script>

<style scoped>
.home-view {
  background-color: #f3f8ff;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  color: #555;
}

.filter-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

input[type='text'],
input[type='number'],
select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.filter-button {
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.filter-button:hover {
  background-color: #555;
}

#languageImage {
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
  cursor: pointer;
}

.flexcontainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.flexcontainer > * {
  width: 30%;
}

.home-view {
  background-image: linear-gradient(to bottom, #f3f8ff, #c5d9f4);
}

.filter-form {
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

input[type='text'],
input[type='number'],
select {
  width: 100%;
}

.filter-button {
  width: 100%;
}

.monument-list-item {
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.monument-list-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.flexcontainer {
  margin-top: 2rem;
}
</style>