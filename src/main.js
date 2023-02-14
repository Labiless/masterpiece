import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// global style
import "./assets/global.less"

// vue icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoCloseCircleSharp } from "oh-vue-icons/icons";
addIcons(IoCloseCircleSharp);

//init app
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("v-icon", OhVueIcon);

app.mount('#app')
