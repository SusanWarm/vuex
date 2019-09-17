<template>
    <div class="ale_bg" v-if="open">
        <div class="content">
           <div class="ale_tit">{{title}}</div>
           <div class="ale_content">
             <slot name="ale_main"></slot>
           </div>
           <slot name="ale_foot"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'pop',
  props:{
    title:{
      type:String,
      default:'标题'
    },
   open:{
      type:Boolean,
      default:false
   }
  },
 data(){
   return{
     isShow:true
   }
 },

}
</script>

<style scoped>
.ale_bg{
 position: fixed;
 left:0;
 top:0;
 right:0;
 bottom:0;
 background: rgba(0,0,0,0.5);
 z-index: 999;
}
.content{
 border-radius: 6px;
 position: absolute;
 width: 306px;
 left: 50%;
 top:50%;
 background: #fff;
 transform: translate(-50%,-50%);
}
.ale_tit{
  height:45px;
  background: linear-gradient(#e6e6e6, #e9e9e9);
  text-align: center;
  border-radius: 6px 6px 0 0;
  line-height: 45px;
  font-weight: 700;
  font-size: 18px;
}
 .ale_content{
   padding:10px 20px;
 }
</style>
