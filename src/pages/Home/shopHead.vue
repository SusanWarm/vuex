<template>
    <div class="head_p">
     <!--头部-->
     <div class="headBottom">
      <div class="toFix">
       <div class="top_main">
        <el-col :span="20">
         <ul class="hb_menu">
          <li data-id="a"><router-link to="/">首页</router-link></li>
          <li data-id="b"><router-link to="/mobile/001">手机</router-link></li>
          <li data-id="c"><a href="#">官方配件</a></li>
          <li><a href="#">服饰箱包</a></li>
          <li><a href="#">畅呼吸</a></li>
          <li><a href="#">服务</a></li>
         </ul>
         <div class="hb_second none">
          <ul class="top_main sec_ul none" id="a">
           <li>
            <h3>手机</h3>
            <ul class="sec_foot">
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">手机</a></li>
            </ul>
           </li>
           <li>
            <h3>官方配件</h3>
            <ul class="sec_foot">
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">自助服务</a></li>
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">使用帮助</a></li>
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">维修门店</a></li>
            </ul>
           </li>
           <li>
            <h3>畅呼吸系列</h3>
            <ul class="sec_foot">
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">新闻动态</a></li>
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">官方视频</a></li>
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">图片资源</a></li>
            </ul>
           </li>
           <li>
            <h3>服饰箱包</h3>
            <ul class="sec_foot">
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">新浪微博</a></li>
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">官方微信</a></li>
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">荣誉奖项</a></li>
            </ul>
           </li>
          </ul>
          <ul class="top_main sec_ul mb_sec none" id="b">
           <li>
            <div><img src="../../assets/img/goods/afd.jpg" width="60%"/></div>
            <div>坚果Pro</div>
            <div><span class="mb_price">￥2999 </span><span class="mb_qi">起</span></div>
           </li>
           <li>
            <div><img src="../../assets/img/goods/afffd.jpg" width="60%"/></div>
            <div>坚果Pro</div>
            <div><span class="mb_price">￥2999 </span><span class="mb_qi">起</span></div>
           </li>
           <li>
            <div><img src="../../assets/img/goods/afd.jpg" width="60%"/></div>
            <div>坚果Pro</div>
            <div><span class="mb_price">￥2999 </span><span class="mb_qi">起</span></div>
           </li>
           <li>
            <div><img src="../../assets/img/goods/aff.jpg" width="60%"/></div>
            <div>坚果Pro</div>
            <div><span class="mb_price">￥2999 </span><span class="mb_qi">起</span></div>
           </li>
          </ul>
          <ul class="top_main sec_ul none" id="c">
           <li>
            <h3>耳机</h3>
            <ul class="sec_foot">
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">手机</a></li>
            </ul>
           </li>
           <li>
            <h3>充电器配件</h3>
            <ul class="sec_foot">
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">自助服务</a></li>
            </ul>
           </li>
           <li>
            <h3>耳机</h3>
            <ul class="sec_foot">
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">新闻动态</a></li>
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">官方视频</a></li>
            </ul>
           </li>
           <li>
            <h3>自拍杆</h3>
            <ul class="sec_foot">
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">新浪微博</a></li>
             <li><img src="../../assets/img/goods/aa.png" width="35px"/><a href="#">荣誉奖项</a></li>
            </ul>
           </li>
          </ul>
         </div>
        </el-col>
        <el-col :span="4" :class="{none:isShow}"><div class="head-div head-right">
         <div class="head-form"><input type="text" value="" placeholder="手机"/><span class="head_key">配件</span>
          <label class="head-search el-icon-search"></label></div>
        </div></el-col>
        <div  class="scroll_right nav-aside" :class="{icon_fix:isShow}">
        <ul>
         <li class="li2"><a href="#" class="el-icon-user nav_icon scroll_icon"></a></li>
         <li class="li2"><router-link to="/cart" class="nav_icon el-icon-goods scroll_icon"><el-badge :value="222222222" class="item"></el-badge></router-link></li>
        </ul>
       </div>
       </div>
      </div>
     </div>
     <div class="clear"></div>
    </div>
</template>

<script>
export default {
 name: 'shopHead',
 data () {
  return {
   isShow:false
  }
 },
 mounted (){
  window.addEventListener('scroll',this.scrollTop);
  this.doHover()
 },
 methods:{
  scrollTop () {
   var t = document.documentElement.scrollTop||document.body.scrollTop;
   if(t>40) {
    this.isShow=true;
    $('.headBottom').addClass('scroll_fix')
    $('.scroll_fix').delay(10000).fadeIn()
   }else{
    this.isShow=false;
    $('.headBottom').removeClass('scroll_fix')
   }
  },
  doHover(){
   let activeMenu;
   let sub=$('.hb_second');
   let time;
   let mousetTap;

   sub.on('mouseenter',function () {
    mousetTap=true;
   }).on('mouseleave',function () {
    mousetTap=false;
    if (activeMenu){
     activeMenu.addClass('none');
     activeMenu=null;
    }
    sub.addClass('none');
   });

   $('.hb_menu')
    .on('mouseenter',function (e) {
     sub.removeClass('none')
    })
    .on('mouseleave',function (e) {
     time=setTimeout(function () {
      // console.log('演示')
      if(mousetTap){
       return
      }else{
       if (activeMenu){
        activeMenu.addClass('none');
        activeMenu=null;
       }
       sub.addClass('none');
      }
     },300)
    })
    .on('mouseenter','li',function (e) {
     if (activeMenu) {
      activeMenu.addClass('none');
     }
     activeMenu=$('#'+e.currentTarget.dataset.id);
     activeMenu.removeClass('none')
    })
  }
 }
}
</script>

<style scoped>
 .nav_icon{
  font-size: 19px;
  color:hsla(0,0%,100%,.7);
  text-decoration: none;
  display: inline-block;
  margin-right: 10px;
 }
 .head_p{
  background: #fff;
  border-bottom: 1px solid #e1e1e1;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.05);
 }
 .top_main{
  width:1000px;
  margin:0 auto;
  background: #fff;
 }
 .head-right{
  margin: 15px auto;
 }
 .head-form{
  height: 36px;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding-left:10px;
 }
 .head_key{
  position: absolute;
  right: 40px;
  top:50%;
  transform: translateY(-50%);
  font-size: 12px;
  padding:4px 4px 4px;
  color: #889294;
  display: inline-block;
  border:1px solid #eee;
  border-radius: 20%;
  text-align: center;
 }
 .bd{
  border:1px solid #000;
 }
 .head-search{
  width:36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  position: absolute;
  right: 0;
  top:0;
  font-weight: bold;
  text-align: center;
 }
 /*菜单*/
 .headBottom{
  display: block;
 }
 .hb_menu{
  height: 100%;
  display: flex;
  flex-flow: row;
  margin: 15px 0;
  padding:0;
 }
 .toFix{
  position: relative;
 }
 .scroll_fix{
  background: #fff;
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 99999;
  border-bottom: 1px solid #e1e1e1;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.05);
 }
 .icon_fix{
  top:50%;
  transform: translate3d(10px,59px,10px);
  transition: transform .3s cubic-bezier(.165,.84,.44,1);
 }
 /*二级菜单*/
 .hb_second{
  position: absolute;
  left:0;
  top:65px;
  right: 0;
  width: 100%;
  height: 226px;
  background: #fff;
  padding:20px;
  border-top: 1px solid #d4d4d4;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.05);
  z-index: 9999;
  zoom: 1;
  display: block;
 }
 .clear{
  clear:both;
 }
 .sec_ul li{
  display: inline-block;
  vertical-align: top;
  width:220px;
 }
 .sec_ul h3{
  color: #595959;
  line-height: 2;
 }
 .sec_foot li{
  margin-top:10px;
  height: 36px;
  line-height: 0;
 }
 .sec_foot li img{
  display: block;
  float: left;
  vertical-align: middle;
  margin-right:10px;
 }
 .sec_foot li a{
  display: block;
  height: 36px;
  line-height: 36px;
  padding:0;
  margin:0;
  text-decoration: none;
 }
 .mb_sec div{
  text-align: center;
  line-height: 2;
 }
 .mb_price{
  color:#d44d44;
  font-weight: 900;
  font-size: 16px;
 }
 .mb_qi{
  color: #7f7f7f;
  font-weight: 700;
 }
 .none{
  display: none;
 }
 .head-form input{
  border: none;
  height: 100%;
  background: none;
  outline: none;
  padding-left: 5px;
 }

 .hb_menu li{
  display: flex;
  min-width: 60px;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
 }
 .hb_menu li a{
  display: block;
  text-align: left;
  padding:10px 20px 10px 0;
  text-decoration: none;
  font-size: 15px;
  color: rgba(1, 1, 1, 0.8);
 }
 .hb_menu li a:hover{
  color: #86c7ff;
 }
 .li2{
  display: inline-block;
 }
 .nav-aside{
  position: absolute;
  right:20px;
  top:-60px;
 }
 .scroll_icon{
  color:#000;
 }
 .scroll_right{
  height: 6px;
  line-height: 70px;
  text-align: right;
 }
</style>
