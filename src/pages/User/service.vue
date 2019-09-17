<template>
   <div class="service_box">
    <shelf title="售后服务" >
     <div slot="head-right" class="head-right">
      <div><el-select v-model="keyState"><el-option v-for="i in states" :key="i.value" :label="i.label" :value="i.label"></el-option></el-select></div>
      <div>
       <el-select v-model="keyMonth" placeholder="请选择">
        <el-option v-for="i in months"  :key="i.value" :label="i.label" :value="i.label"></el-option>
       </el-select>
      </div>
     </div>
      <div slot="content">
        <is-empty text="服务单"></is-empty>
      </div>
    </shelf>
   </div>
</template>

<script>
 import shelf from '../../components/shelf'
 import isEmpty from '../../components/userEmpty'
export default {
  name: 'service',
  components:{
    shelf,
    isEmpty
  },
 data(){
  return {
   keyMonth: '最近三个月',
   keyState: '全部',
   months: [{value: 'Beijing', label: '最近三个月'}, {value: 'Shanghai', label: '2019'}, {
    value: 'Nanjing',
    label: '2018'
   }, {value: 'Chengdu', label: '2017'}, {value: 'Shenzhen', label: '2016'}],
   states: [{value: '0', label: '全部'}, {value: '1', label: '已完成'}, {value: '2', label: '未完成'}, {value: '-1', label: '已关闭'}]
  }
 },
}
</script>

<style scoped>
 .shelf-box{
  width: 100%;
  overflow: hidden;
 }
 .service_box{
   position: relative;
 }
 .head-right{
  position: absolute;
  right: 20px;
  top:0;
 }
 .head-right>div{
  float: right;
  width: 25%;
  margin-left: 10px;
 }
</style>
