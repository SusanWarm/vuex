<template>
     <button class="y_btn" :class="classStyle" @click.stop.prevent="clickBtn">
        <span>{{text}}</span>
     </button>
</template>

<script>
export default {
  name: 'Shopbtn',
 data(){
    return{

    }
 },
 props:{
    text:{
      type:String,
      default:'查看详情'
    },
  classStyle:{
     type:String,
     default:'default'
  }
 },
 methods:{
  clickBtn(){
     this.$emit('btnClick')
  }
 }
}
</script>

<style scoped>
 .y_btn{
  display: inline-block;
  font-size: 12px;
  border:none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
 }
 /*查看详情*/
 .default{
    background: #f7f7f7;
    margin:0 5px;
    border:1px solid #e8e8e8;
 }
 .default:hover {
  background-image: linear-gradient(180deg, #ececec, #eeeeee);
 }
 /*加入购物车*/
 .shop{
  margin:0 5px;
  background-image: linear-gradient(180deg, #86a7f7, #4d87e6);
  color: #fff;
 }
 .shop:hover{
  background-image: linear-gradient(180deg, #86a7f7, #4d72d1);
 }

 /*大小*/
.bigBtn{
  height: 40px;
  padding: 12px 40px;
}
.midBtn{
 height: 30px;
 padding: 5px 20px;
}
</style>
