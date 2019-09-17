<template>
    <div class="foot">
        <div class="page-main">
          <div class="main_foot">
           <ul class="shop_foot">
            <li>
             <h3>订单服务</h3>
             <ul class="sec_foot">
              <li><a href="#">购买指南</a></li>
              <li><a href="#">发货政策</a></li>
             </ul>
            </li>
            <li>
             <h3>服务支持</h3>
             <ul class="sec_foot">
              <li><a href="#">自助服务</a></li>
              <li><a href="#">使用帮助</a></li>
              <li><a href="#">维修门店</a></li>
             </ul>
            </li>
            <li>
             <h3>媒体中心</h3>
             <ul class="sec_foot">
              <li><a href="#">新闻动态</a></li>
              <li><a href="#">官方视频</a></li>
              <li><a href="#">图片资源</a></li>
             </ul>
            </li>
            <li>
             <h3>关注我们</h3>
             <ul class="sec_foot">
              <li><a href="#">新浪微博</a></li>
              <li><a href="#">官方微信</a></li>
              <li><a href="#">荣誉奖项</a></li>
             </ul>
            </li>
           </ul>
           <div class="shop_fr">
            <h2>400-627-345</h2>
            <div>周一至周日 9：00-18：00</div>
           </div>
          </div>
        </div>
        <div class="foot_line"></div>
    </div>
</template>

<script>
export default {
  name: "foot"
}
</script>

<style scoped>
.foot{
  margin-top:20px;
  padding: 60px 0 55px;
  border-top:1px solid #e6e6e6;
  background: #fafafa;
  color: #7b7b7b;
}
.main_foot{
  overflow: hidden;
}
.shop_foot{
   float: left;
}
.shop_foot h3{
   color: #595959;
}
 .shop_foot li{
    margin-right: 40px;
    display: inline-block;
    line-height: 36px;
    vertical-align: top;
 }
 .sec_foot li{
    display: block;
    color: #7b7b7b;
 }
 .sec_foot li a{
   color: #7b7b7b;
   text-decoration: none;
 }
 .sec_foot li a:hover{
    color: #86c7ff;
 }
 .shop_fr{
    float: right;
    vert-align: top;
    padding:15px;
 }
 .shop_fr h2{
    font-size: 19px;
    color: #86c7ff;
    line-height: 2;
 }
 .foot_line{
   width: 100%;
   border-top: 1px solid #e6e6e6;
   margin-top: 25px;
 }
</style>
