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

<style>
</style>