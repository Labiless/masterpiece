<script setup>
import { jSXEmptyExpression } from '@babel/types';
import { ref } from 'vue'
import { useRoute } from "vue-router";
import PostButton from '../components/PostButton.vue';

const route = useRoute();
const users = ref([]);

/* console.log(route.params.gameId)

const getUrl = `http://localhost:5000/api/games/${route.params.gameId}/players`
const getAllPlayers = () => {
    fetch(getUrl, {
        method : "GET"
    })
    .then(res => JSON.parse(res))
    .then(data => console.log(data));
}
 */
</script>

<template>
    <div class="container">
        <p  v-for="user in users" :key="user">{{user}}</p>
    </div>
</template>

<style>
</style>
