<script setup>
  import { useStore } from 'vuex';
  import { RouterLink, RouterView } from 'vue-router';

  const store = useStore();
  const loggedIn = store.state.loggedIn;
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li v-if="!loggedIn"><router-link to="/login">Login</router-link></li>
        <li v-if="!loggedIn"><router-link to="/register">Register</router-link></li>
        <li v-if="loggedIn"><router-link to="/add-monument">Add Monument</router-link></li>
        <li v-if="loggedIn"><router-link to="/logout">Logout</router-link></li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style>
</style>