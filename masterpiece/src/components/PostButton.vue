<script setup>

import { useRouter } from "vue-router";
const router = useRouter();


const props = defineProps({
  link: String,
  postData: Object,
  params : Array,
  text: String,
  router: Object
});

//check if param from props param and insert it into object if finede in res from server
const createParams = (data) => {
  const params = {};
  props.params.forEach(param => {
/*     if (typeof param === "object"){
      const key = param.keys[0];
      params[key] = param[key];
      return
    } */
    data[param] ? (params[param] = data[param]) : null;
  });
  return params;
}

const sendPost = () => {
  console.log(props.postData);
  console.log("sending post")
  fetch(props.postData.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props.postData.body) || null
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (props.link) {
        //if i passed param from pros, try to find it in server response, this param are passed to the next view
        router.push({ name: props.link, params: (props.params? createParams(data) : null)})
      }
    }
    )
    .catch(error => {
      console.log(error)
    })
};

</script>

<template>
  <button @click="sendPost">{{ props.text }}</button>
</template>

<style>
</style>
