<template>
    <div>
     <div class="page-main gray-box">
      <div class="gallery-wrapper">
       <div class="gallery">
        <ul class="imgList">
         <li v-for="(item,index) in imgList" @click="ind=index"><img :src="item.img" width="100%"/></li>
        </ul>
        <div class="imgPanel">
         <div v-for="(item,index) in imgList"  v-show="index==ind">
          <img  :src="item.img"/>
         </div>
        </div>
       </div>
       <div class="panel">
        <h3>华为mate20 全面屏手机</h3>
        <div class="sub_title">
         <span>快充18w</span>
         <div class="panel_price"><span>￥</span><span class="price">1</span></div>
        </div>
        <div class="addNum">
         <label>颜色选择</label> <div class="box_item"><div>宝石蓝</div><div>灰色</div></div>
        </div>
        <div class="addNum">
         <label>容量选择</label> <div class="box_item"><div class="box_active">6GB+64GB</div><div>8GB+64GB</div></div>
        </div>
        <div class="addNum b_bottom">
         <label>数量选择</label>
         <add @editNum="doOption"></add>
        </div>
        <div class="gallery_btn">
         <router-link to="/checkout"> <now-buy text="现在购买" classStyle="default bigBtn"></now-buy></router-link>
         <now-buy text="去购物车" classStyle="shop bigBtn"></now-buy>
        </div>
        <div class="addNum">
         <label>服务说明</label>  <span>满99包邮</span>
        </div>
       </div>
      </div>
     </div>
     <div class="page-main">
        <shelf title="产品详情">
          <div slot="content">
            <div class="null">暂无详情 现在的数量是：{{productNum}}</div>
          </div>
        </shelf>
     </div>
    </div>
</template>
<script>
import add from '../../components/buynum'
import nowBuy from '../../components/Shopbtn'
import shelf from '../../components/shelf'

export default {
 name: 'goodsdetail',
 data(){
   return{
     ind:0,
     productNum:1,
     imgList:[{img:require('../../assets/img/goods/detail1.png')},
      {img:require('../../assets/img/goods/detail2.png')},{img:require('../../assets/img/goods/detail4.png')},
      {img:require('../../assets/img/goods/detail3.png')}]
   }
 },
 components:{
   add,
   nowBuy,
   shelf
 },
 methods:{
  doOption(num){
     this.productNum=num;
  }
 }
}
</script>
<style scoped>
.gray-box{
  padding:60px;
  background: #fff;
  border-radius: 6px;
  margin-top:20px;
  border: 1px solid rgba(0, 0, 0, .14);
}
.gallery-wrapper{
  display: flex;
  flex-flow: row;
  overflow: hidden;
}
 .gallery,.panel{
   display: flex;
   flex: 1;
   width: 100%;
   justify-content: center;
 }
 .panel{
   flex-flow: column;
   justify-content: flex-start;
   padding:10px;
 }
 .panel>div{
  height: 60px;
  line-height: 60px;
 }
 .imgList{
   height: 100%;
   display: flex;
   flex-flow: column;
   padding:10px 0;
 }
 .imgList li{
   display: block;
   justify-content: space-between;
   align-items: center;
   width:80px;
   height: 80px;
   margin:10px;
   border-radius: 4px;
   border: 1px solid #dfdfdf;
 }
 .imgPanel{
    float:left;
    margin-left: 25px;
    overflow: hidden;
 }
 .imgPanel img{
   width:100%;
   height: 100%;
   max-width: 100%;
   display: block;
 }
 .panel h3{
    font-size: 24px;
    height: 30px;
    line-height: 30px;
    color: #000;
    width: 100%;
 }
 .sub_title{
   position: relative;
   border-bottom: 1px solid #dddddd;
 }
 .sub_title>span{
   font-size: 14px;
   color: #999;
 }
 .panel_price{
  color: #d44d44;
  position: absolute;
  right: 20px;
  top:0;
  font-weight: 700;
 }
 .panel_price span{
   color: #d44d44;
   display: inline-block;
   margin-right: 2px;
 }
 .price{
  font-size: 24px;
 }
 .addNum{
   display: flex;
   flex-flow: row;
   height:90px;
   line-height: 90px;
 }
 .addNum label{
   margin-right: 20px;
 }
 .box_item div{
    display: inline-block;
    border: 1px solid #ccc;
    width: 100px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    margin-right: 5px;
    font-size: 12px;
 }
 .box_active{
  border:1px solid #d44d44 !important;
 }
.box_item div:hover{
  border:1px solid #d44d44;
}
 .b_bottom{
   border-bottom: 1px solid #ededed;
 }
 .gallery_btn{
   padding-top:10px;
 }
 .null{
   text-align: center;
   line-height: 2;
   padding: 10px;
 }
</style>
