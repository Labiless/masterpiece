<script setup>
import Button from "../components/Button/Button.vue"

const test = () => {
  console.log("test");
}

</script>

<template>
  <Button @click="test" :type=1 text="Start Game"></Button>
</template>
