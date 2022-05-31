import { createRouter, createWebHistory } from 'vue-router'
//view
import Homepage from "../views/Homepage.vue";
import JoinGame from "../views/JoinGame.vue";
import WaitingRoom from "../views/WaitingRoom.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path : "/", name : "Home", component: Homepage},
    {path : "/joingame", name: "JoinGame", component: JoinGame},
    {path : "/waitingroom", name: "WaitingRoom", component: WaitingRoom},
  ]
})

export default router
