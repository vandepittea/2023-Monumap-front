<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  background-color: #333;
  padding: 10px;
}

nav {
  display: flex;
  justify-content: center;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}
</style>