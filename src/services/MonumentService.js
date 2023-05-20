const url = "http://monuments.local/api/monuments";

const storedLanguage = localStorage.getItem('language');

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
          queryParams.push(`name=${encodeURIComponent(name)}`);
        }
        if (type) {
          queryParams.push(`type=${encodeURIComponent(type)}`);
        }
        if (yearOfConstruction) {
          queryParams.push(`yearOfConstruction=${encodeURIComponent(yearOfConstruction)}`);
        }
        if (monumentDesigner) {
          queryParams.push(`monumentDesigner=${encodeURIComponent(monumentDesigner)}`);
        }
        if (costToConstruct) {
          queryParams.push(`costToConstruct=${encodeURIComponent(costToConstruct)}`);
        }

        if (language){
            queryParams.push(`language=${encodeURIComponent(language)}`);
        }
      
        let fullUrl = url;
        if (queryParams.length > 0) {
          fullUrl += `?${queryParams.join('&')}`;
        }
        fullUrl += `&page=${this.page}`;
        fullUrl += `&per_page=${this.perPage}`;
        fullUrl += `&language=${storedLanguage}`;
      
        const response = await fetch(fullUrl);
        const data = await response.json();
        return data;
      }
      
    async getMonumentById(id){
        const response = await fetch(url + "/" + id); //TODO: hier ook lanugage meegeven??
        const data = await response.json();
        return data; //TODO: hier controleren of data corect wordt weergegeven
    }

    async register(username, password){
        const response = await fetch(url + "/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password}) //TODO: zal dit werken? 
        });
        const data = await response.json();
        return data; //TODO: er is geen response, enkel als er een error is, dus dit opvangen of in server veranderen, status meegeven
    }

    async login(username, password){
        const response = await fetch(url + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password}) //TODO: zal dit werken? 
        });
        const data = await response.json();
        return data; //TODO: er is geen response, enkel als er een error is, dus dit opvangen of in server veranderen, status meegeven
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