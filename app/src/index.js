import {createStore} from 'redux'
// 新建store
// 通过reducer建立
// 根据老的state和action生成新的状态
function counter(state=0,action){
  switch(action.type){
      case 'add':
      return state+1
      case 'reduce':
      return state-1
      default:
      return 10
  }
}
// 新建store
const store = createStore(counter)
const init = store.getState()
console.log(init);
function listener(){
    const current = store.getState()
    console.log(current);
}
store.subscribe(listener)
// 派发事件
store.dispatch({type:'add'})
store.dispatch({type:'reduce'})




