const url = "http://localhost:8000/api/";

const storedLanguage = localStorage.getItem('language');

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

    async getAllMonuments(language, name, type, yearOfConstruction, monumentDesigner, costToConstruct) {
        let queryParams = [];
      
        if (name) {
          queryParams.push(`name=${encodeURIComponent(name)}`);
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
          queryParams.push(`cost=${encodeURIComponent(costToConstruct)}`); 
        }
      
        let fullUrl = url + 'monuments?';

        fullUrl += `page=${this.page}`;
        fullUrl += `&per_page=${this.perPage}`;
        fullUrl += `&language=${language}&`; 
   
        if (queryParams.length > 0) {
          fullUrl += `${queryParams.join('&')}`;
        }

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

    async register(username, password){
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
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password}),
        });
        return response;  
    }

    async addMonument(monumentData, router){
        const response = await fetch(url + "monuments", {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(monumentData),
        });

        if(response.status === 409){
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        if (response.status === 500) {
          router.push({ name: 'Login' });
        }
    
        const data = await response.json();
        return data;
      }
 
    async updateMonument(id, monumentData, router) {
        const response = await fetch(url + "monuments/" + id, {
          method: 'PUT',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
        }, 
          body: JSON.stringify(monumentData),
        });

        if(response.status === 404){
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        if (response.status === 500) {
          router.push({ name: 'Login' });
        }

        const data = await response.json();
        return data;
      }
      
      async deleteMonument(id, router) {
        const response = await fetch(url + "monuments/" + id, {
          method: 'DELETE',
          credentials: 'include',
        });

        if (response.status === 500) {
          router.push({ name: 'Login' });
        }

        const data = await response.json();
        return data;
      }
}