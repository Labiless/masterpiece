<template>
    <div>
        <input :placeholder=placeholder @input="emitInput" type="text" v-model=inputData>
        <button @click="clearInput" v-if="hasInput">
            <v-icon :fill=iconColor name="io-close-circle-sharp" />
        </button>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: "Name"
        }
    },
    data() {
        return {
            iconColor: colors.gold,
            inputData: ""
        }
    },
    computed: {
        hasInput() {
            return this.inputData.length > 0;
        }
    },
    methods: {
        emitInput() {
            this.$emit("emitInput", this.inputData);
        },
        clearInput(){
            this.inputData = "";
        }
    }
}

</script>

<style lang="less" scoped>
@import "./TextInput.less";
</style>