<template>
    <div class="wrapper">
     <shop-banner></shop-banner>
     <panel class="box">
        <li slot="con1"><a class="panel-img" href="#"><img src="../../assets/img/goods/li4.jpg"/></a></li>
        <li slot="con2"><a class="panel-img" href="#"><img src="../../assets/img/goods/li1.jpg"/></a></li>
        <li slot="con3"><a class="panel-img" href="#"><img src="../../assets/img/goods/li2.jpg"/></a></li>
        <li slot="con4"><a class="panel-img" href="#"><img src="../../assets/img/goods/li3.png"/></a></li>
     </panel>
     <l-shelf>
       <div slot="content" class="hot">
         <goods-item :list="item" v-for="item in hot" :key="item.id"></goods-item>
       </div>
     </l-shelf>
     <l-shelf  title="官方精选">
        <div slot="content" class="gf">
           <div class="imgBig"><img src="../../assets/img/goods/gfimg.jpg" width="100%"/></div>
           <goods-item :list="item" v-for="item in gf" :key="item.id"></goods-item>
        </div>
     </l-shelf>
     <!--底部-->
     <panel>
        <li slot="con1">
         <a class="panel-img" href="#"><img src="../../assets/img/goods/poster-1.jpg"/></a>
         <div class="panel-text">
          <div class="text">
           <h4>[开箱] 坚果Pro 2S内敛骚蓝惊艳</h4>
           <p>内敛骚蓝，惊艳炫光</p>
          </div>
         </div>
        </li>
        <li slot="con2">
        <a class="panel-img" href="#"><img src="../../assets/img/goods/poster-3.jpg"/></a>
         <div class="panel-text">
          <div class="text">
           <h4>[开箱] 坚果Pro 2S惊艳开箱</h4>
           <p>全新炫光及炫光相当惊艳</p>
          </div>
         </div>
        </li>
        <li slot="con3">
         <a class="panel-img" href="#"><img src="../../assets/img/goods/poster-2.jpg"/></a>
         <div class="panel-text">
          <div class="text">
           <h4>[开箱] 纯白色坚果Pro2 图赏</h4>
           <p>有美如斯, 冰清玉洁</p>
          </div>
         </div>
        </li>
        <li slot="con4">
         <a class="panel-img"><img src="../../assets/img/goods/poster-4.jpg"/></a>
         <div class="panel-text">
          <div class="text">
           <h4>[合辑] 九月优秀摄影作品展示</h4>
           <p>8月优秀作品如期而至</p>
          </div>
         </div>
        </li>
     </panel>
    </div>
</template>
<script>
 import shopBanner from '../../pages/Home/shopBanner'
 import lShelf from '../../components/shelf'
 import goodsItem from '../../components/goodsItem'
 import panel from '../../components/activePanel'

 export default{
  name: 'shop',
  data () {
      return {
        hot:[{id:1,productName:'坚果 Pro 2S',salePrice:1,sortOrder:1,subTitle:'双系统,无限屏',picUrl:require('../../assets/img/goods/tv.jpg'),panelId:1},{id:2,productName:'坚果 R1',salePrice:1,sortOrder:1,subTitle:'次世代旗舰手机，内藏来自未来的“电脑”',picUrl:require('../../assets/img/goods/notbook.jpg'),panelId:1}],
        gf:[{id:1,productName:'坚果 3 前屏钢化玻璃保护膜',salePrice:1,sortOrder:1,subTitle:'超强透光率、耐刮花、防指纹',picUrl:require('../../assets/img/goods/afffd.jpg'),panelId:1},
         {id:2,productName:'坚果 Pro 2 特别版',salePrice:1,sortOrder:1,subTitle:'漂亮得不像实力派',picUrl:require('../../assets/img/goods/afd.jpg'),panelId:1},
         {id:3,productName:'Smartisan 半入耳式耳机',salePrice:1,sortOrder:1,subTitle:'经典配色、专业调音、高品质麦克风',picUrl:require('../../assets/img/goods/earphone.jpg'),panelId:1},
         {id:4,productName:'坚果 Pro 2 特别版',salePrice:1,sortOrder:1,subTitle:'漂亮得不像实力派',picUrl:require('../../assets/img/goods/p30.jpg'),panelId:1},
         {id:5,productName:'坚果3手机壳',salePrice:1,sortOrder:1,subTitle:'经典配色、专业调音、高品质麦克风',picUrl:require('../../assets/img/goods/phonet.png'),panelId:1},
         {id:6,productName:'DSC-RX100M5A 黑卡数码相机',salePrice:1,sortOrder:1,subTitle:'经典配色、专业调音、高品质麦克风',picUrl:require('../../assets/img/goods/camera.jpg'),panelId:1}]
      }
    },
  components:{
    shopBanner,
    lShelf,
    goodsItem,
    panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
 .hot,.gf{
    display: flex;
    flex-flow: row;
    width:100%;
    flex-wrap: wrap;
 }
 .hot>div{
   flex:1;
   width:25%;
 }
 .imgBig{
    width:50%;
    height:430px;
    vertical-align: top;
    overflow: hidden;
 }
 .imgBig img{
    display: block;
    height: 100%;
 }
</style>
