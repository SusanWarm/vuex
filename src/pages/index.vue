<template>
 <div>
   <top-nav></top-nav>
   <router-view></router-view>
 </div>
</template>
<script>
 import topNav from '../common/topNav'
 export default{
  name: 'index',
  components:{
   topNav
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
