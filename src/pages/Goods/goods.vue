<template>
    <div class="page-main">
       <div class="nav">
        <a href="#" class="active">综合排序</a><a href="#">价格从低到高</a><a href="#">价格从高到低</a>
       </div>
       <div class="goods-main">
          <goods-item :list="item"  v-for="item in all" :key="item.id"></goods-item>
       </div>
    </div>
</template>

<script>
 import goodsItem from '../../components/goodsItem'

 export default {
  name: 'goods',
  data(){
    return{
     all:[{id:1,productName:'坚果 3 前屏钢化玻璃保护膜',salePrice:100,sortOrder:1,subTitle:'超强透光率、耐刮花、防指纹',picUrl:require('../../assets/img/goods/afffd.jpg'),panelId:1},
      {id:2,productName:'坚果 Pro 2 特别版',salePrice:90,sortOrder:1,subTitle:'漂亮得不像实力派',picUrl:require('../../assets/img/goods/afd.jpg'),panelId:1},
      {id:3,productName:'Smartisan 半入耳式耳机',salePrice:30,sortOrder:1,subTitle:'经典配色、专业调音、高品质麦克风',picUrl:require('../../assets/img/goods/earphone.jpg'),panelId:1},
      {id:4,productName:'坚果 Pro 2 特别版',salePrice:33,sortOrder:1,subTitle:'漂亮得不像实力派',picUrl:require('../../assets/img/goods/p30.jpg'),panelId:1},
      {id:5,productName:'坚果3手机壳',salePrice:44,sortOrder:1,subTitle:'经典配色、专业调音、高品质麦克风',picUrl:require('../../assets/img/goods/phonet.png'),panelId:1},
      {id:6,productName:'DSC-RX100M5A 黑卡数码相机',salePrice:55,sortOrder:1,subTitle:'经典配色、专业调音、高品质麦克风',picUrl:require('../../assets/img/goods/camera.jpg'),panelId:1}]
    }
  },
  components:{
    goodsItem
  }
 }
</script>

<style scoped>
 .nav{
   height: 60px;
   line-height: 60px;
   padding: 0 20px;
 }
 .nav a{
   display: inline-block;
   margin-right: 20px;
   color: #818181;
   font-size: 12px;
 }
 .nav a:hover{
  color: #6b95ea;
 }
 .active{
   color: #6b95ea !important;
 }
 .goods-main{
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
 }
 .goods-main>div{
   border: 1px solid #eee;
 }
</style>
