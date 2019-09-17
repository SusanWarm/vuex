<template>
<div class="ticket_box">
 <shelf title="我的优惠">
  <div slot="head-right" class="head-right">
     <div class="head_btn">兑换码</div>
  </div>
  <div slot="content">
   <is-empty></is-empty>
  </div>
 </shelf>
</div>
</template>

<script>
 import shelf from '../../components/shelf'
 import isEmpty from '../../components/userEmpty'

 export default {
  name: 'ticket',
  components:{
    shelf,
    isEmpty
  }
 }
</script>

<style scoped>
 .shelf-box{
  width: 100%;
  overflow: hidden;
 }
.ticket_box {
 position: relative;
}
.head-right{
  position: absolute;
  right: 20px;
  top:0;
  vertical-align: middle;
}
.head_btn{
  border: 1px solid #ccc;
  height: 30px;
  line-height: 30px;
  border-radius: 6px;
  margin:16px;
  padding:0 5px;
  text-align: center;
  cursor: pointer;
}
</style>
