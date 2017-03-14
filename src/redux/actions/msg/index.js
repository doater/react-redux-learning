const fetchMsg=(msgs)=>({
    type:'FETCH_MSG',
    payload:msgs
})
const addMsg=()=>({
    type:'ADD_MSG',
    payload:Math.random()
})
const clearMsg=()=>({
    type:'CLEAR_MSG',
    payload:[]
})
const delMsg=(msg)=>({
    type:'DEL_MSG',
    payload:msg
})
export default {
    fetchMsg,
    addMsg,
    clearMsg,
    delMsg
} 

export const ACTION_HANDLERS={
    ['FETCH_MSG']:(msgs,{payload})=>payload,
    ['ADD_MSG']:(msgs,{payload})=>[payload,...msgs],
    ['CLEAR_MSG']:(msgs,{payload})=>payload,
    ['DEL_MSG']:(msgs,{payload})=>msgs.filter(
        msg=>msg!=payload
    )
} 