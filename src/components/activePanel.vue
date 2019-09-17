<template>
 <div class="page-main activity-panel">
  <ul class="panel">
   <slot name="con1"></slot>
   <slot name="con2"></slot>
   <slot name="con3"></slot>
   <slot name="con2"></slot>
  </ul>
 </div>
</template>

<script>
    export default {
        name: "activePanel"
    }
</script>

<style scoped>
 .activity-panel{
  margin-top:30px;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, .14);
 }
 .panel li{
  width:25%;
  margin:0;
  box-sizing: border-box;
  float: left;
  position: relative;
 }
 .panel li:not(last-child){
  border-right: 1px solid rgba(0, 0, 0, .12);
 }
 .panel-img{
  display: block;
 }
 .panel-img img{
  width:100%;
  display: block;
 }
 .panel-text{
  position: absolute;
  left: 0;
  top:0;
  right: 0;
  bottom: 0;
  background:rgba(0,0,0,0.3);
  color: #bdbdbd;
  text-align: center;
 }
 .panel-text:hover{
  box-shadow: inset 0 0 38px rgba(0,0,0,.08);
  cursor: pointer;
 }
 .text{
  position: relative;
  top:50%;
  transform: translateY(-50%);
 }
 .text:hover{
  color: #b4b4b4;
 }
 .text h4{
  height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  vertical-align: middle;
  line-height: 1;
  font-weight: 700;
  -webkit-line-clamp: 1;
  -webkit-box-pack:center;
 }
</style>
