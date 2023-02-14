<template>
    <div @click="deleteToast" :class="{ show: showToast }">
        <p>{{ text }}
            <button>
                <v-icon :fill=iconColor name="io-close-circle-sharp" />
            </button>
        </p>
    </div>
</template>

<script>

export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        time: {
            type: Number,
            default: 1000
        },
        text: {
            type: String,
            default: "this is a toast!"
        }
    },
    data() {
        return {
            showToast: true,
            iconColor: colors.grey,
        }
    },
    methods: {
        deleteToast() {
            this.showToast = false;
        }
    },
    watch: {
        show() {
            this.showToast = true;
            setTimeout(() => this.showToast = false, this.time)
        }
    }
}
</script>

<style lang="less" scoped>
@import "./Toast.less";
</style>