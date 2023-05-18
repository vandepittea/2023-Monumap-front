<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> 
        <RouterLink to="/newMonument">Add Monument</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1; 
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  text-align: center;
  background-color: var(--color-background);
  height: 3rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  width: 100%;
}

/* //TODO: hier aanpassen! */
@media (min-width: 1024px) { 
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    font-size: 1rem;
    padding: 1rem 0;
    width: 100%;
  } 
}
</style>
