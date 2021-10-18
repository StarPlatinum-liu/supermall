//防抖函数
export function debounce(funs,dealy){
  let timer = null
  return function (...args){
    if(timer){ clearTimeout(timer)}
    timer = setTimeout(() => {
      funs.apply(this,args)
    },dealy)
  }
}