const url = "http://monuments.local/api/monuments";

const storedLanguage = localStorage.getItem('language');
console.log(storedLanguage);
// import { useStore } from 'vuex';
// const store = useStore();
// const storedLanguage = store.state.currentLanguage;

export default class MonumnetService{
    constructor(){
        this.page = 1;
        this.perPage = 10;
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
      
        let fullUrl = url + '?';

        fullUrl += `page=${this.page}`;
        fullUrl += `&per_page=${this.perPage}`;
        fullUrl += `&Language=${storedLanguage}&`; //TODO: language hier uit store halen 


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
        let fullUrl = url + "/" + id;
        if (!language == ""){
            fullUrl += `?language=${language}`; //TODO: language hier uit store halen
        }
        const response = await fetch(fullUrl); 
        const json = await response.json();
        const data = json.data;
        console.log("-----------------------------")
        console.log(data);
        console.log("-----------------------------")

        return data; 
    }
   

    async register(username, password){
        console.log(username);
        console.log(password);
        console.log(JSON.stringify({username, password}));
        console.log(url + "/register");
        const response = await fetch(url + "/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password}) 
        });
        return response;
    }

    async login(username, password){
        const response = await fetch(url + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
            //TODO: hier ergens cookies opvangen?
        });

    
        // const setCookieHeader = response.headers.get("Set-Cookie");
        // console.log(setCookieHeader);

        return response;  
    }

    async addMonument(monumentData, token){
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }, 
            body: JSON.stringify(monumentData),
        });
        const data = await response.json();
        console.log(data)
        return data;
    }
 
    async updateMonument(id, monumentData, token) {
        const response = await fetch(url + "/" + id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(monumentData),
        });
        const data = await response.json();
        return data;
      }
      
      async deleteMonument(id, token) {
        const response = await fetch(url + "/" + id, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        return data;
      }
}