<script setup>
import Button from "../components/Button/Button.vue"
import TextInput from "../components/TextInput/TextInput.vue"
import Toast from "../components/Toast/Toast.vue"
import IconButton from "../components/IconButton/IconButton.vue";
</script>

<script>
export default {
  data() {
    return {
      showToast: true,
      toastText: "ciao sono un toast"
    }
  },
  methods: {
    buttonClick() {
      this.toastText = ["test 1", "un nuovo test", "ancora il nuovo testo!"][Math.trunc(Math.random()*3)]
      this.showToast = !this.showToast;
    },
    iconClick(){
      console.log("icon clicked")
    },
    handleInput(input) {
      console.log(input)
    },

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
</template>
