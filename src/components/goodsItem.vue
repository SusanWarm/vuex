<template>
   <div  class="br_item">
     <router-link to="/goodsDetail">
     <div><img :src="list.picUrl"/></div>
     <h6 class="br_txt ellip">{{list.productName}}</h6>
     <div class="br_sub ellip">{{list.subTitle}}</div>
     <div class="item_price">
      <div class="price_btn"><span>￥</span>{{list.salePrice |fix}}</div>
      <div class="info_btn"><info-btn  classStyle="midBtn default"></info-btn> <info-btn text="加入购物车" classStyle="shop midBtn" @btnClick="add(list)"></info-btn></div>
     </div>
    </router-link>
   </div>
</template>

<script>
 import infoBtn from '../components/Shopbtn'

    export default {
     name: 'goodsItem',
     props:['list'],
     components:{
        infoBtn
     },
     methods:{
        add(list){
         this.$store.commit('addCart',list)
        }
     }
    }
</script>

<style scoped>
.br_item{
 background: #fff;
 height: 430px;
 display: flex;
 text-align: center;
 width: 25%;
 box-sizing: border-box;
 transition: all .3s;
}
.br_item:hover{
 transform: translateY(-1px);
 box-shadow: 1px 1px 20px #999;
}
.br_item:hover .price_btn{
 display: none;
}
.br_item:hover .info_btn{
  display: block;
}
 .br_item a{
   display: flex;
   flex:1;
   width:100%;
   flex-flow: column;
   justify-content: center;
   align-items: center;
 }
 .br_txt{
    line-height: 1.2;
    font-size: 16px;
    color: #424242;
 }
 .br_sub{
    font-size: 12px;
    line-height: 2;
    color: #BEBEBE;
 }
 .ellip{
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
   width:100%;
 }
 .item_price{
    height: 60px;
    line-height: 60px;
 }
 .price_btn{
   font-size: 18px;
   color: #d44d44;
   font-weight: 700;
 }
 .price_btn span{
   font-size: 14px;
 }
.info_btn{
   display: none;
}
</style>
