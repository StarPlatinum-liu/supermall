export default{

  addCart(context,payload){
    return new Promise((resolve,reject) => {
      let oldProduce = context.state.cartList.find(item => item.iid === payload.iid)


      if(oldProduce){
        // oldProduce.count += 1 
        context.commit('addCounter',oldProduce)
        resolve('商品数量+1')
      }else{
        payload.count = 1
        // context.cartList.push(payload)
        context.commit('addToCart',payload)
        resolve('已添加到购物车')
      }
    })

  },

}