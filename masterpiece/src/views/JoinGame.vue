<script setup>
import { ref } from 'vue'
import { useRoute } from "vue-router";
import PostButton from '../components/PostButton.vue';



const route = useRoute();

const gameId = ref(route.params.gameId);

const username = ref("");
const postUrl = "http://localhost:5000/api/games/";

const postData = () => ({
    url : `${postUrl}${gameId.value}/newplayer`,
    body : {username : username.value}
});
/* const params = () => ([
    {gameId}
])
 */
</script>

<template>
    <div class="container">
        <label for="game-id">game id</label>
        <input type="text" v-model="gameId" name="game-id" id="">

        <label for="player-name">player name</label>
        <input type="text" v-model="username" name="player-name" id="">

        <PostButton :postData="postData()" link="WaitingRoom" text="create new player" />
    </div>
</template>

<style>
</style>
