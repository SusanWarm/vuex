<template>
     <div class="page-main page_body">
      <div class="page-card">
         <div class="banner">
            <div class="banner_img">
             <a href="#" v-for="(val,index) in bannerVal" v-show="index==cur">
              <img  :src="val" width="100%"/>
             </a>
            </div>
            <div class="ban_point">
             <span v-for="(val,index) in bannerVal" @click="cur=index"></span>
            </div>
         </div>
      </div>
     </div>
</template>

<script>
export default {
   name: 'shopBanner',
 data () {
     return {
      cur:0,
      bannerVal:[require('../../assets/img/cdb.jpg'),require(`../../assets/img/lou1.png`)]
   }
},
 mounted(){
    this.doBanner();
 },
 methods:{
     doBanner(){
        let  self=this;
        setInterval(function () {
           self.cur++;
           if(self.cur>=2){
            self.cur=0;
           }
        },5000)
     }
 }
}
</script>

<style scoped>


 .banner{
   position: relative;
 }
 .banner a{
   text-decoration: none;
   background-color: transparent;
 }
 .banner a img{
   display: block;
   border-style: none;
   max-width: 100%;
  transition: all 2s;
  border-radius: 8px;
}
 .ban_point{
    position: absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
 }
 .ban_point span{
    border-radius: 50%;
    border:1px solid #fff;
    width: 10px;
    height: 10px;
    background: #fff;
    margin:6px;
    display: inline-block;
 }
</style>
