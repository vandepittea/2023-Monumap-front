<template>
    <main>
        <h2>Register</h2>
        <div class="error" v-show="errors.length > 0">
            <ul>
                <li v-for="error in errors" :key="error">
                    {{ error }}
                </li>
            </ul>
        </div>
        <form @submit.prevent="register">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" v-model="username" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" v-model="password" required>

            <label for="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm_password" v-model="confirmPassword" required>

            <input type="submit" value="Register">
        </form>
    </main>
</template>

<script>
import MonumnetService from '../services/MonumentService';

export default {    
    name: "RegisterView",
    data() {
    return {
        username: "",
        password: "",
        confirmPassword: "",
        errors: [],
        "service": new MonumnetService(), 
    };
    },
    methods: {
    async register() {
        this.errors = [];

        if (this.password !== this.confirmPassword) {
        this.errors.push("Passwords do not match");
        }

        if (this.errors.length === 0) {
        try {
            const response = await this.service.register(this.username, this.password);

            if (response.ok) { //TODO: controleren of dit werkt
            this.$router.push("/login");
            } else {
            this.errors.push("Could not register");
            }
        } catch (error) {
            this.errors.push("An error occurred while registering");
        }
        }
    }
}
};  
</script>

<style>
h2 {
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 2rem;
}

form label,
form input,
form select,
form textarea,
fieldset {
   display: block;
   width: 100%;
   margin-bottom: 10px;
}

.errors {
 color: red;
}

.error{
    border: 1px solid red;
    background-color: rgb(255,182,182);
    width: 100%;
    margin-bottom: 2rem;
}

</style>