<template>
 <div class="shelf-box page-main">
     <div class="title">
        <h3>{{title}}</h3>
        <slot name="head-right"></slot>
     </div>
     <div>
       <slot name="content"></slot>
     </div>
 </div>
</template>

<script>
 export default {
  name: 'shelf',
  props:{
   title:{
        type:String,
        default:'热销商品'
     }
  }
 }
</script>

<style scoped>
.shelf-box{
 border: 1px solid #dcdcdc;
 border-radius: 4px;
 margin-top:30px;
}
 .title{
   height: 60px;
   line-height: 60px;
   padding:0 20px;
   border-bottom:1px solid #ccc;
   border-radius: 4px 4px 0 0;
   background: linear-gradient(#ffffff, #e2e2e2);
 }
 h3{
   font-weight: 400;
   font-size: 18px;
 }
 .content{
   height: 200px;
 }
</style>
