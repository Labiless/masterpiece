<script setup>

//component
import PostButton from '../components/PostButton.vue';
import { RouterLink, RouterView } from 'vue-router'

const newGamePost={url : "http://localhost:5000/api/games/newgame"}
const params = ["gameId"]

</script>

<template>

    <div class="container">
        <PostButton link="JoinGame" :postData="newGamePost" :params="params" text="new game"/>
        <RouterLink class="router-link" to="/joingame">
            join game
        </RouterLink>
    </div>

</template>
    
<style>

</style>
