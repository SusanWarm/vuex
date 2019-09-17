import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
     cartList:[],
     cartShow:false
  },
  mutations:{
     addCart(state,data){
      //购物车是否添加过
        let flag=true;
        let goodsData=data;
      state.cartList.forEach(goods=>{
       if(goods.id===data.id) {
          goodsData.count++;
          flag = false;
          state.cartShow=true;
          return
       }
      });
       if(flag){
        Vue.set(goodsData,'count',1);
        state.cartList.push(goodsData)
        state.cartShow=true;
        return
       }
       console.log(state.cartList)
     },
     reduce(state,id){
       state.cartList.forEach((goods,i)=>{
          if(goods.id===id){
              state.cartList.splice(i,1);
          }
       })
   },
   showCar(state){
      state.cartShow=true;
   },
   hideCar(state){
     setTimeout(function () {
      state.cartShow=false;
     },500)
   }
  }
});
