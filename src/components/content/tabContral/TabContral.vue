<template>
    <div class="tabcontral">
        <div v-for="(item,index) in title" :key="index" @click="swi(index)" :class="{active:index === rightNum}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>

export default {
    name:"TabContral",
    props:{
        title:Array,
        default(){
            return[]
        }
    },
    data(){
        return{
            rightNum:0,
            
        }
    },
    methods:{
        swi(index){
            this.rightNum = index 
            this.$emit("tabswitch",index)
        }    
    }

}
</script>

<style scoped>
    .tabcontral{
        display: flex;
    }
    .tabcontral div{
        flex: 1;
        text-align: center;
        height: 30px;
        line-height: 30px;
        margin-bottom: 10px;
    }
    .tabcontral span{
        padding-bottom: 5px;
        /* border-bottom: 3px solid pink; */
    }
    .active span{
        color: pink;
        border-bottom: 3px solid pink; 

    }
</style>