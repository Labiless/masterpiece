<script setup>
import Button from "../components/Button/Button.vue"
import TextInput from "../components/TextInput/TextInput.vue"
import Toast from "../components/Toast/Toast.vue"
import IconButton from "../components/IconButton/IconButton.vue";
import TimeBar from "../components/TimeBar/TimeBar.vue";
</script>

<script>
export default {
  data() {
    return {
      showToast: false,
      toastText: "ciao sono un toast"
    }
  },
  methods: {
    buttonClick() {
      this.toastText = "start timer"
      this.showToast = !this.showToast;
    },
    iconClick(){
      console.log("icon clicked")
    },
    handleInput(input) {
      console.log(input)
    },
    timerEnd(){
      console.log("timer ended")
    }
  },
  mounted(){
    console.log(this.showToast);
  }
}
</script>

<template>
  <Button @click="buttonClick" :type=1 text="Start Game"></Button>
  <TextInput v-on:emitInput="handleInput" />
  <Toast :show=showToast :text="toastText"/>
  <IconButton @click="iconClick" icon="IoShareSocialSharp"/>
  <IconButton icon="IoQrCodeSharp"/>
  <IconButton icon="IoCopySharp"/>
  <TimeBar maxTime="10" v-on:timerEnd="timerEnd" :isStart=showToast />
</template>
