<template>
  <div id="app">
     <router-view class="main"></router-view>
     <pg-foot></pg-foot>
  </div>
</template>

<script>
 import pgFoot from '@/common/foot'

export default {
  name: 'App',
  components:{
    pgFoot
  }
}
</script>

<style>
@import "assets/css/reset.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #ededed;
  position: relative;
  border: 1px solid #000;
}
.main {
 background: #ededed;
 min-width:1000px;
 overflow: hidden;
 width: 100%;
}
.page-main{
 width:1220px;
 margin:0 auto;
}
 .page-card{
  margin-top:30px;
  padding:0;
  transition: .3s;
  border-radius: 8px;
  background: #fafafa;
  border: 1px solid #d8dade;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
 }
 .br_top{
  padding:20px;
  height: 20px;
  line-height: 20px;
  border-bottom: 1px solid #d0d1d4;
 }
 .pay_btn{
  padding: 15px;
  text-align: center;
  background: #5079d9;
  color: #fff;
  font-weight: bolder;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  margin-left: 30px;
 }
 .clear:after{
   content:'.';
   clear:both;
   height: 0;
   visibility: hidden;
   display: block;
 }
</style>
