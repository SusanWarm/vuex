<template>
 <div class="address_box">
  <shelf title="收货地址">
     <div slot="head-right" class="head-right">
      <el-button type="info" icon="el-icon-circle-plus" @click="isOpen=true">信息按钮</el-button>
     </div>
     <div slot="content">
      <is-empty></is-empty>
     </div>
  </shelf>
  <alerts title="添加收货地址" :open="isOpen">
   <div slot="ale_main">
    <el-form ref="form" :model="form" :rules="rules"  label-width="80px" label-position="top" :data-id="form.id">
     <el-form-item prop="name"><el-input placeholder="收货人姓名" v-model="form.name"></el-input></el-form-item>
     <el-form-item prop="phone"><el-input placeholder="收货人手机号" v-model="form.phone"></el-input></el-form-item>
     <div class="ale-input"><el-input placeholder="请输入详细地址" v-model="form.address"></el-input></div>
     <div class="ale-input">
      <el-checkbox v-model="form.setDefault">设为默认地址</el-checkbox>
     </div>
    </el-form>
   </div>
   <div slot="ale_foot" class="ale_foot">
    <div class="ale_m" ><ale-button text="取消" classStyle="default midBtn" @click.native="isOpen=false"></ale-button></div>
    <ale-button text="确定" classStyle="shop midBtn" @click.native="save({id:form.id,username:form.name,phone:form.phone,address:form.address,setDefault:form.setDefault})"></ale-button>
   </div>
  </alerts>
 </div>
</template>

<script>
 import shelf  from '../../components/shelf'
 import aleButton from '../../components/Shopbtn'
 import isEmpty from '../../components/userEmpty'
 import alerts from '../../components/pop'

 export default {
  name: 'addressList',
  data(){
   var validPhone=(rule,value,callback)=>{
    if(value=== ''){
     return callback(new Error('手机号不能为空'))
    }else{
     let p=/^1[3456789]\d{9}$/;
     if(!p.test(value)){
      return callback(new Error('手机号格式不正确'))
     }
    }
   };
    return{
     isOpen:false,
     propName:'',
     form:{
      id:'',
      name:'',
      phone:'',
      address:'',
      setDefault:''
     },
     rules:{
      name:[{required:true,message:'请输入用户名',trigger:'blur'}],
      phone:[{validator:validPhone,trigger:'blur'}]
     }
    }
  },
  components:{
   shelf,
   aleButton,
   isEmpty,
   alerts
  }
 }
</script>
<style scoped>
 .el-form-item,.ale-input{
  margin-bottom:19px;
 }
 .address_box{
   position: relative;
 }
 .shelf-box{
  width: 100%;
  overflow: hidden;
 }
 .head-right{
   position: absolute;
   top:0;
   right: 20px;
   vertical-align: middle;
 }
 .ale_foot{
  padding:12px;
  text-align: center;
  background: #e9e9e9;
  border-radius: 0 0 6px 6px;
  overflow: hidden;
 }
 .ale_m{
  display: inline-block;
  margin-right: 20px;
 }
</style>
