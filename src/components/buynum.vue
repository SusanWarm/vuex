<template>
    <div class="buyNum">
       <div :class="{buyDisable:num<=1}" class="down" @click="minus">-</div>
       <span v-text="num"></span>
       <div class="up" @click.stop.prevent="add()">+</div>
    </div>
</template>

<script>
export default {
 name: 'buynum',
 data(){
   return{
      num:1
   }
 },
 methods:{
   add(){
      this.num++;
      this.$emit('editNum',this.num)
   },
   minus(){
      if (this.num<=1){
         this.num=1;
      } else{
        this.num--;
      }
    this.$emit('editNum',this.num)
   }
 }
}
</script>

<style scoped>
.buyNum >div{
   display: inline-block;
   width: 25px;
   height: 25px;
   border-radius: 50%;
   text-align: center;
   margin-right: 5px;
   line-height: 23px;
   font-weight: bolder;
   background: linear-gradient(#fff, #d6d6d6);
   box-shadow: 2px 1px 2px #646464;
}
.buyNum span{
 width: 40px;
 display: inline-block;
 text-align: center;
}
.buyDisable{
 cursor: not-allowed;
 background: linear-gradient(#fff, #fefefe)!important;
 color: #ccc;
}
 .up,.down{
   cursor: pointer;
   user-select: none;
 }
</style>
