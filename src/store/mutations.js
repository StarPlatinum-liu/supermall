export default{
  addCounter(state,payload){
    payload.count++
  },
  addToCart(state,payload){
    payload.checked = false
    state.cartList.push(payload)
  },
  // isCheck(state,payload){
  //   payload.checked = !payload.checked
  // }

}