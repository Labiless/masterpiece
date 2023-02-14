<template>
    <div>
        <p>{{ text }}</p>
        <button @click="clearInput" v-if="hasInput">
            <v-icon :fill=iconColor name="io-close-circle-sharp" />
        </button>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "this is a toast!"
        }
    }
}
</script>

<style lang="less" scoped>
    @import "./Toast.less";
</style>