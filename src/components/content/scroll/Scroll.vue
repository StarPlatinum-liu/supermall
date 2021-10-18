<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name:"Scroll",
  data(){
    return{
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default(){
        return 0
      }
    },
    pullUpLoad:{
      type:Boolean,
      default(){
        return false
      }
    }

  },
  mounted(){
    /**
     * 默认情况下BSscoll是不可以实时监听滚动位置的，如果想要监听，要传参数prprobeTyep 
     * （0，不侦测。1，不侦测。2只侦测手指在屏幕的位置，惯性不侦测。3，全部侦测）
     * 注意click事件，按理来说是屏蔽点击事件的。要传参 click:true
     */
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    });

    this.scroll.on('scroll',(position) =>{
      // console.log(position)
      this.$emit('scroll',position)
    })

    this.scroll.on('pullingUp',() =>{
      // console.log('up');
      this.$emit('pullingup')
    })

    this.scroll.on('offSetUp',() =>{
      
    })
    
  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(0,0,500)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      // console.log('-=--');
      this.scroll && this.scroll.refresh()
    }

  }
}
</script>

<style scoped>

</style>