<script>

export default {
    props: {
        text: String,
        type: {
            type: Number,
            default: 1
        },
        onclick : {
            default: null
        }
    },
    computed: {
        setType() {
            switch (this.type) {
                case 0:
                    return {
                        disabled: true
                    }
                case 1:
                    return {
                        v1: true
                    }
                case 2:
                    return {
                        v2: true
                    }
            }
        }
    }
}
</script>

<style scoped lang="less">
@import "./style.less";
</style>

<template>
    <button :class="setType">{{ text }}</button>
</template>
