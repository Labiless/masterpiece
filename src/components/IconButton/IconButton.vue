<template>
    <button>
        <v-icon :fill=iconColor :name=kebabCase />
    </button>
</template>

<script>

export default {
    props: {
        icon: {
            type: String,
            default: "IoShareSocialSharp"
        }
    },
    data() {
        return {
            iconColor: colors.gold,
        }
    },
    computed : {
        kebabCase(){
            return this.icon.split("").map(c => c.charCodeAt(0) < 97 ? `-${c.toLowerCase()}` : c ).join("").slice(1);
        }
    }
}
</script>

<style scoped lang="less">
@import "./IconButton.less";
</style>
