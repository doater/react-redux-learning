import { applyMiddleware, compose, createStore } from 'redux'
import { createRootReducer } from 'REDUCER'
// 实例化Store
const store = createStore(
    createRootReducer,
    window.__INITIAL_STATE__||{}
)
export default store