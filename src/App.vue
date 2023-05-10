<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> //TODO: hier aanpassen!
        <RouterLink to="/newMonument">Add Monument</RouterLink>
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
  height: 4rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* //TODO: hier aanpassen! */
@media (min-width: 1024px) { 
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
  } 
}
</style>
