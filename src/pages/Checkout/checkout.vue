<template>
 <div class="carPage">
  <top-nav :showNav="false"></top-nav>
  <shelf title="收货信息">
   <div slot="content">
    <ul class="address_box">
     <li class="address_item" v-for="(item,i) in add"  :data-id="item.id" :class="{setDef:i==0}">
      <div class="address_detail">
       <p  :class="{add_name:item.setDefault===true}">{{item.username}}</p>
       <p>{{item.phone}}</p>
       <p class="add_address">{{item.address}}</p>
      </div>
      <div class="address_btn">
       <div @click="update(item,i)">修改</div>
       <div>删除</div>
      </div>
     </li>
     <li @click="update()" class="address_item">
      <div class="add_cont" >
       <i class="el-icon-plus plus"></i>
       <div>使用新地址</div>
      </div>
     </li>
    </ul>
   </div>
  </shelf>
  <!--弹出表单-->
  <alerts :title="propName" :open="isOpen">
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
  <!--购物清单-->
  <shelf title="购物清单">
   <div slot="content">
      <div class="box-inner">
         <div class="box-title">
            <span class="ch_info">商品信息</span>
            <span class="ch_price">单价</span>
            <span class="ch_amount">数量</span>
            <span class="ch_money">应付金额</span>
         </div>
         <div class="box-table">
            <div class="ch_info  table_info">
               <div class="wrap_img"><img src="../../assets/img/goods/afd.jpg"/></div>
               <div>坚果三脚架自拍杆</div>
            </div>
            <div class="ch_price">
                 <h3><span>￥</span>99</h3>
            </div>
            <div class="ch_amount">
                <h3>1</h3>
            </div>
            <div class="ch_money">99</div>
         </div>
      </div>
   </div>
  </shelf>
  <!--发票个人信息-->
  <shelf title="发票信息">
    <div slot="content">
       <div class="ticket_content">
          <div class="detail">
           <p>发票类型：电子发票</p>
           <p>发票抬头：<el-radio v-model="radio" label="1">个人</el-radio> <el-radio v-model="radio" label="2">单位</el-radio></p>
           <p>发票内容：购买商品明细</p>
           <p>邮箱地址：<label class="detail_input"><el-input v-model="email_tips" placeholder="填写接收发票信息的邮箱"></el-input></label></p>
          </div>
          <ol class="invoice">
           <li>*由于商城票据调整，电子 发票将于7月开具。</li>
           <li>*请您填写邮箱地址，电子发票将于系统恢复后，第一时间发送至您的邮箱。</li>
           <li>*电子发票是税务局认可的有效付款凭证，可作为服务凭据，电子发票打印后可以用于企业报销。</li>
          </ol>
       </div>
    </div>
  </shelf>
 </div>
</template>
<script>
 import topNav from '../../common/topNav'
 import shelf from '../../components/shelf'
 import alerts from '../../components/pop'
 import aleButton from '../../components/Shopbtn'

export default {
 name: "checkout",
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
        add:[{id:'0',username:'lsy',phone:'15722900763',address:'江苏南京溧水',setDefault:true}],
        ind:0,
        radio:'1',
        email_tips:'',
        rules:{
          name:[{required:true,message:'请输入用户名',trigger:'blur'}],
          phone:[{validator:validPhone,trigger:'blur'}]
        },
        form:{
           id:'',
           name:'',
           phone:'',
           address:'',
          setDefault:''
        },
        isOpen:false,
        propName:''
       }
 },
 components:{
  shelf,
  topNav,
  alerts,
  aleButton
 },
 methods:{
      check(){
        this.ind=0;
      },
  //新增收货地址 和修改功能
       update(item){
        this.isOpen=true
        if(item){
         this.propName='管理收货地址'
         this.form.id=item.id;
         this.form.name=item.username;
         this.form.phone=item.phone;
         this.form.address=item.address;
         this.form.setDefault=item.setDefault
        }else{
         this.propName='新增收货地址';
         this.form.id='';
         this.form.name='';
         this.form.phone='';
         this.form.address='';
         this.form.setDefault=false
        }
       },
      //保存添加的地址
      save(obj){
       this.isOpen=false;
       if(obj.id){
          this.doUpdate(obj)
       }else{
         obj.id=this.add.length;
         this.add.push(obj);
       }
     },
     //保存修改的值
     doUpdate(k){
      let self=this;
      this.add.forEach(function (item) {
       if(item.id===k.id){
        item.username=k.username;
        item.phone=k.phone;
        item.address=k.address;
        item.setDefault=self.checkDefault(k);
       }
       self.changePosition(self.add)
      })
     },
     //放到第一个位置
     changePosition(obj){
        var self=this;
        obj.forEach(function (item,t) {
            if(item.setDefault===true){
               var arr=self.add.splice(t,1);
               self.add.unshift(arr[0]);
            }
        })
     },
     //去掉已经选中的默认地址
     checkDefault(b){
      if(b.setDefault){
       //查看是否有值为true
       let ind=-1;
       this.add.forEach((p,t)=>{
        if(p.setDefault===true){
            ind=t;
        }
       });
       if(ind!==-1){
        //将原来是true的设置为false
        this.add[ind].setDefault=false;
       }
       return b.setDefault
      }else{
        return b.setDefault
      }
     },

      //删除
     del(){

     },
     }
    }
</script>

<style scoped>
 @import "../../assets/css/cart.css";
 .el-form-item,.ale-input{
   margin-bottom:19px;
 }
 .ale-input{
  overflow: hidden;
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
.setDef{
  border: 1px solid #6fb4ea !important;
}
.add_name:after{
 content: "\2713";
 color: #6fb4ea;
 display: inline-block;
 position: absolute;
 top:20px;
 font-weight: bolder;
 font-size: 24px;
 right: 20px;

}
 /*收货信息*/
.address_box{
  padding:20px;
  background: #fff;
}
 .address_item{
   width: 276px;
   height: 158px;
   border: 1px solid #ccc;
   padding:15px;
  cursor: pointer;
   display: inline-block;
   vertical-align: middle;
   margin-left: 10px;
   position: relative;
 }
 .address_item:hover{
   background: rgba(0,0,0,0.02);
 }
 .address_item:hover .address_btn{
   opacity: 1;
 }
 .add_cont{
    width: 100px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    top:50%;
    transform: translateY(-50%);
 }
 .plus{
    margin-bottom: 10px;
    user-select: none;
 }
 .address_detail p{
     line-height: 24px;
     color: #999;
     padding: 0;
 }
 .address_btn{
   display: flex;
   flex-flow: row;
   width: 100%;
   height: 30px;
   position: absolute;
   bottom:0;
   left: 0;
   right: 0;
   border-top:1px solid #e1e1e1;
   opacity: 0;
  transition: all .2s ease;
 }
 .address_btn div{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    flex: 1;
    font-size: 12px;
 }
 .address_btn div:first-child{
   border-right: 1px solid #e1e1e1;
 }
/*发票信息*/
 .ticket_content{
   padding: 20px;
   background: #fff;
 }
 .detail{
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
 }
 .detail p{
   line-height: 3;
 }
 .invoice{
   margin-top:10px;
 }
 .invoice li{
   line-height: 2;
   font-size: 12px;
 }
 .detail_input{
   display: inline-block;
 }
</style>
