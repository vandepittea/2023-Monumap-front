<template>
    <div class="monumentCard">
      <img :src="monument.images" />
      <p class="monumentCard-name">{{ monument.name }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "MonumentComponent",
    props: {
      monument: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  img{
    margin-bottom: 1rem;
  }

  .monumentCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-background);
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
  }
  
  .monumentCard:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .monumentCard img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  
  .monumentCard-name {
    font-size: 1.2rem;
    font-weight: bold;
  }
  </style>  