import { combineReducers } from 'redux'
import msgsReducer from './msgs'

export default combineReducers({
    msgs:msgsReducer
})