<template>
    <div class="carPage">
       <top-nav :showNav="false"></top-nav>
       <shelf title="购物清单">
          <div slot="content" class="cart_inner" :class="{pd:list===null}">
              <div class="empty" v-if="list===null">
                 <h4>您的购物车还是空的</h4>
                 <div class="cartBtn">
                   <y-btn text="现在购物" classStyle="default bigBtn"></y-btn>
                 </div>
              </div>
              <div v-else>
               <div class="box-inner">
                <div class="box-title">
                 <span class="ch_info">商品信息</span>
                 <span class="ch_price">单价</span>
                 <span class="ch_amount">数量</span>
                 <span class="ch_money">小计</span>
                 <span class="ch_opt">操作</span>
                </div>
                <div class="box-table">
                 <div class="ch_info  table_info">
                  <el-checkbox v-model="check"></el-checkbox>
                  <div class="wrap_img"><img src="../../assets/img/goods/afd.jpg"/></div>
                  <div>坚果三脚架自拍杆</div>
                 </div>
                 <div class="ch_price">
                  <h4><span>￥</span>99</h4>
                 </div>
                 <div class="ch_amount">
                  <buy-num></buy-num>
                 </div>
                 <div class="ch_money">99</div>
                 <div class="ch_opt">
                   <i class="el-icon-circle-close"></i>
                 </div>
                </div>
               </div>
               <div class="cart_cap">
                  <div class="cap_l">
                    <div class="cap_all">
                     <el-checkbox v-model="check">全选</el-checkbox>
                     <div class="all_del">删除选中的商品</div>
                    </div>
                    <div class="cap_choose">
                       <h3>已选中<span>1</span>件商品</h3>
                       <h4>共计 <span>1</span>件商品</h4>
                    </div>
                  </div>
                  <div class="cap_r">
                      <div class="capr_pay">
                        <h4>应付总额<span>￥</span><span>199</span></h4>
                        <h5 class="yf">应付总额不含运费</h5>
                      </div>
                      <div class="capr_btn"><y-btn text="现在结算" classStyle="shop bigBtn" @btnClick="checkout"></y-btn></div>
                  </div>
               </div>
              </div>
          </div>
       </shelf>
    </div>
</template>

<script>
 import topNav from '../../common/topNav'
 import shelf from '../../components/shelf'
 import yBtn from '../../components/Shopbtn'
 import buyNum from '../../components/buynum'

 export default {
  name: 'cart',
  data(){
    return{
       list:{},
      check:false
    }
  },
  components:{
    topNav,
    shelf,
    yBtn,
    buyNum
  },
  methods:{
   checkout(){
      this.$router.push({path:'checkout'})
   }
  }
}
</script>

<style scoped>
 @import "../../assets/css/cart.css";
 .cart_inner{
    background: #fff;
    border-radius: 0 0 4px 4px;
    /*padding-bottom:90px;*/
    position: relative;
 }
 .pd{
   padding-bottom: 90px;
 }
 .empty{
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
 /*cart结算部分*/
 .cart_cap{
   border-top:1px solid #ccc;
   padding:20px;
   height: 100px;
   display: flex;
   flex:10;
   flex-flow: row;
 }
 .el-checkbox{
   margin-right: 20px;
   user-select: none;
 }
 .cap_l{
   border-right: 1px solid #ccc;
   padding-right: 10px;
   overflow: hidden;
   display: flex;
   flex:7.5;
   align-items: center;
 }
 .cap_all{
   float: left;
   width: 80%;
 }
 .all_del{
   color: #BEBEBE;
   font-weight: bolder;
   display: inline-block;
   border-left: 1px solid #ddd;
   padding:0 10px;
 }
 .cap_choose{
   float: right;
   min-width:200px;
  text-align: right;
   padding-right: 10px;
 }
 .cap_choose span {
   display: inline-block;
   min-width:40px;
  text-align:center;
 }
 .cap_choose h3,.capr_pay h3{
    font-weight: 700;
    font-size: 16px;
 }
 .cap_choose span{
    color: #d44d44;
 }
 .cap_choose h4{
   font-size: 16px;
   color: #bcbcbc;
   line-height: 2;
 }
 .cap_r{
    display: flex;
    flex:2.5;
    padding-left: 20px;
    align-items: center;
    position: relative;
 }
 .capr_pay h4{
   color: #323232;
   font-weight: 700;
 }
.yf{
 line-height: 2;
 font-weight: 700;
 color: #bcbcbc!important;
 }
 .capr_btn{
   position: absolute;
   right: 0;
   top:50%;
   transform: translateY(-50%);

 }
</style>
