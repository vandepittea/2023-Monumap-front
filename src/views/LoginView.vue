<template>
    <main>
        <h2>Login</h2>
        <div class="error" v-show="errors.length > 0">
            <ul>
                <li v-for="error in errors" :key="error">
                    {{ error }}
                </li>
            </ul>
        </div>
        <form @submit.prevent="login">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" v-model="username" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" v-model="password" required>

            <input type="submit" value="Login">
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
    methods: {
    async login() {
        this.errors = [];

        if (this.errors.length === 0) {
        try {
            const response = await this.service.login(this.username, this.password);
            if (response.ok) { 
                this.$store.commit('setLoggedIn', true);
            this.$router.push("/");
            } else {
            this.errors.push("Invalid login");
            }
        } catch (error) {
            console.log(error);
            this.errors.push("Failed to login"); 
        }
        }
    }
    }
};
</script>

<style>
</style>