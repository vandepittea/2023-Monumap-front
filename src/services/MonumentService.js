const url = "http://monuments.local/api/monuments/";

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

    async getAllMonuments(){
        let fullUrl = url;
        fullUrl += "?page=" + this.page;
        fullUrl += "&per_page=" + this.perPage;

        const response = await fetch(fullUrl);
        const data = await response.json();
        return data //TODO: hier controleren of data corect wordt weergegeven, daaarna nog        
    }

    async getMonumentById(id){
        const response = await fetch(url + id);
        const data = await response.json();
        return data; //TODO: hier controleren of data corect wordt weergegeven
    }

    async register(username, password){
        const response = await fetch(url + "register", {
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
        const response = await fetch(url + "login", {
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
        const response = await fetch(url + id, {
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
        const response = await fetch(url + id, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        return data;
      }
}