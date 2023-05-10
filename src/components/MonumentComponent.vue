<template>
    <div class="monumentCard">
        <img :src="monument.images" />
        <p class="green">{{ monument.name }}</p>
    </div>
</template>

<script>
    export default {
        name: "MonumentComponent",
        props: {
            monument: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style>
    .monumentCard{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--color-background);
        border-radius: 10px;
    }

    .monumentCard:hover{
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        transition: all 0.3s ease-in-out;
    }

    .monumentCard img{
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }

    .monumentCard p {
        font-size: large;
    }
</style>