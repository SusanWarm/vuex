<template>
 <div>
  <top-nav></top-nav>
  <div class="page-main uerPage">
   <div class="user-left">
    <div class="left_header">
     <img src="../../assets/img/goods/default-user-avatar.png">
     <h4 class="left_account">15722900764</h4>
    </div>
    <ul class="left_menu">
     <li v-for="(item,ind) in navList" @click="index=ind"><router-link :to="item.path" :class="{left_active: ind==index}">{{item.name}}</router-link></li>
    </ul>
   </div>
   <div class="user-right">
     <router-view></router-view>
   </div>
  </div>
 </div>
</template>

<script>
 import topNav from '../../common/topNav'
 import shelf  from '../../components/shelf'
 import yBtn from '../../components/Shopbtn'

 export default {
  name: "list",
  data(){
    return{
       index:0,
       navList:[{id:0,path:'/user/order',name:'我的订单'},
        {id:1,path:'/user/service',name:'售后服务'},
        {id:2,path:'/user/ticket',name:'我的优惠'},
        {id:3,path:'#',name:'账户资料'},
        {id:4,path:'/user/address',name:'收货地址'}]
    }
  },
  components:{
   topNav,
   shelf,
   yBtn
  }
 }
</script>
<style scoped>
 .uerPage{
  overflow: hidden;
 }
 .user-left{
  float: left;
  width:200px;
  margin-top:30px;
  border-radius: 6px;
  border: 1px solid #d8d8d8;
  background: #fff;
 }
 .left_header{
  padding:20px;
 }
 .left_header img{
  width: 100%;
  margin-bottom:20px;
  display: block;
 }
 .left_header h4{
  text-align: center;
  line-height: 2;
  font-weight: 700;
  font-size: 18px;
 }
 .user-right{
  margin-left: 220px;
 }
 .left_menu{
  width: 100%;
 }
 .left_menu li{
  display: block;
  text-align: center;
 }
 .left_menu a{
  width: 100%;
  display: block;
  height: 100%;
  padding:15px;
 }
 .left_active{
  background: #6b95ea;
  color: #fff;
 }
 .left_menu a:hover{
  background: #6b95ea;
  color: #fff;
 }
 /*右边*/
 .shelf-box{
  width: 100%;
  overflow: hidden;
 }
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
  background: url("../../assets/img/goods/empty.png") no-repeat center;
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
