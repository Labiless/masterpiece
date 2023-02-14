<script setup>
import Button from "../components/Button/Button.vue"
import TextInput from "../components/TextInput/TextInput.vue"
</script>

<script>

export default {
  methods: {
    buttonClick() {
      console.log("buttonClick");
    },
    handleInput(input) {
      console.log(input)
    },

  }
}

</script>

<template>
  <Button @click="buttonClick" :type=1 text="Start Game"></Button>
  <TextInput v-on:emitInput="handleInput"></TextInput>
</template>
