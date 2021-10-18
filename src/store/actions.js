export default{
  addCart(context,payload){
    let oldProduce = context.state.cartList.find(item => item.iid === payload.iid)

    if(oldProduce){
      // oldProduce.count += 1 
      context.commit('addCounter',oldProduce)
    }else{
      payload.count = 1
      // context.cartList.push(payload)
      context.commit('addToCart',payload)
    }
  }
}