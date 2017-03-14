import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import store from 'STORE'

// ================================
// 同步的 Reducers（即应用初始化所必需的）
// ================================
const syncReducers = {
  router: routerReducer
}

// ================================
// 异步加载的 Reducers（Code Splitting 按需加载的）
// ================================
const asyncReducers = {}

export function createRootReducer() {
  return combineReducers({
    ...syncReducers,
    ...asyncReducers
  })
}

export function injectReducer(key,reducer){
    asyncReducers[key]=reducer
    store.replaceReducer(createRootReducer())
}
