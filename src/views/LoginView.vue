<template>
    <main>
        <h2>{{ this.$store.state.currentLanguage === 'Dutch' ? 'Inloggen' : 'Login' }}</h2>
        <div class="error" v-show="errors.length > 0">
            <ul>
                <li v-for="error in errors" :key="error">
                    {{ error }}
                </li>
            </ul>
        </div>
        <form @submit.prevent="login">
            <label for="username">{{ this.$store.state.currentLanguage === 'Dutch' ? 'Gebruikersnaam:' : 'Username:' }}</label>
            <input type="text" id="username" name="username" v-model="username" required>

            <label for="password">{{ this.$store.state.currentLanguage === 'Dutch' ? 'Wachtwoord:' : 'Password:' }}</label>
            <input type="password" id="password" name="password" v-model="password" required>

            <input type="submit" :value="loginButtonText">
        </form>
    </main>
</template>

<script>
import MonumentService from '../services/MonumentService';

export default {    
    name: "LoginView",
    data() {
    return {
        username: "",
        password: "",
        errors: [],
        "service": new MonumentService(), 
        
    };
    },
    computed: {
    loginButtonText() {
      return this.$store.state.currentLanguage === 'Dutch' ? 'Inloggen' : 'Login';
    },
  },
    methods: {
    async login() {
        this.errors = [];

        const response = await this.service.login(this.username, this.password);
        if (response.ok) { 
            this.$store.commit('setLoggedIn', true);
            this.$router.push("/");
        } else {
            const data = await response.json();
            this.errors.push(data.error);
        }
        }
    }
};
</script>

<style>
</style>