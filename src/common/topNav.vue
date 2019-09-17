<template>
      <div>
       <!--顶部-->
       <nav>
        <div class="page-main">
          <div class="w">
           <div class="nav-logo"><router-link class="nav_img" to="/"></router-link></div>
           <div class="nav-right">
            <ul class="nav-list">
             <li class="wrap-hov li"><a href="#">在线商城</a></li>
             <li class="wrap-hov li"><a href="#">注册</a></li>
             <li class="wrap-hov li"><a href="#">签到有礼</a></li>
             <li class="wrap-hov li"><a href="#">我的订单</a></li>
             <li class="wrap-hov li"><a href="#">我的特卖</a></li>
             <li class="wrap-hov li"><a href="#">会员俱乐部</a></li>
             <li class="wrap-hov li"><a href="#">客户服务</a></li>
             <li class="wrap-hov li"><a href="#">手机版</a></li>
             <li class="wrap-more li"><a href="#">更多</a></li>
            </ul>
            <div class="nav-aside" :class="{cart_fix:cs}">
             <ul>
              <li class="li2 flex">
               <router-link to="/user" class="el-icon-user nav_icon flex"></router-link>
              </li>
              <li class="li2 flex" @mouseenter="showCart()" @mouseleave="hideCart()"  v-if="cart">
               <router-link to="/cart" class="nav_icon el-icon-s-goods flex nav_basket"><div class="el-bg"><sup :class="{supbg:totalNum>0}">{{totalNum}}</sup></div></router-link>

               <!--信息下弹框-->
               <div class="nav-user-wrapper" v-show="cartShow">
                <ul class="list-goods"  v-if="cartList.length>0">
                   <li v-for="item in cartList" :key="item.id">
                      <div class="goods-img"><img :src="item.picUrl"/></div>
                      <div class="goods-tit">
                          <h4><a href="#">{{item.productName}}</a></h4>
                          <h6>
                           <span class="price-icon">￥</span>
                           <span class="price-num">{{item.salePrice}}</span>
                           <span class="price-amount">x{{item.count}}</span>
                          </h6>
                      </div>
                      <div class="del"><i class="el-icon-circle-close" @click="delItem(item.id)"></i></div>
                   </li>
                   <li class="nav-cart-total">
                       <div>
                        <p>共计<span>{{totalNum}}</span>件商品</p>
                        <h5>合计：<span class="price-icon">￥</span><span class="price-num">{{totalPrice |fix}}</span></h5>
                       </div>
                       <h6><shop-btn text="去购物车" classStyle="shop bigBtn"></shop-btn></h6>
                   </li>
                </ul>
                <div  v-else class="list-empty">
                    <p>您的购物车竟然是空的</p>
                </div>
               </div>
               <!--信息下弹框over-->
              </li>
             </ul>
            </div>
           </div>
          </div>
        </div>
       </nav>
       <!--头部菜单-->
       <div class="nav-sub" :class="{fixed: cs}" v-show="showNav">
         <div class="page-main">
          <ul class="nav-menu">
           <li><router-link to="/">首页</router-link></li>
           <li><router-link to="/goods">全部商品</router-link></li>
           <li><router-link to="#">品牌周边</router-link></li>
          </ul>
         </div>
       </div>
      </div>
</template>

<script>
 import ShopBtn from '../components/Shopbtn'
export default {
   name: "topNav",
 computed:{
  cartList(){
    return this.$store.state.cartList
  },
  cartShow(){
     return this.$store.state.cartShow
  },
  //商品总数量
  totalNum(){
     let total=0;
     this.cartList.length && this.cartList.forEach(item=>{
        total+=item.count
     });
     return total;
  },
  //商品总价
  totalPrice(){
     let sum=0;
     this.cartList.length && this.cartList.forEach(item=>{
        sum+=item.salePrice*item.count;
     });
   return sum;
  }
 },
 props:{
    showNav:{
      type:Boolean,
      default:true
    }
 },
 data(){
    return{
     //购物车显示
     cs:false,
     cart:true,
     bgColor:'#ccc'
    }
 },
 mounted(){
  this.checkPage();
  window.addEventListener('scroll',this.doScroll)
 },
 methods:{
   checkPage(){
      if(this.$route.path === '/goods' ||
       this.$route.path === '/home' ||
       this.$route.path === '/goodsDetails'){
        this.cart=true;
      }else{
        this.cart=false;
      }
   },
   doScroll(){
       let t=document.documentElement.scrollTop;
        if(this.showNav){
         t>100 ?  this.cs=true: this.cs=false;
        }
   },
  delItem(id){
     this.$store.commit('reduce',id)
  },
  showCart(){
     this.$store.commit('showCar')
  },
  hideCart(){
     this.$store.commit('hideCar')
  }
 },
 components:{
  ShopBtn
 },
 destroyed() {
    window.removeEventListener('scroll',this.doScroll)
 }
}
</script>

<style scoped>
 nav{
  width:100%;
  background-color: #000;
  color:hsla(0,0%,100%,.7);
  font-size: 16px;
  position: relative;
  height:40px;
 }
 .w{
  display: flex;
  flex-flow: row;
  flex: 3;
 }
 .nav-logo{
  display: flex;
  flex:1;
  height: 40px;
  padding-left: 24px;
 }
.nav_img{
  display: inline-block;
  padding-left:20px;
  background: url('../assets/img/logo1.png') center no-repeat;
  background-size: contain;
}
.nav-right{
  display: flex;
  flex:2;
  justify-content: flex-end;
}
 .nav-list{
   font-size: 0;
   display: flex;
 }
 .li{
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 12px;
 }
 .nav-list li a{
    text-decoration: none;
    color:hsla(0,0%,100%,.6);
    padding:0 12px;
 }
.wrap-hov:after{
   content: '|';
   display: inline-block;
   text-align: center;
}
 .wrap-hov a:hover,.wrap-more a:hover{
    color:hsla(0,0%,100%,1);
 }
 /*购物车和user*/
 .nav-aside{
   position: relative;
 }
 .nav-aside>ul{
  display: flex;
  height: 100%;
  margin-left: 20px;
 }
 .li2{
  margin-right: 10px;
 }
 .nav_icon{
  font-size: 22px;
  color: hsla(0, 1%, 57%, 0.7);
  text-decoration: none;
 }
 .nav_icon:hover{
   color:#666;
 }
 .cart_fix{
  position: fixed;
  z-index:55;
  transform: translate3d(0, 19px, 0);
  transition: transform .3s cubic-bezier(.165, .84, .44, 1);
 }
 .flex{
   display: flex;
  align-items: center;
 }
 /*弹出模块*/
 .none{
   display: none;
 }
 .nav-user-wrapper{
   position: absolute;
   padding:10px 5px;
   top:40px;
   right:0;
   min-width: 357px;
   min-height: 229px;
   background: #fff;
   border-radius: 8px;
   box-shadow: 0 20px 40px rgba(0, 0, 0, .15);
   border: 1px solid #f1ecec;
   z-index:10;
   -webkit-transition: opacity .15s ease-out;
   transition: opacity .15s ease-out;
 }
 .nav-user-wrapper:before{
  position: absolute;
  top:-7px;
  right:31px;
  width:20px;
  height: 8px;
  content: " ";
  background: url('../assets/img/static.png') no-repeat -49px -43px;
  background-size: 240px 107px;
 }
 .nav-user-wrapper:hover .del{
   opacity: 1;
 }
 .list-goods li{
    display: flex;
    flex-flow: row;
    color:#6f6f6f;
    white-space: nowrap;
    font-size: 14px;
    width:100%;
    padding:20px;
 }
 .goods-img{
    display: flex;
    flex:1;
    width:80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    border:1px solid #dfdfdf;
  overflow: hidden;
 }
 .goods-img img{
   display: block;
   width: 100%;
   vertical-align: middle;
 }
 .goods-tit{
   padding:10px 25px;
 }
 .goods-tit h4{
  color: #000;
  width: 185px;
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 10px;
 }
 .goods-tit h6{
  color: #cacaca;
  font-size: 12px;
  line-height: 14px;
  margin-top: 20px;
 }
 .goods-tit h6 span{
  font-weight: 700;
  font-size: 14px;
 }
 .price-icon{
   color: #d43939;
 }
 .price-num{
   color:#d44d44;
   margin-left: 2px;
   font-weight: 700;
 }
 .price-amount{
   margin-left:10px;
 }
 .nav-cart-total{
  position: relative;
  box-shadow: inset 0 -1px 0 hsla(0,0%,100%,.5), 0 -3px 8px rgba(0,0,0,.04);
 }
 .nav-cart-total p{
   font-size: 12px;
   line-height: 16px;
   margin-bottom:5px;
   color: #c1c1c1;
 }
 .nav-cart-total h5{
   font-size: 14px;
 }
 .nav-cart-total h6{
   position: absolute;
   right: 20px;
   top:20px;
 }
 .notFull{
  width:100%;
  border:1px solid #000;
  height: 100%;
 }
 .list-empty{
    margin:70px auto 0 auto;
    background: url('../assets/img/basket.png') no-repeat center;
    position: relative;
    height: 62px;
    width:72px;
 }
 .list-empty p{
    position: absolute;
    top:70px;
    left:50%;
    transform: translateX(-50%);
    white-space: nowrap;
    color:#666;
    font-size: 15px;
 }
 /*fa2a83*/
 /*底部*/
 .nav-sub{
  border-bottom: 1px solid #e1e1e1;
  height:70px;
  background: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .04);
 }
 .nav-menu li{
  display: inline-block;
  height:70px;
  line-height:70px;
  text-align: left;
 }
 .nav-menu a{
  color:#666;
  padding:0 25px;
  text-decoration: none;
  font-size: 14px;
 }
 .nav-menu a:hover{
  color: #5079d9;
 }
 .fixed{
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index:32;
 }
 .del{
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 19px;
   opacity: 0;
  -webkit-transition: opacity .15s ease-out;
  transition: opacity .15s ease-out;
   cursor:pointer;
 }
 .el-bg{
  position: relative;
  vertical-align: middle;
  display: inline-block;
 }
 .el-bg sup{
  background-color: #ccc;
  border-radius: 10px;
  color: #FFF;
  display: inline-block;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  padding: 0 6px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #FFF;
 }
 .supbg{
   background-color: #F56C6C !important;
 }
</style>
