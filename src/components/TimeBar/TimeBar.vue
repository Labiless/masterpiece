<template>
    <div class="external">
        <div :style=css class="internal" :class="{animate : isStart}" ></div>
    </div>
</template>

<script>
    export default{
        props: {
            maxTime: {
                type: Number,
                default: 10
            },
            isStart: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                timer : this.maxTime,
            }
        },
        watch : {
            isStart : function(){
                console.log(this.isStart)
                this.start();
            }
        },
        methods : {
            start(){
                if(this.isStart){
                    setTimeout(() => {
                        this.$emit("timerEnd");
                    }, this.maxTime * 1000)
                }
            }
        },
        computed: {
            css(){
                return{
                     "transition" : `all ${this.maxTime}s`
                }
            }
        },
        mounted() {
            this.start();
        }

    }
</script>

<style lang="less" scoped>
    @import "./TimeBar.less";
</style>