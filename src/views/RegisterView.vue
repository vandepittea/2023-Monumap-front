<template>
    <main>
        <h2>{{ this.$store.state.currentLanguage === 'Dutch' ? 'Registreren' : 'Register' }}</h2>
        <div class="error" v-show="errors.length > 0">
            <ul>
                <li v-for="error in errors" :key="error">
                    {{ error }}
                </li>
            </ul>
        </div>
        <form @submit.prevent="register">
            <label for="username">{{ this.$store.state.currentLanguage === 'Dutch' ? 'Gebruikersnaam:' : 'Username:' }}</label>
            <input type="text" id="username" name="username" v-model="username" required>

            <label for="password">{{ this.$store.state.currentLanguage === 'Dutch' ? 'Wachtwoord:' : 'Password:' }}</label>
            <input type="password" id="password" name="password" v-model="password" required>

            <label for="confirm-password">{{ this.$store.state.currentLanguage === 'Dutch' ? 'Bevestig wachtwoord:' : 'Confirm password:' }}</label>
            <input type="password" id="confirm-password" name="confirm_password" v-model="confirmPassword" required>

            <input type="submit" :value="registerButtonText">
        </form>
    </main>
</template>

<script>
import MonumentService from '../services/MonumentService';

export default {    
    name: "RegisterView",
    data() {
    return {
        username: "",
        password: "",
        confirmPassword: "",
        errors: [],
        "service": new MonumentService(), 
    };
    },
    computed: {
    registerButtonText() {
      return this.$store.state.currentLanguage === 'Dutch' ? 'Registreren' : 'Register';
    },
  },
    methods: {
    async register() {
        this.errors = [];

        const response = await this.service.register(this.username, this.password);

        if (response.ok || response.status === 204) {
          this.$router.push("/login");
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