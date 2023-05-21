// const url = "http://monuments.local/api/monuments";
// import { store } from '../store.js'; // Import the Vuex store instance
// const dsq = store.state.currentLanguage; // Access language from Vuex store
// console.log(dsq); // Log the language to the console

const url = "http://localhost:8000/api/";

const storedLanguage = localStorage.getItem('language');
console.log(storedLanguage);


export default class MonumentService{
    constructor(){
        this.page = 1;
        this.perPage = 4;
    }

    setPage(page){
        this.page = page;
        return this;
    }

    setPerPage(perPage){
        this.perPage = perPage;
        return this;
    }

    async getAllMonuments(name, type, yearOfConstruction, monumentDesigner, costToConstruct, language) {
        let queryParams = [];
      
        if (name) {
          queryParams.push(`name=${encodeURIComponent(name)}`); //TODO: werkt nog niet, moet nog gecontroleerd worden
        }
        if (type) {
          queryParams.push(`type=${encodeURIComponent(type)}`);
        }
        if (yearOfConstruction) {
          queryParams.push(`year=${encodeURIComponent(yearOfConstruction)}`);
        }
        if (monumentDesigner) {
          queryParams.push(`designer=${encodeURIComponent(monumentDesigner)}`);
        }
        if (costToConstruct) {
          queryParams.push(`costToConstruct=${encodeURIComponent(costToConstruct)}`); //todo: deze parameter is niet correct, moet nog gecontroleerd zijn
        }
      
        let fullUrl = url + 'monuments?';

        fullUrl += `page=${this.page}`;
        fullUrl += `&per_page=${this.perPage}`;
        fullUrl += `&Language=${storedLanguage}&`; //TODO: language hier uit store halen 
   
        console.log(fullUrl)
        if (queryParams.length > 0) {
            console.log(queryParams.length);
          fullUrl += `${queryParams.join('&')}`;
        }
        console.log(fullUrl);

        const response = await fetch(fullUrl);
        const json = await response.json();
        const data = json.data;
        return data;
    }
    
    async getMonumentById(id, language=""){
        let fullUrl = url + "monuments/" + id;
        if (!language == ""){
            fullUrl += `?language=${language}`;
        }
        const response = await fetch(fullUrl); 
        const json = await response.json();
        const data = json.data;

        return data; 
    }
   

    // async register(username, password){
    //     console.log(username);
    //     console.log(password);
    //     console.log(JSON.stringify({username, password}));
    //     console.log(url + "register");
    //     const response = await fetch(url + "register", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({username, password}) 
    //     });
    //     return response;
    // }

    async register(username, password){
      console.log(username);
      console.log(password);
      console.log(JSON.stringify({username, password}));
      console.log(url + "register");
      const response = await fetch(url + "register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({username, password}) 
      });
      return response;
  }


    async login(username, password){
        const response = await fetch(url + "login", {
            method: "POST",
           // credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password}),
            //TODO: hier ergens cookies opvangen?
        });
        return response;  
    }

    async addMonument(monumentData, token){
        const response = await fetch(url + "monuments", {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
               // Authorization: `Bearer ${token}`,
            }, 
            body: JSON.stringify(monumentData),
        });
        const data = await response.json();
        console.log(data)
        return data;
    }
 
    async updateMonument(id, monumentData, token) {
        const response = await fetch(url + "monuments/" + id, {
          method: 'PUT',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
           // Authorization: `Bearer ${token}`,
        }, 
          body: JSON.stringify(monumentData),
        });

        console.log(response)
        const data = await response.json();
        return data;
      }
      
      async deleteMonument(id, token) {
        const response = await fetch(url + "monuments/" + id, {
          method: 'DELETE',
          credentials: 'include',
        });
        const data = await response.json();
        return data;
      }
}