<template>
 <div class="right_inner">
  <div class="empty">
   <h4>您目前还没有此类{{text}}</h4>
   <div class="cartBtn">
    <y-btn text="返回首页" classStyle="default bigBtn" @btnClick="goHome"></y-btn>
   </div>
  </div>
 </div>
</template>

<script>
 import yBtn from '../components/Shopbtn'

 export default {
  name: "userEmpty",
  components:{
    yBtn
  },
  props:{
     text:{
       type:String,
       default:'信息'
     }
  },
  methods:{
   goHome(){
     this.$router.push({path:'/home',name:'index'})
   }
  }
 }
</script>

<style scoped>
 /*右边*/
 .right_inner{
  background: #fff;
  width: 100%;
  padding-bottom: 100px;
  position: relative;
 }
 .empty{
  width: 100%;
  height: 49px;
  padding: 385px 0 0;
  background: url("../assets/img/goods/usr_cart.png") no-repeat center/40%;
 }
 .empty h4{
  position: absolute;
  bottom:100px;
  left:50%;
  transform: translateX(-50%);
  color: #8b8b8b;
 }
 .cartBtn{
  position: absolute;
  bottom:40px;
  left:50%;
  transform: translateX(-50%);
 }
 .info_tro span{
  font-size: 12px;
  display: inline-block;
  padding:5px;
 }
</style>
