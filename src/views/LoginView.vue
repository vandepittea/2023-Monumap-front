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
export default {    
    name: "LoginView",
    data() {
    return {
        username: "",
        password: "",
        errors: []
    };
    },
    methods: {
    async login() {
        this.errors = [];

        if (this.errors.length === 0) {
        try {
            const response = await fetch("http://localhost:3000/login", { //TODO: veranderen naar jusite!
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.username,
                password: this.password
            })
            });

            if (response.ok) {
            this.$router.push("/");
            } else {
            this.errors.push("Invalid login");
            }
        } catch (error) {
            this.errors.push("Failed to login"); //TODO: is deze boodschap juist? 
        }
        }
    }
    }
};
</script>

<style>
</style>